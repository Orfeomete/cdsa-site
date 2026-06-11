/* CDSA pillar result pages — shared logic.
   All displayed numbers are read verbatim from /data/<pillar>/*.json
   (copies of the repos' experiments/results files). Nothing is computed
   or invented client-side beyond percentage widths for bars. */

let lang = 'tr';
function applyLang() {
  const btn = document.querySelector('.lang-btn');
  if (btn) btn.textContent = lang === 'tr' ? 'EN' : 'TR';
  document.querySelectorAll('[data-tr]').forEach(el => {
    const v = el.getAttribute('data-' + lang);
    if (v) el.innerHTML = v;
  });
}
function toggleLang() { lang = lang === 'tr' ? 'en' : 'tr'; applyLang(); }

function t(tr, en) { return `data-tr="${tr.replace(/"/g, '&quot;')}" data-en="${en.replace(/"/g, '&quot;')}"`; }
function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }

async function loadJSON(path) {
  const r = await fetch(path);
  if (!r.ok) throw new Error(path + ' → HTTP ' + r.status);
  return r.json();
}

const CFG_ORDER = ['random', 'central_ppo', 'fedavg', 'fedprox', 'fedprox_dp'];
const CURVE_COLORS = { central_ppo: '#0891b2', fedavg: '#2563eb', fedprox: '#7c3aed', fedprox_dp: '#db2777' };
const MOD_COLORS = ['#2563eb', '#0891b2', '#7c3aed', '#db2777', '#d97706'];

function cfgLabel(key, config) {
  switch (key) {
    case 'random': return 'Random baseline';
    case 'central_ppo': return 'Central PPO';
    case 'fedavg': return 'FedAvg';
    case 'fedprox': return 'FedProx' + (config && config.fedprox_mu != null ? ` (μ=${config.fedprox_mu})` : '');
    case 'fedprox_dp': return 'FedProx + DP' + (config && config.dp && config.dp.epsilon != null ? ` (ε=${config.dp.epsilon})` : '');
    default: return key;
  }
}

function renderChips(res) {
  const el = document.getElementById('chips');
  const chips = [];
  if (res.fedavg) chips.push([String(res.fedavg.critical_recall), 'FedAvg kritik recall', 'FedAvg critical recall']);
  if (res.central_ppo) chips.push([String(res.central_ppo.critical_recall), 'Central PPO kritik recall', 'Central PPO critical recall']);
  if (res.fedavg) chips.push([res.fedavg.accuracy_pct + '%', 'FedAvg doğruluk', 'FedAvg accuracy']);
  if (res.fedavg && res.fedavg.convergence_round != null) chips.push([String(res.fedavg.convergence_round), 'FedAvg yakınsama turu', 'FedAvg convergence round']);
  if (res.seed != null) chips.push([String(res.seed), 'Seed (faz_a_results.json)', 'Seed (faz_a_results.json)']);
  el.innerHTML = chips.map(([v, ktr, ken]) =>
    `<div class="chip"><div class="v">${esc(v)}</div><div class="k" ${t(ktr, ken)}>${esc(ktr)}</div></div>`).join('');
}

function renderCurves(curves) {
  const keys = Object.keys(curves).filter(k => Array.isArray(curves[k]));
  const maxLen = Math.max(...keys.map(k => curves[k].length));
  const labels = Array.from({ length: maxLen }, (_, i) => i + 1);
  new Chart(document.getElementById('curvesChart'), {
    type: 'line',
    data: {
      labels,
      datasets: keys.map(k => ({
        label: cfgLabel(k, null),
        data: curves[k],
        borderColor: CURVE_COLORS[k] || '#64748b',
        backgroundColor: 'transparent',
        pointRadius: 2,
        borderWidth: 2,
        tension: 0.25,
      })),
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { position: 'bottom' } },
      scales: {
        x: { title: { display: true, text: 'evaluation checkpoint' } },
        y: { title: { display: true, text: 'mean reward (eval)' } },
      },
    },
  });
}

function renderTable(res) {
  const rows = CFG_ORDER.filter(k => res[k]).map(k => {
    const r = res[k];
    const hl = k === 'fedavg' ? ' class="hl"' : '';
    return `<tr${hl}><td>${esc(cfgLabel(k, res.config))}</td>` +
      `<td>${esc(r.mean_reward)}</td>` +
      `<td>${esc(r.accuracy_pct)}%</td>` +
      `<td>${esc(r.critical_recall)}</td>` +
      `<td>${r.convergence_round != null ? esc(r.convergence_round) : '—'}</td></tr>`;
  }).join('');
  document.getElementById('cfgTable').innerHTML =
    `<thead><tr><th ${t('Konfigürasyon', 'Configuration')}>Konfigürasyon</th>` +
    `<th ${t('Ort. ödül', 'Mean reward')}>Ort. ödül</th>` +
    `<th ${t('Doğruluk', 'Accuracy')}>Doğruluk</th>` +
    `<th ${t('Kritik recall', 'Critical recall')}>Kritik recall</th>` +
    `<th ${t('Yakınsama turu', 'Convergence round')}>Yakınsama turu</th></tr></thead>` +
    `<tbody>${rows}</tbody>`;
}

