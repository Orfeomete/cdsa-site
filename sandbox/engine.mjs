export const VERSION = '1.0.1';
export const DURATION = 600;
export const scenarios = {
  bb3: { title: 'Pilot biyometrisi', code: 'BB3', subtitle: 'Sinyal bozulması ve fizyolojik örüntü',
    channels: [{key:'spo2',name:'SpO₂',unit:'%',min:84,max:100,color:'#7ee2c1'}, {key:'hr',name:'Kalp hızı',unit:'bpm',min:50,max:130,color:'#a7b8ff'}, {key:'hrv',name:'HRV',unit:'ms',min:10,max:90,color:'#eabf82'}],
    presets: [{id:'baseline',label:'Dengeli akış'},{id:'hypoxia',label:'Düşen SpO₂ örüntüsü'},{id:'artifact',label:'Sensör artefaktı'}],
    occurrence:'Fizyolojik sinyal sapması', canonical:'Bu demoda otomatik havacılık olay kodu atanmaz.', mechanism:'Fizyolojik neden bu sentetik sinyalden çıkarılamaz.',
    actions:['İzlemeyi sürdür','Sinyali kontrol et','Durumu değerlendir'], note:'Biyometrik değerler sentetiktir. Örnek eşikler klinik veya uçuşa uygunluk sınırı değildir.' },
  mro: { title:'Bakım emniyeti',code:'MRO',subtitle:'Motor göstergeleri ve veri bütünlüğü',
    channels:[{key:'egt',name:'EGT göstergesi',unit:'°C',min:500,max:900,color:'#7ee2c1'},{key:'vib',name:'Titreşim göstergesi',unit:'a.u.',min:0,max:8,color:'#a7b8ff'},{key:'integrity',name:'Veri güveni',unit:'%',min:0,max:100,color:'#eabf82'}],
    presets:[{id:'baseline',label:'Dengeli akış'},{id:'degradation',label:'Bozulma örüntüsü'},{id:'tamper',label:'Kalibrasyon verisi değişikliği'}],
    occurrence:'Bakım göstergesinde tutarsızlık',canonical:'Olay sonucu, mekanizma alanından ayrı tutulur; MEDA kodu uzman incelemesi bekler.',mechanism:'Kalibrasyon kurcalaması yalnız senaryoda müdahale biliniyorsa kullanılır.',
    actions:['İzlemeyi sürdür','Kaydı karşılaştır','Bakım incelemesine ayır'], note:'Motor eğrileri örnek amaçlıdır; belirli bir motorun bakım limiti veya C-MAPSS kaydı değildir.' },
  atm: { title:'Hava trafiği',code:'ATM',subtitle:'Konum belirsizliği ve ayırma göstergesi',
    channels:[{key:'sep',name:'Ayırma göstergesi',unit:'NM',min:0,max:10,color:'#7ee2c1'},{key:'gnss',name:'GNSS tutarlılığı',unit:'%',min:0,max:100,color:'#a7b8ff'},{key:'latency',name:'Veri gecikmesi',unit:'s',min:0,max:5,color:'#eabf82'}],
    presets:[{id:'baseline',label:'Dengeli akış'},{id:'unknown',label:'Nedeni belirsiz GNSS bozulması'},{id:'jamming',label:'Bilinen karıştırma senaryosu'}],
    occurrence:'Seyrüsefer bilgisi bozulması',canonical:'ATM/CNS üst kategorisi için inceleme adayı; otomatik resmî bildirim değildir.',mechanism:'GNSS bozulması tek başına karıştırma veya aldatma kanıtı değildir.',
    actions:['İzlemeyi sürdür','Veriyi çapraz kontrol et','İnceleme uyarısı üret'], note:'NM değerleri örnek görselleştirme içindir; gerçek ayırma standardı veya ATC talimatı üretilmez.' }
};