function renderXAI(res) {
  if (!res.xai || !res.xai.mean_pct_by_action) return;
  document.getElementById('xaiSection').hidden = false;
  const actions = res.xai.mean_pct_by_action;
  const modSet = [];
  Object.values(actions).forEach(m => Object.keys(m).forEach(k => { if (!modSet.includes(k)) modSet.push(k); }));
  document.getElementById('xaiLegend').innerHTML = modSet.map((m, i) =>
    `<span style="--c:${MOD_COLORS[i % MOD_COLORS.length]}">${esc(m)}</span>`).join('');
  document.getElementById('xaiBars').innerHTML = Object.entries(actions).map(([act, mods]) => {
    const segs = modSet.filter(m => mods[m] != null).map((m, i) => {
      const pct = mods[m];
      return `<div style="width:${pct}%;background:${MOD_COLORS[modSet.indexOf(m) % MOD_COLORS.length]}" title="${esc(m)}: ${esc(pct)}%">${pct >= 12 ? esc(pct) + '%' : ''}</div>`;
    }).join('');
    return `<div class="xai-action"><div class="name">${esc(act)}</div><div class="stackbar">${segs}</div></div>`;
  }).join('');

  const cf = res.xai.counterfactual;
  if (cf) {
    document.getElementById('cfCard').innerHTML =
      `<div class="cf-flow">` +
      `<span class="tag" ${t('orijinal karar', 'original action')}>orijinal karar</span>` +
      `<span class="tag result">${esc(cf.original_action)}</span>` +
      `<span>→</span>` +
      `<span class="tag removed">${esc(cf.modality_removed)}</span>` +
      `<span class="tag" ${t('modalite kaldırıldı', 'modality removed')}>modalite kaldırıldı</span>` +
      `<span>→</span>` +
      `<span class="tag result">${esc(cf.counterfactual_action)}</span>` +
      `</div>` +
      `<p style="margin-top:1rem;font-size:0.85rem;color:var(--text-muted);line-height:1.7" ` +
      t(`Karşıolgusal analiz (faz_a_results.json &rarr; xai.counterfactual): <code>${esc(cf.modality_removed)}</code> modalitesi kaldırıldığında ajanın kararı <code>${esc(cf.original_action)}</code> yerine <code>${esc(cf.counterfactual_action)}</code> olur.`,
        `Counterfactual analysis (faz_a_results.json &rarr; xai.counterfactual): removing the <code>${esc(cf.modality_removed)}</code> modality changes the agent's action from <code>${esc(cf.original_action)}</code> to <code>${esc(cf.counterfactual_action)}</code>.`) +
      `></p>`;
  } else {
    document.getElementById('cfWrap').hidden = true;
  }
}

let decData = null, decIdx = 0;
function renderDecision() {
  const s = decData.samples[decIdx];
  document.getElementById('decCounter').textContent = (decIdx + 1) + ' / ' + decData.samples.length;
  const dist = Object.entries(s.action_distribution).sort((a, b) => b[1] - a[1]);
  document.getElementById('decDist').innerHTML = dist.map(([a, p]) =>
    `<div class="distbar"><div class="lbl"><span>${esc(a)}</span><span>${esc(p)}</span></div>` +
    `<div class="track"><div class="fill" style="width:${Math.min(100, p * 100)}%"></div></div></div>`).join('');
  document.getElementById('decFields').innerHTML =
    `<div class="kv"><span class="k" ${t('Karar', 'Decision')}>Karar</span><span class="v">${esc(s.decision)}</span></div>` +
    `<div class="kv"><span class="k" ${t('Güven', 'Confidence')}>Güven</span><span class="v">${esc(s.confidence)}</span></div>` +
    `<div class="kv"><span class="k" ${t('Ödül', 'Reward')}>Ödül</span><span class="v" style="color:${s.reward >= 0 ? '#15803d' : '#be185d'}">${esc(s.reward)}</span></div>` +
    `<div class="kv"><span class="k" ${t('Uygun aksiyon (ortam)', 'Appropriate action (env)')}>Uygun aksiyon (ortam)</span><span class="v">${esc(s.appropriate_action)}</span></div>` +
    `<div class="kv"><span class="k" ${t('Değer tahmini', 'Value estimate')}>Değer tahmini</span><span class="v">${esc(s.value_estimate)}</span></div>`;
  document.getElementById('decState').innerHTML = s.state.map((v, i) => `<span>${i}: ${esc(v)}</span>`).join('');
  const dim = document.getElementById('decDim');
  if (dim) dim.textContent = '(' + s.state.length + 'd)';
  applyLang();
}
function decPrev() { decIdx = (decIdx - 1 + decData.samples.length) % decData.samples.length; renderDecision(); }
function decNext() { decIdx = (decIdx + 1) % decData.samples.length; renderDecision(); }

async function initPillarPage() {
  const p = window.PILLAR;
  try {
    const [res, curves, dec] = await Promise.all([
      loadJSON('../data/' + p.key + '/faz_a_results.json'),
      loadJSON('../data/' + p.key + '/faz_a_curves.json'),
      loadJSON('../data/' + p.key + '/sample_decisions.json'),
    ]);
    renderChips(res);
    renderCurves(curves);
    renderTable(res);
    if (p.noteTr) {
      const nb = document.getElementById('cfgNote');
      nb.hidden = false;
      nb.setAttribute('data-tr', p.noteTr);
      nb.setAttribute('data-en', p.noteEn);
      nb.innerHTML = p.noteTr;
    }
    renderXAI(res);
    decData = dec;
    document.getElementById('decAgent').textContent = dec.agent + ' · seed ' + dec.seed;
    renderDecision();
    const dateEl = document.getElementById('metaDate');
    if (dateEl && res.date) dateEl.textContent = res.date;
  } catch (e) {
    document.getElementById('content').insertAdjacentHTML('afterbegin',
      `<div class="err-box">Veri yüklenemedi / data could not be loaded: ${esc(e.message)}</div>`);
  }
  applyLang();
}