export function rng(seed) { let a=seed>>>0; return ()=>{a+=0x6D2B79F5;let t=a;t=Math.imul(t^(t>>>15),t|1);t^=t+Math.imul(t^(t>>>7),t|61);return ((t^(t>>>14))>>>0)/4294967296;}; }
export const clamp=(n,a,b)=>Math.max(a,Math.min(b,n));
export function makeTrace(domain,preset,seed=42,noise=12) {
  const r=rng(seed), trace=[];
  for(let t=0;t<DURATION;t++) {
    const episode=Math.max(0,Math.sin(Math.PI*clamp((t-100)/380,0,1)));
    const n=()=> (r()-.5)*(noise/12);
    let v;
    if(domain==='bb3') v={spo2:clamp(97.5+Math.sin(t/22)*.5+n()*.5-(preset==='hypoxia'?episode*8:0)+(preset==='artifact'&&t%73<6?n()*12:0),84,100),hr:76+Math.sin(t/17)*3+n()*4+(preset==='hypoxia'?episode*25:0),hrv:56+Math.cos(t/28)*4+n()*3-(preset==='hypoxia'?episode*25:0)};
    if(domain==='mro') v={egt:620+Math.sin(t/32)*12+n()*14+(preset==='degradation'?episode*170:0),vib:1.2+Math.sin(t/14)*.2+n()*.4+(preset==='degradation'?episode*4:0),integrity:clamp(98+n()-(preset==='tamper'&&t>=180&&t<420?55:0),0,100)};
    if(domain==='atm') v={sep:clamp(7.5+Math.cos(t/33)*.7+n()*.2-(preset!=='baseline'?episode*4.5:0),0,10),gnss:clamp(97+n()*3-(preset!=='baseline'?episode*68:0),0,100),latency:clamp(.15+Math.abs(n())*.1+(preset!=='baseline'?episode*2.8:0),0,5)};
    trace.push({t,...v});
  }
  return trace;
}
export function indicators(domain,v) {
  // Explicit demonstrator rules; no learned weights or clinical/operational limits.
  const concern=domain==='bb3'?Math.max((96-v.spo2)/10,(v.hr-95)/40):domain==='mro'?Math.max((v.egt-670)/180,(v.vib-2)/5,(90-v.integrity)/65):Math.max((6-v.sep)/5,(85-v.gnss)/75,v.latency/4);
  return {concern:clamp(concern,0,1),level:concern>.55?2:concern>.15?1:0};
}
export function lossMask(count,percent,pattern,seed=42) {
  const lost=Math.round(count*percent/100), mask=Array(count).fill(false);
  if(pattern==='burst') {const start=Math.floor((count-lost)/2);for(let i=start;i<start+lost;i++)mask[i]=true;}
  else {const r=rng(seed^0x51a3),ids=Array.from({length:count},(_,i)=>i);for(let i=count-1;i>0;i--){let j=Math.floor(r()*(i+1));[ids[i],ids[j]]=[ids[j],ids[i]];}for(const i of ids.slice(0,lost))mask[i]=true;}
  return mask;
}
export function coverage(mask) {let best=0,run=0,received=0;for(const missing of mask){if(missing)run=0;else {received++;run++;best=Math.max(best,run);}}return{received,lost:mask.length-received,longest:best,coverage:mask.length?received/mask.length:0};}
export function eventRows(domain,preset,trace,mask,end=599) {
  const out=[];let previous=0;
  for(let i=0;i<=Math.min(end,trace.length-1);i++) {
    // No new indicator decision can be observed without a delivered packet.
    // On restoration compare against the last delivered indicator state.
    if(!mask[i]) {
      const level=indicators(domain,trace[i]).level;
      if(level!==previous)out.push({t:i,kind:'indicator',label:scenarios[domain].actions[level],level});
      previous=level;
    }
    if(mask[i]&&!mask[i-1])out.push({t:i,kind:'gap',label:'Kayıt boşluğu başladı',level:1});
    if(!mask[i]&&mask[i-1])out.push({t:i,kind:'restore',label:'Paket akışı geri geldi',level:0});
  }
  return out;
}
export function mechanism(domain,preset) {
  if(domain==='atm'&&preset==='jamming')return {label:'GNSS karıştırması · senaryoda biliniyor',reference:'B v27: yaklaşık ATT&CK eşlemesi T1499*; tek başına saldırı tespiti değildir.',certainty:'Senaryo girdisi'};
  if(domain==='atm'&&preset==='unknown')return {label:'Neden belirsiz / inceleme bekliyor',reference:'Karıştırma, aldatma veya saldırgan atfı yapılmadı. ATT&CK kodu atanmadı.',certainty:'Belirsiz'};
  if(domain==='mro'&&preset==='tamper')return {label:'Kalibrasyon verisine müdahale · senaryo girdisi',reference:'B v27 kalibrasyon kurcalaması sınıfı. Resmî MEDA veya tehdit kodu otomatik atanmadı.',certainty:'Senaryo girdisi'};
  return {label:'Mekanizma atanmadı',reference:scenarios[domain].mechanism,certainty:'İnceleme bekliyor'};
}

export const researchResults=[
  {domain:'BB3',tree:.7042,treeSD:.0012,ppo:.3514,ppoSD:.0124,ppoArm:'Merkezî PPO'},
  {domain:'MRO',tree:.4832,treeSD:.0648,ppo:.1686,ppoSD:.0502,ppoArm:'FedAvg PPO'},
  {domain:'ATM',tree:.9996,treeSD:.0005,ppo:.2498,ppoSD:.0140,ppoArm:'Merkezî PPO'}
];

function mul(a,b){let p=0;for(let i=0;i<8;i++){if(b&1)p^=a;let high=a&128;a=(a<<1)&255;if(high)a^=27;b>>=1;}return p;}
function pow(a,n){let y=1;while(n){if(n&1)y=mul(y,a);a=mul(a,a);n>>=1;}return y;}
export function splitSecret(secret,cryptoProvider=globalThis.crypto) {
  const coefficients=cryptoProvider.getRandomValues(new Uint8Array(secret.length));
  return [1,2,3].map(x=>({x,bytes:Uint8Array.from(secret,(s,i)=>s^mul(coefficients[i],x))}));
}
export function joinSecret(shares) {
  if(shares.length<2)throw Error('En az iki farklı anahtar payı gerekli.');
  const [a,b]=shares;if(a.x===b.x||a.bytes.length!==b.bytes.length)throw Error('Anahtar payları geçersiz.');
  const denominator=pow(a.x^b.x,254);
  return Uint8Array.from(a.bytes,(v,i)=>mul(v,mul(b.x,denominator))^mul(b.bytes[i],mul(a.x,denominator)));
}
const encoder=new TextEncoder(),decoder=new TextDecoder();
export async function sealRecord(record,provider=globalThis.crypto) {
  if(!provider?.subtle)throw Error('Şifreleme HTTPS veya localhost üzerinde kullanılabilir.');
  const raw=provider.getRandomValues(new Uint8Array(32));
  const key=await provider.subtle.importKey('raw',raw,{name:'AES-GCM'},false,['encrypt']);
  const header={format:'CDSA-SANDBOX-1',purpose:'synthetic-demonstrator',version:VERSION,domain:record.domain,seed:record.seed};
  const aad=encoder.encode(JSON.stringify(header)),prefix=provider.getRandomValues(new Uint8Array(8));
  const packets=await Promise.all(record.trace.map(async (sample,i)=>{
    const iv=new Uint8Array(12);iv.set(prefix);new DataView(iv.buffer).setUint32(8,i,false);
    const ciphertext=new Uint8Array(await provider.subtle.encrypt({name:'AES-GCM',iv,additionalData:aad,tagLength:128},key,encoder.encode(JSON.stringify(sample))));
    return {index:i,iv,ciphertext};
  }));
  const shares=splitSecret(raw,provider);raw.fill(0);
  return {header,aad,packets,shares};
}
export async function openPacket(sealed,index,shares,tamper=false,provider=globalThis.crypto) {
  const raw=joinSecret(shares),key=await provider.subtle.importKey('raw',raw,{name:'AES-GCM'},false,['decrypt']);raw.fill(0);
  const p=sealed.packets[index],ciphertext=p.ciphertext.slice();if(tamper)ciphertext[0]^=1;
  const plain=await provider.subtle.decrypt({name:'AES-GCM',iv:p.iv,additionalData:sealed.aad,tagLength:128},key,ciphertext);
  return JSON.parse(decoder.decode(plain));
}
export function exportRecord(config,trace,mask){return {format:'CDSA-SANDBOX-1',version:VERSION,provenance:'synthetic browser demonstration; not a trained PPO run',config,summary:coverage(mask),events:eventRows(config.domain,config.preset,trace,mask),samples:trace.map((s,i)=>mask[i]?{t:s.t,missing:true}:s)};}
