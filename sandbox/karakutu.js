/*! CDSA Sandbox · https://cdsa.app/sandbox/ · code MIT · synthetic data (cdsa-atm, cdsa-bb3, cdsa-mro v2.4.0; MRO records CC BY 4.0) */
(function(){"use strict";
const GEO={"radar":{"W":640,"H":410,"k":6322.292911788393,"tx":-3023.4482758620693,"ty":5178.645502283325,"land":"M-4,303.7L-0.6,305.9L5.7,308.8L13.7,310.8L16.9,310.8L18.1,310.5L21.6,307.8L23.6,307.6L26.4,308.3L29.2,309.5L32,310L34.3,308.6L36.7,309.5L39.9,309.8L43.1,309L45.5,305.1L51.4,302L53.4,299.5L51.4,299.5L45.9,297.6L44.3,298.5L43.1,298.5L42.7,297.1L42.7,295.6L41.9,295.4L41.1,295.1L40.7,294.6L39.9,293.4L39.5,292.9L39.1,291.9L39.1,290.2L38.7,289.2L37.9,289L36.7,289L35.9,288.7L32.4,285.1L31.2,283.6L31.2,282.6L32.8,282.1L34,281.4L35.5,279.2L36.7,278.7L37.9,279.2L38.7,279.4L39.9,277.7L41.9,280.4L41.9,280.9L43.1,280.9L43.1,280.7L43.5,279.9L44.7,279.7L62.9,282.6L67.7,284.3L70.1,286.8L68.1,290.2L58.6,295.1L55.8,297.6L56.2,301.2L60.2,302.4L69.3,301.5L78.4,298L104.7,296.8L110.2,297.8L119.8,297.6L118.6,297.8L117.8,298.3L117,299.3L117,300.5L121.3,298.8L126.5,298.8L131.7,300.2L136.4,302.4L137.2,301.7L137.6,302L138,302.4L138.8,302.4L139.6,302.2L140.8,301L142,300.5L148,299.5L149.9,298L151.5,297.1L153.5,297.6L157.1,298.5L160.7,298.8L163.8,299.5L165.4,300.2L167.8,302L169.8,302.4L171.8,302.9L180.1,302.7L182.1,302.2L183.7,301L184.9,299.3L185.7,295.4L186.5,293.6L188.1,294.1L189.7,294.1L191.7,293.4L193.2,292.7L191.3,290.2L188.9,288L186.1,286.3L183.7,285.6L177.8,285.6L177,286L174.6,288.3L173.4,288.7L167.4,287.3L157.5,281.1L151.5,279.7L153.5,275.3L157.5,272.8L165.4,269.6L168.6,267.7L173.4,262.7L175,262L207.5,258.8L212.3,257.3L216.7,254.9L219.1,252.9L219.9,252.9L220.7,253.7L221.5,254.9L222.6,255.9L223.8,255.4L225,254.6L226.2,254.1L227.4,253.4L227.8,252.2L228.6,251.2L229.4,250.5L230.6,250L231.8,249.7L233,250L235,250.7L236.5,252.4L236.9,255.4L238.5,255.1L259.6,250.5L272.3,249.7L276.3,251.7L278.7,251.4L280.2,248.7L279.1,245.5L274.7,244.8L265.9,245.8L265.1,246L264.4,246.5L263.2,246.8L262,246.8L260.8,246.3L258.8,244.3L258,243.8L256,243.6L252.4,242.1L250.1,241.9L223.8,242.8L221.8,243.6L220.3,244.8L218.3,245.8L215.9,244.8L215.1,243.6L214.7,242.3L213.9,241.1L212.7,240.9L213.1,240.4L213.5,240.1L213.9,239.9L214.3,239.6L213.9,238.2L213.5,237.2L212.3,236.4L211.5,235.7L210.7,236.7L209.9,235.7L208.7,236.7L207.5,237.2L204.8,237.9L204.8,236.9L205.6,236.7L206.4,236.2L206.8,235.2L206.8,233.7L207.9,234.5L208.3,234.7L208.3,234.2L208.3,234L208.7,233.7L209.1,233.7L207.9,231.8L205.6,229.3L204.4,228.3L203.2,227.3L200.8,227.8L198.8,225.6L192.5,222.6L190.1,220.9L188.1,218L185.7,216L179.7,212.8L180.1,212.5L180.1,212.3L180.5,211.8L178.9,211L178.5,209.6L178.2,207.6L177.4,205.6L179.3,204.6L181.7,202.2L183.3,198.9L184.9,193.5L186.1,191.3L186.5,189.5L184.1,187.8L186.9,183.9L190.9,179.1L195.2,175.9L198.8,176.7L199.2,176.7L200.4,175.2L202,174.9L223,178.9L244.9,184.1L274.3,188.3L302.1,189L305.3,188.8L306.9,188.1L309.2,186.1L310.8,185.8L312,184.8L312.8,183.1L313.6,182.1L314.4,182.6L315.6,181.6L316.8,179.1L318,178.7L319.6,179.9L323.9,180.9L327.9,183.6L364.1,192.5L367.6,195.7L369.6,196.7L378.8,198.4L407.4,197.7L410.1,196.2L410.9,195.7L412.5,196L414.9,196.5L416.1,196.7L420.5,195.7L421.3,196L422.1,196.5L422.9,196.7L423.6,196.5L423.6,196L424,195.2L424.8,194.7L429.2,193L432.8,190.5L439.1,184.6L440.7,182.6L441.5,180.6L441.9,178.2L441.9,175.2L442.3,173.7L443.1,171L443.5,169.2L443.1,168.2L441.1,167L440.7,165.8L441.9,163.8L444.3,162.8L449.1,162.5L449.9,162L451.5,159.3L452.2,158.6L453.4,158.3L470.1,151.9L493.6,136.2L506.7,129.5L511,126.2L511.8,125.7L522.6,122.3L525.3,120.3L527.3,116.5L534.5,108.3L534.9,107.5L536.5,104.3L540.4,103.3L546.4,103.1L546.8,102.1L547.6,101.8L548.8,101.1L548.8,100.1L549.2,99.3L550,99.1L550.4,99.3L551.2,100.8L551.6,101.1L553.5,100.1L555.9,97.3L557.5,95.8L565.5,91.8L566.7,90.8L568.2,90.1L569.8,90.1L571.4,90.8L572.6,88.6L575,86.6L578.2,86.1L580.6,87.3L582.5,87.1L589.3,84.6L590.9,83.8L592.5,83.8L595.7,83.6L598.8,82.8L600.8,81.8L602,82.3L610,80.3L613.5,78.6L618.7,75.1L636.2,69.3L644,65.1L644,414L-4,414ZM7,-4L6.9,-3.9L6.9,-3.1L7.3,-0.9L7.7,-2.1L7.7,-2.4L7.3,-2.9L7.6,-4L9.9,-4L9.9,-4L11.3,-2.4L12.5,-1.9L14.1,-3.1L14.5,-4L18,-4L18,-4L18.1,-3.9L18.1,-4L21.5,-4L21.5,-4L21.6,-3.9L21.9,-4L26.2,-4L26.2,-4L26,-3.9L26.8,-1.4L28,0.4L29.6,0.9L32.4,-0.9L32.4,0.4L33.2,1.1L34,1.4L35.1,1.1L35.1,2.2L34.7,2.4L32.8,3.2L33.6,4.7L34.3,4.9L35.1,5.2L34.3,6.7L34,8.7L34.7,11L35.9,12.5L37.5,13L38.7,13L40.3,12.5L41.9,12.5L41.9,13.2L41.5,14.3L41.5,15L41.9,15.8L42.7,16.5L39.9,18.8L38.7,21.6L39.1,24.3L41.9,26.6L41.5,27.1L41.1,27.9L45.1,30.4L45.9,31.4L46.3,32.4L47.5,33.9L49,35.2L50.2,35.9L50.2,36.4L49.8,37.7L49.4,37.9L53,39.9L53.8,40.9L55.8,45L61.4,48.7L62.2,50.2L63.3,51.7L64.5,52.2L64.1,53.7L64.9,55.2L65.7,56.3L66.9,57.3L66.9,58L66.9,58.3L66.5,58.3L66.1,58.3L67.3,59.8L68.1,61.5L68.5,63.8L67.7,65.5L68.1,67L69.7,74L69.7,75.6L70.1,76.1L70.9,77.1L71.3,78.1L71.3,79.1L70.1,79.8L68.9,79.6L66.9,78.8L65.3,78.8L63.7,79.6L62.9,81.6L62.6,85.3L62.9,89.3L64.9,91.8L66.9,94.3L68.5,96.8L70.5,103.6L72.1,105.6L74.1,107.3L74.9,108.5L75.3,110L75.7,110.3L76.1,110.8L76.1,111.5L75.7,112L75.3,112L74.5,112.3L74.5,113L75.3,115.5L76.9,118L78.8,120.3L82,122.3L83.6,124.3L86,128.2L91.9,134L108.6,144.7L132.5,154.8L166.6,171.2L177.4,173.7L178.2,173.9L178.2,174.2L178.5,174.4L179.3,174.7L180.1,174.2L180.9,173L181.7,172.7L184.1,173L186.9,174.2L188.5,175.7L187.7,179.4L186.1,182.1L184.1,184.6L182.1,185.8L180.9,186.1L181.3,187.1L182.1,188.3L182.9,189.5L183.7,190.5L183.7,190.8L184.5,191L184.1,192L183.7,192.8L183.3,192.8L182.9,195.7L182.1,198.2L181.3,200.4L180.1,202.4L178.9,203.1L177.4,203.6L176.2,204.4L175.4,205.6L175.4,206.4L175.4,207.1L175.4,207.6L175.8,208.1L175.8,209.1L175,209.8L174.6,210.1L172.2,209.8L171.4,208.8L170.6,208.8L169.8,209.1L169,210.6L168.6,210.8L167.4,211L165.4,212.5L161.1,213.5L159.9,213.8L159.5,214.3L159.1,215L158.3,215.5L157.1,215.7L154.3,215.7L153.1,215.2L152.3,214.3L151.1,213.3L148.4,213L135.2,214.7L132.1,213.5L132.9,208.8L131.7,207.3L130.9,206.8L129.7,206.8L130.5,203.4L129.3,200.4L127.3,198.4L124.5,197.7L124.9,199.9L127.3,202.4L128.1,204.9L128.5,206.4L128.1,208.3L127.3,210.6L126.1,211.8L122.9,211.3L117,205.4L114.2,203.9L110.6,203.4L103.1,200.4L99.1,199.9L95.5,199.9L94.3,199.4L93.1,198L92.3,197.7L88.4,198.7L86.4,198.9L85.6,198.4L84.4,197.7L79.2,199.7L78.4,200.2L77.3,200.2L71.3,202.9L69.7,203.1L67.7,204.1L65.7,205.6L64.5,206.8L62.2,210.8L61.4,212.5L61.8,213.8L59.8,214.5L51,213.3L49,212.3L47.5,210.8L45.9,209.8L41.5,208.6L37.1,208.3L13.7,211.8L10.1,213.8L7.7,218.7L5,230.3L2.6,234.7L-4,241.3L-4,-4ZM28.4,260.8L30,260.3L33.6,260.8L36.3,262.3L36.7,265L34.7,266.4L30.4,266.9L28.4,267.7L24.8,270.8L22.4,271.8L20,270.8L18.9,270.8L16.9,269.9L14.9,268.1L15.3,265.2L14.5,264L14.1,262.7L14.5,261.3L15.3,260.3L16.1,259.8L16.9,260L16.9,261.8L19.6,260.3L22.8,259.3L25.6,259.3ZM27.2,288.7L28,288.7L28.4,289.2L28.4,290.5L27.2,290.7L25.6,289.7L23.6,289.2L21.6,289.2L20,288L20,286.5L21.2,285.3L22,283.6L22.8,282.1L26.4,283.8L26.8,284.8L26,286L26,287.8Z","borders":"M-4,59.4L-2.6,61.5L-0.2,64.5L2.2,66.8L10.5,71.3L12.1,72.8L14.9,76.6L16.1,77.6L18.1,76.8L16.5,76.1L16.9,75.8L17.3,75.3L17.7,75.1L17.3,74.8L17.3,74.6L16.9,74.6L16.5,74L18.9,73.3L20,72.5L20.8,71.3L22,72L22.4,72L22.8,71.3L23.2,69.8L31.6,67.5L35.9,67.8L41.5,70.8L43.1,71.3L44.3,71.3L45.9,70.8L46.3,69.8L44.3,68.8L44.7,67.3L44.7,65.3L45.1,63.8L45.5,63.5L45.9,63.5L46.3,63.5L46.7,63.8L49,63.5L49.8,63.5L52.6,64.3L55.4,65.8L57,66L62.6,65.5L64.1,66L68.1,67"}};
const MROREC=[["000001", "2024-09-07", "MRO-TR-619", "konfigurasyon_hatasi", 4, 1603, false, true, "TA0007", "T1133", ["12.4.1", "3.1.1", "18.1.1"]], ["000002", "2025-07-03", "MRO-EU-225", "fidye_yazilimi", 4, 841, false, true, "TA0040", "T1486", ["9.1.1", "14.1.1", "5.2.1"]], ["000003", "2024-02-27", "MRO-TR-611", "yetki_iptal_eksikligi", 3, 112, true, true, "TA0001", "T1078", ["1.1.4", "7.2.1", "1.4.2"]], ["000004", "2025-04-24", "MRO-TR-246", "oltalama_saldirisi", 3, 1167, true, false, "TA0001", "T1566", ["1.2.1", "4.1.1", "1.4.2"]], ["000005", "2024-03-21", "MRO-TR-725", "oltalama_saldirisi", 3, 1080, true, true, "TA0001", "T1566", ["1.2.1", "4.1.1", "1.4.2"]], ["000006", "2024-02-02", "MRO-TR-286", "konfigurasyon_hatasi", 3, 1087, false, true, "TA0007", "T1133", ["12.4.1", "3.1.1", "18.1.1"]], ["000007", "2024-03-18", "MRO-TR-052", "usb_zararli_yazilim", 3, 1808, false, true, "TA0001", "T1091", ["1.3.1", "4.2.1", "12.4.1"]], ["000008", "2025-06-27", "MRO-TR-551", "konfigurasyon_hatasi", 3, 1899, false, false, "TA0007", "T1133", ["12.4.1", "3.1.1", "18.1.1"]], ["000009", "2024-12-23", "MRO-TR-166", "ot_sistem_sizmasi", 4, 510, false, true, "TA0001", "T1091", ["12.3.5", "6.2.1", "1.3.1", "15.1.1"]], ["000010", "2025-03-13", "MRO-TR-755", "egitim_sistem_manipulasyonu", 3, 351, true, true, "TA0009", "T1565", ["4.3.1", "7.4.1", "3.2.1"]], ["000011", "2025-02-25", "MRO-TR-040", "sosyal_muhendislik", 3, 1549, true, true, "TA0006", "T1556", ["4.1.1", "1.6.1", "1.4.2"]], ["000012", "2024-11-17", "MRO-TR-312", "hesap_ele_gecirme", 4, 1157, true, true, "TA0006", "T1110", ["1.1.1", "1.4.2", "13.2.1"]], ["000013", "2025-08-16", "MRO-TR-798", "fidye_yazilimi", 4, 636, false, true, "TA0040", "T1486", ["9.1.1", "14.1.1", "5.2.1"]], ["000014", "2024-02-21", "MRO-TR-066", "usb_zararli_yazilim", 4, 1939, false, true, "TA0001", "T1091", ["1.3.1", "4.2.1", "12.4.1"]], ["000015", "2025-04-22", "MRO-TR-052", "usb_zararli_yazilim", 3, 477, false, true, "TA0001", "T1091", ["1.3.1", "4.2.1", "12.4.1"]], ["000016", "2025-04-10", "MRO-TR-797", "fidye_yazilimi", 4, 1617, false, true, "TA0040", "T1486", ["9.1.1", "14.1.1", "5.2.1"]], ["000017", "2024-04-20", "MRO-TR-631", "kalibrasyon_butunluk_ihlali", 4, 1903, true, true, "TA0009", "T1565", ["3.2.1", "6.1.2", "1.4.2"]], ["000018", "2025-05-10", "MRO-TR-662", "kalibrasyon_butunluk_ihlali", 4, 1716, false, true, "TA0009", "T1565", ["3.2.1", "6.1.2", "1.4.2"]], ["000019", "2024-01-18", "MRO-TR-310", "yetki_iptal_eksikligi", 3, 452, true, true, "TA0001", "T1078", ["1.1.4", "7.2.1", "1.4.2"]], ["000020", "2024-10-07", "MRO-EU-232", "oltalama_saldirisi", 3, 1131, true, true, "TA0001", "T1566", ["1.2.1", "4.1.1", "1.4.2"]]];
const I18N={
tr:{
 intro:'Hava trafiği, kilitli kutu ve bakım senaryoları tarayıcınızda çalışır. Veriler sentetiktir, şifreleme ve anahtar paylaştırma gerçektir.',
 description:'CDSA Sandbox: sentetik hava trafiği, kilitli kutu ve bakım senaryoları. AES-256-GCM ve Shamir 2/3 tarayıcıda gerçekten çalışır.',
 brand_sub:'SANDBOX', synth:'SENTETİK VERİ', notop:'OPERASYONEL DEĞİL', full:'TAM EKRAN ↗', promote:'ANA EKRANA AL',
 du_atm:'ATM · HAVA TRAFİĞİ', du_bb3:'BB3 · KİLİTLİ KUTU', du_mro:'MRO · BAKIM',
 // ATM
 hdr1:'İSTANBUL ACC · SBX-C · 80 NM', hdr2:'PSR + SSR + ADS-B · TARAMA 4 s',
 alerts:'UYARILAR', a_stca:'STCA', a_los:'AYIRMA', a_dev:'SAPMA', a_gnss:'GNSS', a_rec:'KAYIT', a_none:'UYARI YOK',
 gnss_rfi:'GNSS RFI', tracks:'İZ', records:'KAYIT', adsb_psr:'ADS-B/PSR',
 flight:'UÇUŞ', ev_rec:'OLAY KAYDI', no_rec:'HENÜZ KAYIT YOK', cls:'SINIF', annexdoc:'ANNEX 11 / DOC 4444', esarr:'ESARR 2', partis:'PART-IS', attack:'ATT&CK', cause:'NEDEN',
 c_gnss:'GNSS KARIŞTIRMASI · EKLENEN', c_los:'AYIRMA KAYBI · KLASİK', yes2:'VAR / VAR', no2:'YOK / YOK', report:'BİLDİRİLECEK', na:'UYGULANMAZ', undet:'SAPTANAMADI', none_r:'YOK · KLASİK SINIF',
 sel_hint:'İZE TIKLA · SEÇ', gs:'YH', hdg:'BAŞ', dev:'ADS-B − PSR',
 // BB3
 rec_sealed:'600 PAKET · MÜHÜRLÜ', rec_ok:'DOĞRULANAN', sensors:'EKG K', packer:'PAKETLEYİCİ', aad:'NONCE 96 · AAD', recbox:'KAYIT', k0del:'k₀ SİLİNDİ',
 gov:'YÖNETİŞİM', gov_rep:'OLAY RAPORU', gov_no:'YOK', gov_yes:'DOSYALANDI',
 cA:'KAZA İNCELEME', cB:'PİLOT TEMSİL', cC:'YARGI MAKAMI', deliv:'TESLİM', vault:'KASADA', locked_gov:'KİLİTLİ',
 combine:'ANAHTAR KUR', wait:'BEKLİYOR', open:'KİLİT AÇIK', single_rej:'TEK PAY · RED',
 b_report:'RAPOR DOSYALA', b_unreport:'RAPORU GERİ AL', b_single:'TEK PAY DENE', b_tamper:'PAKETİ BOZ', b_reset:'SIFIRLA',
 mon_win:'EKG · PENCERE', mon_enc:'ŞİFRELİ · OKUNAMAZ', mon_dec:'ŞİFRE ÇÖZÜLDÜ · SALT OKUMA', hr:'KAH', synth_ecg:'SENTETİK EKG',
 log_seal:'MÜHÜR · 600 PAKET · k₀ PAYLAŞTIRILDI VE SİLİNDİ', log_rep:'OLAY RAPORU DOSYALANDI', log_unrep:'OLAY RAPORU GERİ ALINDI', log_norep:'RAPOR YOK · PAY TESLİMİ REDDEDİLDİ',
 log_dlv:'PAY TESLİM EDİLDİ', log_wd:'PAY GERİ ÇEKİLDİ', log_open:'ANAHTAR KURULDU · GCM', log_single:'TEK PAY · GCM ETİKETİ GEÇERSİZ', log_tamper:'PAKET BOZULDU', log_reset:'YENİ ANAHTAR · YENİDEN MÜHÜR',
 log_n:'GÜNLÜK · SALT EKLEME', ribbon:'600 PAKET · PENCERE SEÇMEK İÇİN SÜRÜKLE', hint_bb3:'RAPOR DOSYALA → İKİ EMANETÇİ SEÇ',
 // MRO
 m_menu:'MCDU MENÜ', m_wo:'İŞ EMİRLERİ', m_ev:'OLAYLAR', m_partis:'PART-IS', m_attack:'ATT&CK', m_ek19:'EK-19 · EK-21',
 k_wo:'İŞ EMRİ', k_ev:'OLAY', k_partis:'PART-IS', k_attack:'ATT&CK', k_ek19:'EK-19', k_menu:'MENÜ', k_prev:'ÖNCEKİ', k_next:'SONRAKİ', k_clr:'CLR', k_sp:'SP',
 back:'<GERİ', ata:'ATA', task:'GÖREV', system:'SİSTEM', state:'DURUM', reason:'GEREKÇE', event:'OLAY>',
 st_hold:'BEKLETİLDİ', st_verify:'DOĞRULA', st_run:'SÜRÜYOR', st_done:'TAMAM',
 wo1:'İNİŞ TAKIMI TORKU', wo2:'MOTOR MONTAJ TORKU', wo3:'FREN ÜNİTESİ', wo4:'BOROSKOP', wo5:'FDR İNDİRME', wo6:'KOLTUK RAYI', wo7:'YAKIT POMPASI', wo8:'KAPI CONTASI', wo9:'APU FİLTRE', wo10:'ANTEN KONTROLÜ',
 tks_unrel:'TKS VERİSİ GÜVENİLMEZ', sel_rec:'KAYIT SEÇİLDİ', no_page:'SAYFA YOK',
 is_event:'BİLGİ GÜV. OLAYI', assessed:'ETKİ DEĞERLENDİRİLDİ', reportable:'BİLDİRİLECEK', not_coded:'KODLANMADI', mapping:'EŞLEME', approx:'YAKLAŞIK', id_rule:'TANIMLAYICI SINIFI BELİRLEMEZ',
 ek19:'EK-19 KONTROLLERİ', ek21:'EK-21 ÖNEM', h72:'SHY-145 72 SA', kvkk:'KVKK ÖZEL VERİ', yes:'EVET', no:'HAYIR', outage:'KESİNTİ',
 status:'STATUS', restr:'BAKIM KISITLARI', r1:'- TKS KALİBRASYON VERİSİ', r1b:'  GÜVENİLMEZ', r2:'- 3 İŞ EMRİ İMZAYA KAPALI', r3:'- OT-3 SEGMENTİ İZLEMEDE', r_none:'- KISIT KAYDI YOK',
 dual:'ÇİFT DEMİRLEME', ek13:'EK-13 BÖL 1-5', inop:'INOP SYS', ac_none:'UÇAK BAĞLANTISI KAYITTA YOK', nonadv:'KASITSIZ',
 risk4:'KRİTİK', risk3:'YÜKSEK', risk2:'ORTA', risk1:'DÜŞÜK',
 menu_about:'KAYITLAR CDSA-MRO v1', menu_hint:'SEÇMEK İÇİN SATIR TUŞU',
 tech:{T1078:'GEÇERLİ HESAPLAR',T1091:'ÇIKARILABİLİR ORTAM',T1110:'KABA KUVVET',T1133:'DIŞ UZAK HİZMETLER',T1195:'TEDARİK ZİNCİRİ',T1486:'ETKİ İÇİN ŞİFRELEME',T1498:'AĞ HİZMET REDDİ',T1556:'KİMLİK DOĞRULAMA DEĞİŞİMİ',T1565:'VERİ MANİPÜLASYONU',T1566:'OLTALAMA',T1567:'WEB ÜZERİNDEN SIZDIRMA'},
 cls_m:{oltalama_saldirisi:'OLTALAMA SALDIRISI',hesap_ele_gecirme:'HESAP ELE GEÇİRME',ot_sistem_sizmasi:'OT SİSTEM SIZMASI',fidye_yazilimi:'FİDYE YAZILIMI',ddos_saldirisi:'DDOS SALDIRISI',tedarik_zinciri_kontaminasyonu:'TEDARİK ZİNCİRİ',usb_zararli_yazilim:'USB ZARARLI YAZILIM',shadow_it:'GÖLGE BT',konfigurasyon_hatasi:'KONFİGÜRASYON HATASI',yetki_iptal_eksikligi:'YETKİ İPTALİ EKSİK',egitim_sistem_manipulasyonu:'EĞİTİM SİSTEMİ MANİP.',kalibrasyon_butunluk_ihlali:'KALİBRASYON BÜTÜNLÜĞÜ',portal_erisim_ihlali:'PORTAL ERİŞİM İHLALİ',sosyal_muhendislik:'SOSYAL MÜHENDİSLİK',is_emri_sahteciligi:'İŞ EMRİ SAHTECİLİĞİ'},
 play:'OYNAT', pause:'DURAKLAT',
},
en:{
 intro:'Air traffic, locked box and maintenance scenarios run in your browser. The data is synthetic, the encryption and key sharing are real.',
 description:'CDSA Sandbox: synthetic air traffic, locked box and maintenance scenarios. AES-256-GCM and Shamir 2-of-3 really run in your browser.',
 brand_sub:'SANDBOX', synth:'SYNTHETIC DATA', notop:'NOT OPERATIONAL', full:'FULL SCREEN ↗', promote:'MOVE TO MAIN',
 du_atm:'ATM · AIR TRAFFIC', du_bb3:'BB3 · LOCKED BOX', du_mro:'MRO · MAINTENANCE',
 hdr1:'ISTANBUL ACC · SBX-C · 80 NM', hdr2:'PSR + SSR + ADS-B · SCAN 4 s',
 alerts:'ALERTS', a_stca:'STCA', a_los:'LOSS SEP', a_dev:'DEVIATION', a_gnss:'GNSS', a_rec:'RECORD', a_none:'NO ALERTS',
 gnss_rfi:'GNSS RFI', tracks:'TRACKS', records:'REC', adsb_psr:'ADS-B/PSR',
 flight:'FLIGHT', ev_rec:'OCCURRENCE RECORD', no_rec:'NO RECORD YET', cls:'CLASS', annexdoc:'ANNEX 11 / DOC 4444', esarr:'ESARR 2', partis:'PART-IS', attack:'ATT&CK', cause:'CAUSE',
 c_gnss:'GNSS JAMMING · ADDED', c_los:'LOSS OF SEPARATION · CLASSICAL', yes2:'YES / YES', no2:'NO / NO', report:'REPORTABLE', na:'NOT APPLICABLE', undet:'UNDETERMINED', none_r:'NONE · CLASSICAL CLASS',
 sel_hint:'CLICK A TRACK · SELECT', gs:'GS', hdg:'HDG', dev:'ADS-B − PSR',
 rec_sealed:'600 PACKETS · SEALED', rec_ok:'VERIFIED', sensors:'ECG C', packer:'PACKETISER', aad:'NONCE 96 · AAD', recbox:'RECORD', k0del:'k₀ DELETED',
 gov:'GOVERNANCE', gov_rep:'OCCURRENCE REPORT', gov_no:'NONE', gov_yes:'FILED',
 cA:'ACCIDENT INVESTIGATION', cB:'PILOT ASSOCIATION', cC:'JUDICIAL AUTHORITY', deliv:'DELIVERED', vault:'IN CUSTODY', locked_gov:'LOCKED',
 combine:'RECONSTRUCT KEY', wait:'WAITING', open:'UNLOCKED', single_rej:'SINGLE SHARE · REJECTED',
 b_report:'FILE REPORT', b_unreport:'WITHDRAW REPORT', b_single:'TRY ONE SHARE', b_tamper:'TAMPER PACKET', b_reset:'RESET',
 mon_win:'ECG · WINDOW', mon_enc:'ENCRYPTED · UNREADABLE', mon_dec:'DECRYPTED · READ ONLY', hr:'HR', synth_ecg:'SYNTHETIC ECG',
 log_seal:'SEAL · 600 PACKETS · k₀ SHARED AND DELETED', log_rep:'OCCURRENCE REPORT FILED', log_unrep:'OCCURRENCE REPORT WITHDRAWN', log_norep:'NO REPORT · SHARE DELIVERY REFUSED',
 log_dlv:'SHARE DELIVERED', log_wd:'SHARE WITHDRAWN', log_open:'KEY RECONSTRUCTED · GCM', log_single:'ONE SHARE · GCM TAG INVALID', log_tamper:'PACKET TAMPERED', log_reset:'NEW KEY · RESEALED',
 log_n:'LOG · APPEND ONLY', ribbon:'600 PACKETS · DRAG TO PICK A WINDOW', hint_bb3:'FILE REPORT → PICK TWO CUSTODIANS',
 m_menu:'MCDU MENU', m_wo:'WORK ORDERS', m_ev:'OCCURRENCES', m_partis:'PART-IS', m_attack:'ATT&CK', m_ek19:'ANNEX 19 · 21',
 k_wo:'WORK ORD', k_ev:'OCCUR', k_partis:'PART-IS', k_attack:'ATT&CK', k_ek19:'ANX-19', k_menu:'MENU', k_prev:'PREV', k_next:'NEXT', k_clr:'CLR', k_sp:'SP',
 back:'<BACK', ata:'ATA', task:'TASK', system:'SYSTEM', state:'STATUS', reason:'REASON', event:'OCCUR>',
 st_hold:'ON HOLD', st_verify:'VERIFY', st_run:'IN WORK', st_done:'DONE',
 wo1:'MAIN GEAR TORQUE', wo2:'ENGINE MOUNT TORQUE', wo3:'BRAKE UNIT', wo4:'BORESCOPE', wo5:'FDR DOWNLOAD', wo6:'SEAT TRACK', wo7:'FUEL PUMP', wo8:'DOOR SEAL', wo9:'APU FILTER', wo10:'ANTENNA CHECK',
 tks_unrel:'TKS DATA UNRELIABLE', sel_rec:'RECORD SELECTED', no_page:'NO PAGE',
 is_event:'INFO SEC EVENT', assessed:'IMPACT ASSESSED', reportable:'REPORTABLE', not_coded:'NOT CODED', mapping:'MAPPING', approx:'APPROXIMATE', id_rule:'IDENTIFIER DOES NOT SET CLASS',
 ek19:'ANNEX 19 CONTROLS', ek21:'ANNEX 21 SEVERITY', h72:'SHY-145 72 H', kvkk:'KVKK SPECIAL DATA', yes:'YES', no:'NO', outage:'OUTAGE',
 status:'STATUS', restr:'MAINT RESTRICTIONS', r1:'- TKS CALIBRATION DATA', r1b:'  UNRELIABLE', r2:'- 3 WORK ORDERS BLOCKED', r3:'- OT-3 SEGMENT MONITORED', r_none:'- NO RESTRICTION RECORDED',
 dual:'DUAL ANCHORING', ek13:'ANX-13 SEC 1-5', inop:'INOP SYS', ac_none:'NO AIRCRAFT LINK IN RECORD', nonadv:'NON-ADVERSARIAL',
 risk4:'CRITICAL', risk3:'HIGH', risk2:'MEDIUM', risk1:'LOW',
 menu_about:'RECORDS CDSA-MRO v1', menu_hint:'LINE KEY TO SELECT',
 tech:{T1078:'VALID ACCOUNTS',T1091:'REMOVABLE MEDIA',T1110:'BRUTE FORCE',T1133:'EXT REMOTE SERVICES',T1195:'SUPPLY CHAIN',T1486:'ENCRYPTED FOR IMPACT',T1498:'NETWORK DOS',T1556:'MODIFY AUTH PROCESS',T1565:'DATA MANIPULATION',T1566:'PHISHING',T1567:'EXFIL OVER WEB'},
 cls_m:{oltalama_saldirisi:'PHISHING ATTACK',hesap_ele_gecirme:'ACCOUNT TAKEOVER',ot_sistem_sizmasi:'OT INTRUSION',fidye_yazilimi:'RANSOMWARE',ddos_saldirisi:'DDOS ATTACK',tedarik_zinciri_kontaminasyonu:'SUPPLY CHAIN',usb_zararli_yazilim:'USB MALWARE',shadow_it:'SHADOW IT',konfigurasyon_hatasi:'CONFIGURATION ERROR',yetki_iptal_eksikligi:'ACCESS NOT REVOKED',egitim_sistem_manipulasyonu:'TRAINING SYS MANIP.',kalibrasyon_butunluk_ihlali:'CALIBRATION INTEGRITY',portal_erisim_ihlali:'PORTAL BREACH',sosyal_muhendislik:'SOCIAL ENGINEERING',is_emri_sahteciligi:'WORK ORDER FORGERY'},
 play:'PLAY', pause:'PAUSE',
}};
const NS='http://www.w3.org/2000/svg';
const K={G:'#40E07A',C:'#3CC8E8',A:'#FFB020',R:'#FF4545',M:'#FF5AD9',W:'#E6EDF5',g:'#7D8BA0',l:'#26324A',d:'#93A3BB',k:'#000'};
const FM="'B612 Mono TR','B612 Mono',ui-monospace,Menlo,Consolas,monospace";
const FS="'B612 TR','B612',system-ui,sans-serif";
let LANG='tr';
function t(k){const v=I18N[LANG][k];return v===undefined?(I18N.tr[k]===undefined?k:I18N.tr[k]):v}
function el(p,tag,a,txt){const e=document.createElementNS(NS,tag);if(a)for(const k in a)e.setAttribute(k,a[k]);if(txt!=null)e.textContent=txt;if(p)p.appendChild(e);return e}
function T(p,x,y,s,o){o=o||{};const a={x:+(+x).toFixed(1),y:+(+y).toFixed(1),'font-family':o.f||FM,'font-size':o.s||10,fill:o.c||K.W};
  if(o.w)a['font-weight']=o.w;if(o.a)a['text-anchor']=o.a;if(o.u)a['text-decoration']='underline';if(o.ls)a['letter-spacing']=o.ls;if(o.op)a.opacity=o.op;return el(p,'text',a,s)}
function clear(g){while(g.firstChild)g.removeChild(g.firstChild)}
function act(g,label,fn){g.setAttribute('role','button');g.setAttribute('tabindex','0');g.setAttribute('aria-label',label);g.style.cursor='pointer';
  g.addEventListener('click',e=>{e.stopPropagation();fn(e)});g.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();e.stopPropagation();fn(e)}});return g}
function button(p,x,y,w,h,label,o,fn){o=o||{};const g=el(p,'g',{class:'kk-b'});
  el(g,'rect',{x,y,width:w,height:h,rx:o.rx||2,fill:o.fill||'#000',stroke:o.stroke||K.C,'stroke-width':o.sw||1.2});
  T(g,x+w/2,y+h/2+(o.s||10)*.36,label,{s:o.s||10,c:o.c||K.C,a:'middle',w:o.w});return act(g,label,fn)}
function svgPt(svg,evt){const p=svg.createSVGPoint();p.x=evt.clientX;p.y=evt.clientY;return p.matrixTransform(svg.getScreenCTM().inverse())}
function drag(svg,target,fn){let on=false;const go=e=>{const p=svgPt(svg,e);fn(p)};
  target.addEventListener('pointerdown',e=>{on=true;target.setPointerCapture&&target.setPointerCapture(e.pointerId);go(e);e.preventDefault()});
  target.addEventListener('pointermove',e=>{if(on)go(e)});target.addEventListener('pointerup',()=>on=false);target.addEventListener('pointercancel',()=>on=false)}
function hhmmss(s){s=Math.max(0,Math.floor(s));const h=19+Math.floor((30*60+s)/3600),m=Math.floor(((30*60+s)%3600)/60),x=s%60;return `${h}:${String(m).padStart(2,'0')}:${String(x).padStart(2,'0')}`}
function utcNow(){const d=new Date();return d.toISOString().slice(11,19)+'Z'}
function rng(seed){let s=seed>>>0;return()=>{s=(s*1664525+1013904223)>>>0;return s/4294967296}}
function hex(b,n){return Array.from(b.slice(0,n)).map(x=>x.toString(16).padStart(2,'0')).join('')}
function mkSvg(l){return el(null,'svg',{viewBox:'0 0 640 600',class:'kk-svg','aria-label':l||'CDSA Sandbox'})}
/* geo helpers */
const D2R=Math.PI/180;
function move(lon,lat,brg,nm){const d=nm/60;return [lon+d*Math.sin(brg*D2R)/Math.cos(lat*D2R),lat+d*Math.cos(brg*D2R)]}
function distNM(a,b){const dy=(b[1]-a[1])*60,dx=(b[0]-a[0])*60*Math.cos((a[1]+b[1])/2*D2R);return Math.hypot(dx,dy)}
const APT={LTFM:[28.742,41.262],LTFJ:[29.309,40.898],LTBR:[29.563,40.255],LTAS:[32.088,41.506],LTAC:[32.995,40.128],LTBU:[27.919,41.138]};
const RFI={c:[30.95,40.60],r:36,t0:360,t1:840};
function acDefs(){const P0=[31.62,41.06];const A=move(P0[0],P0[1],348,1.3),B=move(P0[0],P0[1],168,1.3);
 return [
  {cs:'SBX2471',ty:'A320',rt:'LTFJ → LTAF',p:[30.62,40.80],tr:630,h:118,gs:452,fl:250,cfl:260,vs:500,mo:1.8,db:[-98,-42]},
  {cs:'SBX1185',ty:'B738',p:A,tr:660,h:78,gs:460,fl:310,db:[-88,-46]},
  {cs:'SBX3302',ty:'A321',p:B,tr:660,h:258,gs:470,fl:310,db:[14,8]},
  {cs:'SBX0907',ty:'A333',p:[29.40,41.70],tr:630,h:338,gs:478,fl:350},
  {cs:'SBX5520',ty:'B789',p:[30.35,42.02],tr:630,h:205,gs:486,fl:370},
  {cs:'SBX4410',ty:'A20N',p:[28.30,40.82],tr:630,h:282,gs:420,fl:180},
  {cs:'SBX7012',ty:'B38M',p:[29.02,40.50],tr:630,h:22,gs:280,fl:110,cfl:60,vs:-1500,db:[12,4]},
  {cs:'SBX2290',ty:'A321',p:[32.40,40.52],tr:630,h:252,gs:455,fl:330},
  {cs:'SBX6631',ty:'B77W',p:[33.00,41.40],tr:630,h:262,gs:495,fl:370,db:[-74,8]},
  {cs:'SBX8814',ty:'A319',p:[27.95,41.62],tr:630,h:112,gs:430,fl:290},
  {cs:'SBX3077',ty:'A21N',p:[29.30,41.18],tr:630,h:95,gs:320,fl:120,cfl:230,vs:2200},
  {cs:'SBX5108',ty:'E190',p:[31.25,40.38],tr:630,h:62,gs:410,fl:210,mo:1.1,db:[12,6]},
  {cs:'SBX1940',ty:'A20N',p:[30.25,41.42],tr:630,h:96,gs:440,fl:240},
  {cs:'SBX6256',ty:'B738',p:[32.70,40.95],tr:630,h:292,gs:450,fl:350},
  {cs:'SBX4718',ty:'A21N',p:[28.40,40.30],tr:630,h:58,gs:430,fl:270},
  {cs:'SBX8350',ty:'B789',p:[31.80,40.15],tr:630,h:330,gs:470,fl:390,mo:.9},
 ]}
class ATM{
 constructor(host){this.host=host;this.t=480;this.playing=false;this.speed=4;this.sel='SBX2471';this.recSel=-1;this.svg=mkSvg('ATM radar');this.lastScan=-1;
  const G=GEO.radar;this.G=G;this.P=(lon,lat)=>[G.k*lon*D2R+G.tx,-G.k*Math.log(Math.tan(Math.PI/4+lat*D2R/2))+G.ty];
  this.pxNM=G.k*(D2R/60)/Math.cos(41*D2R);this.AC=acDefs();this.pre();this.build()}
 pos(a,t){const dt=t-a.tr;const ll=move(a.p[0],a.p[1],a.h,a.gs/3600*dt);let f=a.fl;
  if(a.vs){f=a.fl+a.vs*dt/6000;if(a.vs>0)f=Math.max(40,Math.min(a.cfl,f));else f=Math.min(400,Math.max(a.cfl,f))}
  return {ll,fl:Math.round(f),trend:a.vs&&Math.abs(f-a.cfl)>.5?(a.vs>0?'↑':'↓'):''}}
 pre(){const n=301;const cosL=Math.cos(41*D2R);
  for(const a of this.AC){a.off=new Float32Array(n);a.ins=new Uint8Array(n);let o=0;
   for(let i=0;i<n;i++){const t=i*4;const p=this.pos(a,t).ll;const inside=t>=RFI.t0&&t<RFI.t1&&distNM(p,RFI.c)<RFI.r;a.ins[i]=inside?1:0;
    if(inside&&a.mo)o=Math.min(a.mo,o+a.mo/150*4);else if(inside)o=Math.min(.35,o+.35/150*4);else o=Math.max(0,o-(a.mo||.35)/60*4);a.off[i]=o}}
  this.conf=[];this.recs=[];let gnssT=null,losT=null;const stca=[];let cur=null;
  for(let i=0;i<n;i++){const t=i*4;const c=this.conflicts(t);const any=c.some(x=>x.stca);
   if(any&&!cur){cur=[t,t]}if(any&&cur)cur[1]=t;if(!any&&cur){stca.push(cur);cur=null}
   if(losT===null&&c.some(x=>x.los))losT=t;
   if(gnssT===null&&this.AC.some(a=>a.ins[i]))gnssT=t}
  if(cur)stca.push(cur);this.stcaBands=stca;
  if(gnssT!==null)this.recs.push({t:gnssT,cls:'c_gnss',ad:'no2',es:'B',pi:'report',at:'T1499 · ~',ca:'undet',cs:'SBX2471'});
  if(losT!==null)this.recs.push({t:losT,cls:'c_los',ad:'yes2',es:'A',pi:'na',at:null,ca:'undet',cs:'SBX1185/3302'});
  this.recs.sort((a,b)=>a.t-b.t)}
 conflicts(t){const out=[];const cosL=Math.cos(41*D2R);const st=this.AC.map(a=>{const p=this.pos(a,t);return {a,x:p.ll[0]*60*cosL,y:p.ll[1]*60,vx:a.gs/3600*Math.sin(a.h*D2R),vy:a.gs/3600*Math.cos(a.h*D2R),fl:p.fl}});
  for(let i=0;i<st.length;i++)for(let j=i+1;j<st.length;j++){const A=st[i],B=st[j];if(Math.abs(A.fl-B.fl)>=10)continue;
   const rx=B.x-A.x,ry=B.y-A.y,vx=B.vx-A.vx,vy=B.vy-A.vy;const d=Math.hypot(rx,ry);if(d>40)continue;const vv=vx*vx+vy*vy;let tc=vv?-(rx*vx+ry*vy)/vv:0;if(tc<0)tc=0;
   const dc=Math.hypot(rx+vx*tc,ry+vy*tc);const los=d<5;const stca=los||(tc<=120&&dc<5);if(stca)out.push({a:A.a,b:B.a,d,los,stca})}
  return out}
 layout(){const c=this.compact;
  return c?{W:400,H:980,R:{w:400,h:400,s:400/410,ox:160,oy:0},fs:10,al:{x:0,y:408,w:400,h:200},memo:{y:616},rec:{y:734},tl:{y:852,x0:16,w:368,by:866,bw:56,bh:48,ty:940}}
   :{W:640,H:600,R:{w:640,h:410,s:1,ox:0,oy:0},fs:9,al:null,memo:{y:416},rec:null,tl:{y:524,x0:176,w:450,by:543,bw:34,bh:26,ty:556}}}
 V(lon,lat){const p=this.P(lon,lat),R=this.L.R;return [(p[0]-R.ox)*R.s,(p[1]-R.oy)*R.s]}
 setCompact(c){if(this.compact===c)return;this.compact=c;this.build()}
 build(){const S=this.svg;clear(S);const G=this.G;const L=this.L=this.layout();const R=L.R;this.pxv=this.pxNM*R.s;
  S.setAttribute('viewBox',`0 0 ${L.W} ${L.H}`);
  el(S,'rect',{x:0,y:0,width:L.W,height:L.H,fill:'#000'});
  if(!this.cid)this.cid='kkclip'+Math.random().toString(36).slice(2,8);
  const cp=el(el(S,'defs'),'clipPath',{id:this.cid});el(cp,'rect',{x:0,y:0,width:R.w,height:R.h});
  const rad=el(S,'g',{'clip-path':`url(#${this.cid})`});el(rad,'rect',{x:0,y:0,width:R.w,height:R.h,fill:'#060B14'});
  const st=el(rad,'g',{transform:`scale(${R.s}) translate(${-R.ox},${-R.oy})`});
  el(st,'path',{d:G.land,fill:'#0F1828',stroke:'#22334C','stroke-width':1});el(st,'path',{d:G.borders,fill:'none',stroke:'#2A3B55','stroke-dasharray':'3 3'});
  const c=this.P(...APT.LTFJ);[20,40,60,80].forEach(n=>{el(st,'circle',{cx:c[0],cy:c[1],r:n*this.pxNM,fill:'none',stroke:'#16243A'});T(st,c[0]+n*this.pxNM*.71+3,c[1]-n*this.pxNM*.71-3,String(n),{s:8,c:'#3A4E6C'})});
  const line=(pts,a)=>el(st,'path',Object.assign({d:'M'+pts.map(p=>this.P(...p).map(v=>v.toFixed(1)).join(',')).join(' L'),fill:'none'},a));
  [[[28.5,39.8],[28.5,42.3]],[[31.0,39.8],[31.0,42.3]],[[28.5,41.3],[33.3,41.3]]].forEach(s=>line(s,{stroke:'#3A5072','stroke-dasharray':'8 5'}));
  [[APT.LTFM,[29.9,41.0],[31.2,40.8],APT.LTAC],[APT.LTFJ,[30.7,41.3],[33.6,41.65]],[APT.LTFJ,[31.2,40.55],[33.6,40.0]],[APT.LTFM,[29.7,42.4]]].forEach(a=>line(a,{stroke:'#1C3556','stroke-width':1.1}));
  for(const k of ['LTFM','LTFJ','LTBR','LTAS','LTAC']){const p=this.P(...APT[k]);el(st,'circle',{cx:p[0],cy:p[1],r:3.5,fill:'none',stroke:'#5C7396'});T(st,p[0]+6,p[1]+3,k,{s:8,c:'#5C7396'})}
  [['SBX-W',27.6,42.1],['SBX-N1',28.7,42.1],['SBX-NE',31.2,42.1],['SBX-C',28.7,39.95],['SBX-E',31.2,39.95]].forEach(([n,lo,la])=>{const p=this.P(lo,la);T(st,p[0],p[1],n,{s:8,c:'#34506F'})});
  T(rad,10,16,t('hdr1'),{s:L.fs,c:'#5C7396'});T(rad,10,28+(L.fs-9),t('hdr2'),{s:L.fs-1,c:'#3A4E6C'});
  const nm=20*this.pxv,yb=R.h-12;el(rad,'path',{d:`M10,${yb+2} v-5 M10,${yb} h${nm} M${10+nm},${yb+2} v-5`,stroke:'#5C7396',fill:'none'});T(rad,14+nm,yb+3,'20 NM',{s:8,c:'#5C7396'});
  this.dyn=el(rad,'g',{});this.alert=el(L.al?S:rad,'g',{});
  const m=el(S,'g',{});this.memo=el(m,'g',{});
  if(!this.compact){el(m,'rect',{x:0,y:416,width:640,height:100,fill:'#000',stroke:K.l});el(m,'line',{x1:300,x2:300,y1:426,y2:506,stroke:K.l})}
  else{el(m,'rect',{x:0,y:L.memo.y,width:400,height:110,fill:'#000',stroke:K.l});el(m,'rect',{x:0,y:L.rec.y,width:400,height:110,fill:'#000',stroke:K.l})}
  m.appendChild(this.memo);
  const tl=el(S,'g',{});el(tl,'rect',{x:0,y:L.tl.y,width:L.W,height:L.H-L.tl.y,fill:'#000',stroke:K.l});this.tl=tl;this.buildTL();
  this.lastScan=-1;this.draw(true)}
 X(t){const T0=this.L.tl;return T0.x0+t/1200*T0.w}
 buildTL(){const S=this.tl;const L=this.L.tl;const y=L.ty,c=this.compact;
  this.sp=[];this.bPlay=el(S,'g',{});act(this.bPlay,t('play'),()=>{this.playing=!this.playing;this.userTouched=true;this.drawPlay()});
  [1,4,16].forEach((s,i)=>{const g=el(S,'g',{});const bx=c?76+i*64:52+i*38,bw=c?56:34;if(!c)el(g,'rect',{x:bx-2,y:L.by-4,width:bw+4,height:L.bh+8,fill:'transparent'});const r=el(g,'rect',{x:bx,y:L.by,width:bw,height:L.bh,fill:'#000',stroke:K.l});const tx=T(g,bx+bw/2,L.by+L.bh/2+(c?4.5:4),s+'×',{s:c?12:10,a:'middle',c:K.g});
   act(g,s+'×',()=>{this.speed=s;this.userTouched=true;this.drawSpeed()});this.sp.push([s,r,tx])});
  el(S,'line',{x1:this.X(0),x2:this.X(1200),y1:y,y2:y,stroke:K.l,'stroke-width':c?8:6});
  el(S,'rect',{x:this.X(RFI.t0),y:y-4,width:this.X(RFI.t1)-this.X(RFI.t0),height:8,fill:K.A,opacity:.85});T(S,this.X(RFI.t0),y-9,'GNSS RFI',{s:7.5,c:K.A});
  for(const b of this.stcaBands){el(S,'rect',{x:this.X(b[0]),y:y-4,width:Math.max(3,this.X(b[1]+4)-this.X(b[0])),height:8,fill:K.R})}
  for(const r of this.recs){const x=this.X(r.t);el(S,'path',{d:`M${x},${y+8} l4,7 h-8 Z`,fill:r.cls==='c_los'?K.R:K.A})}
  for(let m=0;m<=20;m+=5)T(S,this.X(m*60),y+30,hhmmss(m*60).slice(0,5),{s:c?10:8.5,a:'middle',c:K.g,f:FS});
  this.cur=el(S,'line',{x1:0,x2:0,y1:y-14,y2:y+14,stroke:K.W,'stroke-width':1.6});this.curT=T(S,0,y-17,'',{s:c?10:9,a:'middle',c:K.W,f:FS});
  if(c)this.bigT=T(S,390,L.by+31,'',{s:16,a:'end',c:K.G,f:FS});
  const hit=el(S,'rect',{x:this.X(0)-8,y:y-(c?24:18),width:L.w+16,height:c?48:36,fill:'transparent',style:'cursor:ew-resize'});
  drag(this.svg,hit,p=>{this.t=Math.max(0,Math.min(1200,(p.x-L.x0)/L.w*1200));this.userTouched=true;this.draw(true)});
  this.drawPlay();this.drawSpeed()}
 drawPlay(){const g=this.bPlay;clear(g);const L=this.L.tl;const x=10,y=L.by,w=this.compact?56:34,h=L.bh;if(!this.compact)el(g,'rect',{x:x-4,y:y-4,width:w+6,height:h+8,fill:'transparent'});el(g,'rect',{x,y,width:w,height:h,fill:'#000',stroke:K.C});
  const cx=x+w/2,cy=y+h/2;if(this.playing)el(g,'path',{d:`M${cx-5},${cy-8} v16 M${cx+5},${cy-8} v16`,stroke:K.C,'stroke-width':2.8});else el(g,'path',{d:`M${cx-5},${cy-8} l13,8 l-13,8 Z`,fill:K.C});
  g.setAttribute('aria-label',this.playing?t('pause'):t('play'))}
 drawSpeed(){for(const [s,r,tx] of this.sp){const on=s===this.speed;r.setAttribute('stroke',on?K.C:K.l);tx.setAttribute('fill',on?K.C:K.g)}}
 tick(dt){if(!this.playing)return;this.t+=dt*this.speed;if(this.t>=1200){this.t=1200;this.playing=false;this.drawPlay();
   if(!this.userTouched){setTimeout(()=>{if(!this.userTouched){this.t=300;this.playing=true;this.drawPlay()}},2500)}}
  this.draw(false)}
 draw(force){const x=this.X(this.t);this.cur.setAttribute('x1',x);this.cur.setAttribute('x2',x);this.curT.setAttribute('x',x);this.curT.textContent=this.compact?'':hhmmss(this.t);if(this.bigT)this.bigT.textContent=hhmmss(this.t);
  if(this.onTime)this.onTime(this.t);
  const scan=Math.floor(this.t/4)*4;if(!force&&scan===this.lastScan)return;this.lastScan=scan;this.drawRadar(scan);this.drawMemo(scan)}
 drawRadar(ts){const D=this.dyn;clear(D);const L=this.L,R=L.R,fs=L.fs,c=this.compact;const i=ts/4;const on=ts>=RFI.t0&&ts<RFI.t1;const V=(lo,la)=>this.V(lo,la);
  const g=V(...RFI.c),r=RFI.r*this.pxv;
  el(D,'circle',{cx:g[0],cy:g[1],r,fill:on?K.A:'none',opacity:on?.07:1});el(D,'circle',{cx:g[0],cy:g[1],r,fill:'none',stroke:on?K.A:'#2A3B55','stroke-width':1,'stroke-dasharray':'2 4'});
  T(D,g[0]-r+8,g[1]+r-8,t('gnss_rfi')+(on?'':' · —'),{s:fs-1,c:on?K.A:'#3A4E6C'});
  const conf=this.conflicts(ts);this.curConf=conf;const inConf=new Set();conf.forEach(c=>{inConf.add(c.a.cs);inConf.add(c.b.cs)});
  const cr=[];for(const cf of conf){const p1=V(...this.pos(cf.a,ts).ll),p2=V(...this.pos(cf.b,ts).ll);el(D,'line',{x1:p1[0],y1:p1[1],x2:p2[0],y2:p2[1],stroke:K.R,'stroke-width':1.3});
   const m=[(p1[0]+p2[0])/2,(p1[1]+p2[1])/2];const lab=cf.los?t('a_los'):t('a_stca');const w=lab.length*fs*.71+12;cr.push([m[0]-w/2-2,m[1]+10,m[0]+w/2+2,m[1]+12+fs*3.4]);el(D,'rect',{x:m[0]-w/2,y:m[1]+12,width:w,height:fs+5.5,fill:K.R});T(D,m[0],m[1]+12+fs+1,lab,{s:fs-.5,c:'#000',a:'middle',w:700});
   T(D,m[0],m[1]+16+fs*2.2,cf.d.toFixed(1)+' NM',{s:fs-.5,c:K.R,a:'middle'})}
  const vis=[];for(const a of this.AC){const p=this.pos(a,ts);const xy=V(...p.ll);if(xy[0]<-20||xy[0]>R.w+20||xy[1]<-20||xy[1]>R.h+10)continue;vis.push([a,p,xy])}
  const bw=fs*7.6,bh=fs*3.45;const obs=[...(L.al?[]:[[426,0,640,120]]),[0,0,c?250:220,34],...cr];vis.forEach(([,,q])=>obs.push([q[0]-6,q[1]-6,q[0]+6,q[1]+6]));const place={};
  const ov=(r)=>obs.reduce((s,o)=>s+Math.max(0,Math.min(r[2],o[2])-Math.max(r[0],o[0]))*Math.max(0,Math.min(r[3],o[3])-Math.max(r[1],o[1])),0);
  for(const [a,,q] of vis){const k=fs/9;const cands=(a.db&&!c?[a.db]:[]).concat([[12,-bh-4],[12,6],[-bw-12,-bh-4],[-bw-12,6],[12,-bh/2],[-bw-12,-bh/2]]);let best=null,bs=1e9;
   for(const cd of cands){const rr=[q[0]+cd[0],q[1]+cd[1],q[0]+cd[0]+bw+(a.ins[i]?fs*1.2:0),q[1]+cd[1]+bh];let sc=ov(rr)+(rr[0]<0||rr[2]>R.w||rr[1]<0||rr[3]>R.h?5000:0);if(cd===a.db)sc-=1;if(sc<bs){bs=sc;best=cd}}
   place[a.cs]=best;obs.push([q[0]+best[0],q[1]+best[1],q[0]+best[0]+bw,q[1]+best[1]+bh])}
  for(const [a,p,xy] of vis){const [x,y]=xy;
   const off=a.off[i],ins=a.ins[i];const sel=a.cs===this.sel;const col=inConf.has(a.cs)?K.R:(ins||off>=1)?K.A:sel?K.W:K.d;
   for(let k=1;k<=5;k++){const q=V(...this.pos(a,ts-k*4).ll);el(D,'circle',{cx:q[0],cy:q[1],r:1.3,fill:col,opacity:.75-k*.12})}
   if(sel)el(D,'circle',{cx:x,cy:y,r:10,fill:'none',stroke:K.C,'stroke-width':1});
   el(D,'rect',{x:x-3.5,y:y-3.5,width:7,height:7,fill:'none',stroke:col,'stroke-width':sel?2:1.4});
   el(D,'line',{x1:x,y1:y,x2:x+Math.sin(a.h*D2R)*16,y2:y-Math.cos(a.h*D2R)*16,stroke:col});
   if(off>.05){const gp=V(...move(p.ll[0],p.ll[1],135,off));el(D,'line',{x1:x,y1:y,x2:gp[0],y2:gp[1],stroke:K.A,'stroke-dasharray':'2 2'});el(D,'rect',{x:gp[0]-3,y:gp[1]-3,width:6,height:6,fill:'none',stroke:K.A,'stroke-dasharray':'2 1'});
    if(off>=1&&!c)T(D,gp[0]+6,gp[1]+10,'Δ'+off.toFixed(1)+'NM',{s:8,c:K.A})}
   const [dx,dy]=place[a.cs];const bx=x+dx,by=y+dy;el(D,'line',{x1:x,y1:y,x2:bx+(dx<0?bw-2:0),y2:by+bh/2,stroke:col,'stroke-width':.7,opacity:.7});
   T(D,bx,by+fs*.9,a.cs,{s:fs,c:col,w:700});T(D,bx,by+fs*2,String(p.fl).padStart(3,'0')+p.trend+(a.cfl&&p.trend?' '+a.cfl:''),{s:fs,c:inConf.has(a.cs)?K.R:K.G});T(D,bx,by+fs*3.1,a.gs+' '+a.ty,{s:fs-.5,c:K.d});
   if(ins){const tx0=bx+fs*5.1,ty0=by+fs*1.2;el(D,'rect',{x:tx0,y:ty0,width:fs*3.4,height:fs*1.12,fill:K.A});T(D,tx0+fs*1.7,ty0+fs*.92,'NIC0',{s:fs*.83,c:'#000',a:'middle',w:700})}
   const hit=el(D,'circle',{cx:x,cy:y,r:c?22:13,fill:'transparent'});act(hit,a.cs,()=>{this.sel=a.cs;this.lastScan=-1;this.draw(true)})}
  // alerts
  const A=this.alert;clear(A);const rows=[];
  for(const cf of conf)rows.push([K.R,cf.los?t('a_los'):t('a_stca'),cf.a.cs.slice(3)+'/'+cf.b.cs.slice(3)+' '+cf.d.toFixed(1)+'NM',()=>{const k=this.recs.findIndex(r=>r.cls==='c_los');if(k>=0&&this.recs[k].t<=ts)this.recSel=k;this.sel=cf.a.cs;this.lastScan=-1;this.draw(true)}]);
  for(const a of this.AC)if(a.off[i]>=1)rows.push([K.A,t('a_dev'),a.cs+' '+t('adsb_psr')+' '+a.off[i].toFixed(1)+'NM',()=>{this.sel=a.cs;this.lastScan=-1;this.draw(true)}]);
  if(on){const n=this.AC.filter(a=>a.ins[i]).length;rows.push([K.A,t('a_gnss'),t('gnss_rfi')+' · '+n+' '+t('tracks'),()=>{this.sel='SBX2471';this.lastScan=-1;this.draw(true)}])}
  const nr=this.recs.filter(r=>r.t<=ts).length;if(nr)rows.push([K.C,t('a_rec'),nr+' '+t('records'),()=>{this.recSel=(this.recSel+1)%nr;this.lastScan=-1;this.draw(true)}]);
  if(L.al){const y0=L.al.y,rh=34;el(A,'rect',{x:0,y:y0,width:400,height:L.al.h,fill:'#05080F',stroke:K.l});T(A,10,y0+18,t('alerts'),{s:10,u:1});
   if(!rows.length)T(A,10,y0+40,t('a_none'),{s:10,c:K.g});
   rows.slice(0,5).forEach(([cl,a,b,fn],k)=>{const g=el(A,'g',{});const yy=y0+28+k*rh;el(g,'rect',{x:4,y:yy,width:392,height:rh-3,rx:4,fill:'#0A1220'});T(g,12,yy+20,a,{s:10.5,c:cl,w:700});T(g,96,yy+20,b,{s:10.5,c:cl});T(g,386,yy+20,'›',{s:14,c:'#3A4E6C',a:'end',f:FS});act(g,a+' '+b,fn)});return}
  const w=214,x0=640-w-8;el(A,'rect',{x:x0,y:8,width:w,height:24+Math.max(1,rows.length)*16,fill:'#05080F',opacity:.92,stroke:K.l});
  T(A,x0+8,23,t('alerts'),{s:9,u:1});
  if(!rows.length)T(A,x0+8,39,t('a_none'),{s:8.5,c:K.g});
  rows.forEach(([cl,a,b,fn],k)=>{const g=el(A,'g',{});el(g,'rect',{x:x0+2,y:28+k*16,width:w-4,height:15,fill:'transparent'});T(g,x0+8,39+k*16,a,{s:8.5,c:cl,w:700});T(g,x0+62,39+k*16,b,{s:8.5,c:cl});act(g,a+' '+b,fn)})}
 drawMemo(ts){const M=this.memo;clear(M);const i=ts/4;const a=this.AC.find(x=>x.cs===this.sel)||this.AC[0];const p=this.pos(a,ts);const c=this.compact;
  this.drawMemoBase(a,p,a.ins[i],a.off[i]);
  const avail=this.recs.map((r,k)=>[r,k]).filter(([r])=>r.t<=ts);let rk=this.recSel;if(!avail.some(([,k])=>k===rk))rk=avail.length?avail[avail.length-1][1]:-1;
  const x0=c?10:312,y0=c?this.L.rec.y+18:434,xe=c?390:630,rh=c?20:16,fs=c?10:8.5;
  if(rk<0){T(M,x0,y0,t('ev_rec'),{s:c?10.5:9,u:1});T(M,x0,y0+22,t('no_rec'),{s:fs,c:K.g});return}
  const r=this.recs[rk];
  const Lr=[[t('cls'),t(r.cls),r.cls==='c_gnss'?K.A:K.G],[t('annexdoc'),t(r.ad),r.ad==='no2'?K.A:K.G],[t('esarr')+' · '+t('partis'),r.es+' · '+t(r.pi),r.pi==='report'?K.G:K.W],[t('attack')+' · '+t('cause'),(r.at||'—')+' · '+t(r.ca),K.W]];
  T(M,x0,y0,t('ev_rec')+' · '+hhmmss(r.t)+'Z',{s:c?10.5:9,u:1,f:FS});
  Lr.forEach(([a1,b,cl],k)=>{T(M,x0,y0+18+k*rh,a1,{s:fs-.5,c:K.C});T(M,xe,y0+18+k*rh,b,{s:fs,c:cl,a:'end'})})}
 drawMemoBase(a,p,ins,off){const M=this.memo;const c=this.compact;const y=c?this.L.memo.y+18:434,xe=c?390:290,x2=c?200:150,fs=c?10.5:9,rh=c?20:17;
  T(M,10,y,t('flight')+' · '+a.cs,{s:fs,u:1});T(M,xe,y,t('sel_hint'),{s:c?8.5:7.5,c:'#3A4E6C',a:'end'});
  T(M,10,y+rh+1,a.ty+(a.rt?' · '+a.rt:''),{s:fs,c:K.C});
  T(M,10,y+rh*2+1,'FL'+String(p.fl).padStart(3,'0')+p.trend+(a.cfl?' CFL'+a.cfl:''),{s:fs,c:K.G});T(M,x2,y+rh*2+1,t('gs')+' '+a.gs+' · '+t('hdg')+' '+String(a.h).padStart(3,'0'),{s:fs,c:K.G});
  T(M,10,y+rh*3+1,'NIC '+(ins?0:8)+' · NACp '+(ins?2:9),{s:fs,c:ins?K.A:K.G});T(M,x2,y+rh*3+1,t('dev')+' '+off.toFixed(1)+' NM',{s:fs,c:off>=1?K.A:K.G});
  for(let k=0;k<11;k++)el(M,'rect',{x:10+k*(c?11:9),y:y+rh*3+9,width:c?9:7,height:6,fill:k<(ins?0:8)?(ins?K.A:K.G):'#1A2433'})}
}
const PR=(1n<<257n)-93n;
function modp(a){a%=PR;return a<0n?a+PR:a}
function powmod(b,e){let r=1n;b=modp(b);while(e>0n){if(e&1n)r=r*b%PR;b=b*b%PR;e>>=1n}return r}
function b2n(u){let x=0n;for(const b of u)x=(x<<8n)|BigInt(b);return x}
function n2b(x,n){const u=new Uint8Array(n);for(let i=n-1;i>=0;i--){u[i]=Number(x&255n);x>>=8n}return u}
function nhex(x,n){return x.toString(16).padStart(65,'0').slice(0,n)}
let ECG=null;
function makeECG(){if(ECG)return ECG;const fs=360,N=600*fs;const r=rng(20260823);const beats=[];let tb=.31;let k=0;
 while(tb<601){beats.push(tb);tb+=.82+.035*Math.sin(2*Math.PI*k/19)+(r()-.5)*.03;k++}
 const g=(d,m,s,a)=>a*Math.exp(-((d-m)**2)/(2*s*s));
 const f1=d=>g(d,-.2,.025,.12)+g(d,-.035,.01,-.14)+g(d,0,.011,1)+g(d,.035,.012,-.28)+g(d,.24,.045,.3);
 const f2=d=>g(d,-.2,.025,.08)+g(d,-.03,.012,-.3)+g(d,0,.012,.55)+g(d,.04,.014,-.5)+g(d,.25,.05,.22);
 const c1=new Int16Array(N),c2=new Int16Array(N);let bi=0;
 for(let i=0;i<N;i++){const ts=i/fs;while(bi<beats.length-2&&beats[bi+1]<=ts)bi++;const d0=ts-beats[bi],d1=ts-beats[bi+1];const w=.05*Math.sin(2*Math.PI*ts/6.5);const n=(r()-.5)*.03;
  c1[i]=Math.round((f1(d0)+f1(d1)+w+n)*1000);c2[i]=Math.round((f2(d0)+f2(d1)+w*.6+n)*1000)}
 ECG={c1,c2,fs};return ECG}
class BB3{
 constructor(host){this.host=host;this.svg=mkSvg('BB3 synoptic');this.st={report:false,dlv:[false,false,false],ok:null,unlocked:false,single:0,tam:new Set(),win:290,ready:false,err:null};this.log=[];this.build();this.seal()}
 addLog(k,extra,c){this.log.push({ts:utcNow(),k,extra:extra||'',c:c||K.G});if(this.log.length>60)this.log.shift()}
 async seal(reset){const st=this.st;st.ready=false;st.ok=null;st.unlocked=false;st.plain=null;st.tam=new Set();st.dlv=[false,false,false];st.report=false;this.draw();
  try{if(!(window.crypto&&crypto.subtle))throw new Error('WebCrypto');const E=makeECG();const enc=new TextEncoder();
   const key=crypto.getRandomValues(new Uint8Array(32));this.digest=new Uint8Array(await crypto.subtle.digest('SHA-256',key));
   const ck=await crypto.subtle.importKey('raw',key,'AES-GCM',false,['encrypt']);const pre=crypto.getRandomValues(new Uint8Array(4));this.pre=pre;
   const jobs=[];for(let i=0;i<600;i++){const pt=new Int16Array(720);pt.set(E.c1.subarray(i*360,i*360+360),0);pt.set(E.c2.subarray(i*360,i*360+360),360);
    const iv=this.iv(i);jobs.push(crypto.subtle.encrypt({name:'AES-GCM',iv,additionalData:enc.encode(`SBX2471|${i}|KARAKUTU-v1`),tagLength:128},ck,pt.buffer).then(b=>new Uint8Array(b)))}
   this.ct=await Promise.all(jobs);
   const k0=b2n(key);const a1=modp(b2n(crypto.getRandomValues(new Uint8Array(40))));this.shares=[1n,2n,3n].map(x=>({x,y:modp(k0+a1*x)}));
   key.fill(0);st.ready=true;this.addLog(reset?'log_reset':'log_seal','',K.C)}
  catch(e){st.err=String(e&&e.message||e)}this.draw()}
 iv(i){const v=new Uint8Array(12);v.set(this.pre,0);const dv=new DataView(v.buffer);dv.setUint32(8,i);return v}
 async verify(kb){const enc=new TextEncoder();const ck=await crypto.subtle.importKey('raw',kb,'AES-GCM',false,['decrypt']);let ok=0;const plain=new Array(600).fill(null);
  await Promise.all(this.ct.map((c,i)=>crypto.subtle.decrypt({name:'AES-GCM',iv:this.iv(i),additionalData:enc.encode(`SBX2471|${i}|KARAKUTU-v1`),tagLength:128},ck,c).then(b=>{plain[i]=new Int16Array(b);ok++},()=>{})));
  return {ok,plain}}
 async recompute(){const st=this.st;const d=[0,1,2].filter(i=>st.dlv[i]);
  if(st.report&&d.length>=2){const s1=this.shares[d[0]],s2=this.shares[d[1]];const k=modp((s1.y*s2.x-s2.y*s1.x)*powmod(s2.x-s1.x,PR-2n));
   if(k>=(1n<<256n)){st.unlocked=false;st.ok=0;this.draw();return}
   const kb=n2b(k,32);const r=await this.verify(kb);kb.fill(0);st.ok=r.ok;st.plain=r.plain;st.unlocked=r.ok>0;this.addLog('log_open',` ${r.ok}/600`,r.ok===600?K.G:K.A)}
  else{st.unlocked=false;st.plain=null;st.ok=null}this.draw()}
 async deliver(i){const st=this.st;if(!st.ready)return;if(!st.report){this.addLog('log_norep','',K.A);this.flash=Date.now();this.draw();return}
  st.dlv[i]=!st.dlv[i];this.addLog(st.dlv[i]?'log_dlv':'log_wd',' · '+'ABC'[i],st.dlv[i]?K.G:K.A);await this.recompute()}
 async single(){const st=this.st;if(!st.ready)return;if(!st.report){this.addLog('log_norep','',K.A);this.draw();return}
  const i=st.dlv.findIndex(x=>x);const s=this.shares[i<0?0:i];const kb=n2b(s.y&((1n<<256n)-1n),32);const r=await this.verify(kb);kb.fill(0);
  st.single=Date.now();this.addLog('log_single',` · ${'ABC'[i<0?0:i]} · ${r.ok}/600`,K.R);this.draw();setTimeout(()=>this.draw(),3100)}
 async tamper(){const st=this.st;if(!st.ready)return;let i;do{i=Math.floor(Math.random()*600)}while(st.tam.has(i)&&st.tam.size<600);
  this.ct[i][7]^=0x5A;st.tam.add(i);this.addLog('log_tamper',' · #'+i,K.R);if(st.unlocked)await this.recompute();else this.draw()}
 toggleReport(){const st=this.st;if(!st.ready)return;st.report=!st.report;this.addLog(st.report?'log_rep':'log_unrep','',st.report?K.G:K.A);if(!st.report){st.dlv=[false,false,false]}this.recompute()}
 setCompact(c){if(this.compact===c)return;this.compact=c;this.build()}
 lay(){return this.compact?{W:400,H:858,log:438,mon:472,monH:134,ctl:612,rib:{x:14,y:736,cols:60,px:6.2,py:7.6,rows:10}}:{W:640,H:600,log:304,mon:338,monH:132,ctl:476,rib:{x:10,y:520,cols:120,px:5.17,py:8,rows:5}}}
 build(){const S=this.svg;clear(S);const L=this.L=this.lay();S.setAttribute('viewBox',`0 0 ${L.W} ${L.H}`);el(S,'rect',{x:0,y:0,width:L.W,height:L.H,fill:'#000'});
  this.gSyn=el(S,'g',{});this.gLog=el(S,'g',{});this.gMon=el(S,'g',{});this.gCtl=el(S,'g',{});
  const C=this.gCtl;el(C,'rect',{x:0,y:L.ctl,width:L.W,height:L.H-L.ctl,fill:'#000',stroke:K.l});
  this.bRep=el(C,'g',{});act(this.bRep,t('b_report'),()=>this.toggleReport());
  if(this.compact){const o={s:11,w:700};button(C,204,620,186,48,t('b_single'),Object.assign({c:K.A,stroke:K.A},o),()=>this.single());
   button(C,10,674,186,48,t('b_tamper'),Object.assign({c:K.R,stroke:K.R},o),()=>this.tamper());button(C,204,674,186,48,t('b_reset'),Object.assign({c:K.g,stroke:K.l},o),()=>this.seal(true))}
  else{button(C,168,484,150,26,t('b_single'),{c:K.A,stroke:K.A,s:9.5},()=>this.single());
   button(C,326,484,150,26,t('b_tamper'),{c:K.R,stroke:K.R,s:9.5},()=>this.tamper());
   button(C,484,484,146,26,t('b_reset'),{c:K.g,stroke:K.l,s:9.5},()=>this.seal(true))}
  const R=L.rib;this.gRib=el(C,'g',{});const hit=el(C,'rect',{x:R.x-4,y:R.y-4,width:R.cols*R.px+8,height:R.rows*R.py+8,fill:'transparent',style:'cursor:ew-resize'});
  drag(this.svg,hit,p=>{const col=Math.max(0,Math.min(R.cols-1,Math.floor((p.x-R.x)/R.px))),row=Math.max(0,Math.min(R.rows-1,Math.floor((p.y-R.y)/R.py)));this.st.win=Math.max(0,Math.min(595,row*R.cols+col-2));this.draw()});
  this.draw()}
 draw(){if(!this.gSyn)return;if(this.compact)this.drawSynC();else this.drawSyn();this.drawLog();this.drawMon();this.drawCtl()}
 recState(){const st=this.st;let rs,rc;if(st.err){rs='WEBCRYPTO —';rc=K.R}else if(!st.ready){rs='…';rc=K.g}else if(st.ok!=null){rs=t('rec_ok')+' '+st.ok+'/600';rc=st.ok===600?K.G:st.ok>0?K.A:K.R}else{rs=t('rec_sealed');rc=K.G}return [rs,rc]}
 helpers(S){const box=(x,y,w,h,l1,l2,c,c2,fs)=>{fs=fs||9.5;el(S,'rect',{x,y,width:w,height:h,fill:'#000',stroke:c||K.W,'stroke-width':1.3});T(S,x+w/2,y+(l2?h/2-2:h/2+4),l1,{s:fs,c:c||K.W,a:'middle'});if(l2)T(S,x+w/2,y+h/2+11,l2,{s:fs-1,c:c2||K.G,a:'middle'})};
  const flow=(d,c,anim)=>el(S,'path',{d,fill:'none',stroke:c||K.G,'stroke-width':2,class:anim?'kk-flow':''});
  const arr=(x,y,dir,c)=>el(S,'path',{d:dir==='r'?`M${x},${y} l-7,-4 v8 Z`:dir==='u'?`M${x},${y} l-4,7 h8 Z`:`M${x},${y} l-4,-7 h8 Z`,fill:c||K.G});return {box,flow,arr}}
 drawSyn(){const S=this.gSyn;clear(S);const st=this.st;const {box,flow,arr}=this.helpers(S);
  T(S,14,24,'BB3',{s:15,f:FS,w:700});el(S,'line',{x1:14,x2:48,y1:29,y2:29,stroke:K.W,'stroke-width':1.5});
  const [rs,rc]=this.recState();T(S,626,24,rs,{s:11,c:rc,a:'end'});
  box(20,44,86,34,t('sensors')+'1','360 Hz');box(20,92,86,34,t('sensors')+'2','360 Hz');
  flow('M106,61 H128 V84 H146');flow('M106,109 H128 V84');arr(150,84,'r');
  box(150,64,104,40,t('packer'),'1 s · 600');flow('M254,84 H286');arr(290,84,'r');
  box(290,60,124,48,'AES-256-GCM',t('aad'));flow('M414,84 H454');arr(458,84,'r');
  box(458,60,166,48,t('recbox'),st.ok!=null?st.ok+' / 600 ✓':'600 · GCM',rc,rc);
  flow('M352,108 V136',K.C);arr(352,140,'d',K.C);T(S,360,126,'k₀',{s:10,c:K.C});
  box(296,140,112,30,'SHAMIR 2/3','',K.C);
  if(this.digest)T(S,416,152,'SHA-256(k₀) '+hex(this.digest,4)+'…',{s:8,c:K.C});T(S,416,165,t('k0del'),{s:8.5,c:K.A});
  const gc=st.report?K.G:K.A;el(S,'rect',{x:20,y:140,width:150,height:40,fill:'#000',stroke:gc,'stroke-dasharray':st.report?'none':'4 3'});
  T(S,28,155,t('gov'),{s:8,c:K.g});T(S,28,170,t('gov_rep')+' · '+(st.report?t('gov_yes'):t('gov_no')),{s:8.5,c:gc});
  const gg=el(S,'g',{});el(gg,'rect',{x:20,y:140,width:150,height:40,fill:'transparent'});act(gg,t('b_report'),()=>this.toggleReport());
  flow('M352,170 V196',K.C);flow('M110,196 H470',K.C);
  const X=[110,330,470],N=[t('cA'),t('cB'),t('cC')];
  X.forEach((x,i)=>{const on=st.dlv[i];const c=on?K.G:st.report?K.A:K.g;flow(`M${x},196 V208`,K.C);
   const g=el(S,'g',{});const vy=222;el(g,'circle',{cx:x,cy:vy,r:12,fill:'#000',stroke:c,'stroke-width':1.8});
   el(g,'line',on?{x1:x,x2:x,y1:vy-12,y2:vy+12,stroke:K.G,'stroke-width':2}:{x1:x-12,x2:x+12,y1:vy,y2:vy,stroke:c,'stroke-width':2});
   el(g,'rect',{x:x-18,y:vy-18,width:112,height:56,fill:'transparent'});
   act(g,'ABC'[i]+' '+N[i],()=>this.deliver(i));
   T(S,x+18,vy-3,'ABC'[i],{s:13,c,w:700,f:FS});T(S,x+18,vy+9,N[i],{s:8,c:K.W});
   T(S,x+18,vy+21,on?t('deliv'):st.report?t('vault'):t('locked_gov'),{s:8,c});
   if(this.shares)T(S,x+18,vy+33,'y='+nhex(this.shares[i].y,8)+'…',{s:7.5,c:'#3A4E6C'});
   if(on)flow(`M${x},234 V262`);S.appendChild(g)});
  const dl=X.filter((x,i)=>st.dlv[i]);if(dl.length){flow(`M${Math.min(...dl,340)},262 H${Math.max(...dl,340)}`);flow('M340,262 V268')}
  const sgl=Date.now()-st.single<3000;const kc=st.unlocked?K.G:sgl?K.R:K.g;
  el(S,'rect',{x:250,y:268,width:180,height:28,fill:'#000',stroke:kc,'stroke-width':1.6});
  T(S,340,286,sgl?t('single_rej'):st.unlocked?t('open')+' · 2/3':t('combine')+' · '+dl.length+'/2',{s:10,c:kc,a:'middle',w:700});
  flow('M430,282 H600 V108',st.unlocked?K.G:K.l,st.unlocked);arr(600,108,'u',st.unlocked?K.G:K.l)}
 drawSynC(){const S=this.gSyn;clear(S);const st=this.st;const {box,flow,arr}=this.helpers(S);
  T(S,12,24,'BB3',{s:15,f:FS,w:700});el(S,'line',{x1:12,x2:46,y1:29,y2:29,stroke:K.W,'stroke-width':1.5});
  const [rs,rc]=this.recState();T(S,390,24,rs,{s:10.5,c:rc,a:'end'});
  box(10,40,74,26,t('sensors')+'1','',K.W,null,9.5);box(10,72,74,26,t('sensors')+'2','',K.W,null,9.5);
  flow('M84,53 H96 V69 H104');flow('M84,85 H96 V69');arr(108,69,'r');
  box(108,46,100,46,t('packer'),'1 s · 600',null,null,9.5);flow('M208,69 H228');arr(232,69,'r');
  box(232,44,158,50,'AES-256-GCM',t('aad'),null,null,10);
  flow('M300,94 V106 H110 V112');arr(110,116,'d');
  box(10,116,200,44,t('recbox'),st.ok!=null?st.ok+' / 600 ✓':'600 · GCM',rc,rc,10);
  flow('M352,94 V116',K.C);arr(352,120,'d',K.C);T(S,358,110,'k₀',{s:10,c:K.C});
  box(262,120,128,32,'SHAMIR 2/3','',K.C,null,10);
  if(this.digest)T(S,262,168,'SHA-256(k₀) '+hex(this.digest,3)+'…',{s:8.5,c:K.C});T(S,262,181,t('k0del'),{s:9,c:K.A});
  const gc=st.report?K.G:K.A;const gg=el(S,'g',{});el(gg,'rect',{x:10,y:168,width:200,height:46,fill:'#000',stroke:gc,'stroke-dasharray':st.report?'none':'4 3'});
  T(gg,20,186,t('gov'),{s:8.5,c:K.g});T(gg,20,204,t('gov_rep')+' · '+(st.report?t('gov_yes'):t('gov_no')),{s:9.5,c:gc});act(gg,t('b_report'),()=>this.toggleReport());
  flow('M326,152 V222 H30 V346',K.C);
  const Y=[246,296,346],N=[t('cA'),t('cB'),t('cC')];
  Y.forEach((y,i)=>{const on=st.dlv[i];const c=on?K.G:st.report?K.A:K.g;const g=el(S,'g',{});
   el(g,'rect',{x:4,y:y-23,width:392,height:46,rx:6,fill:on?'#071A0E':'#05080F',stroke:on?'#1C6B3A':K.l});
   el(g,'circle',{cx:30,cy:y,r:13,fill:'#000',stroke:c,'stroke-width':2});
   el(g,'line',on?{x1:30,x2:30,y1:y-13,y2:y+13,stroke:K.G,'stroke-width':2.2}:{x1:17,x2:43,y1:y,y2:y,stroke:c,'stroke-width':2.2});
   T(g,52,y-5,'ABC'[i]+' · '+N[i],{s:11,c,w:700,f:FS});T(g,52,y+12,(on?t('deliv'):st.report?t('vault'):t('locked_gov'))+(this.shares?'  ·  y='+nhex(this.shares[i].y,6)+'…':''),{s:9,c});
   el(g,'rect',{x:340,y:y-11,width:40,height:22,rx:11,fill:on?'#1C6B3A':'#26324A'});el(g,'circle',{cx:on?369:351,cy:y,r:8,fill:on?K.G:K.g});
   act(g,'ABC'[i]+' '+N[i],()=>this.deliver(i))});
  const dl=Y.filter((y,i)=>st.dlv[i]);
  const sgl=Date.now()-st.single<3000;const kc=st.unlocked?K.G:sgl?K.R:K.g;
  el(S,'rect',{x:10,y:386,width:380,height:40,fill:'#000',stroke:kc,'stroke-width':1.6});
  T(S,200,411,sgl?t('single_rej'):st.unlocked?t('open')+' · 2/3 → '+t('recbox'):t('combine')+' · '+dl.length+'/2',{s:11.5,c:kc,a:'middle',w:700});
  if(st.unlocked)flow('M200,386 V378',K.G,true)}
 drawLog(){const S=this.gLog;clear(S);const L=this.L,c=this.compact;el(S,'rect',{x:0,y:L.log,width:L.W,height:28,fill:'#000',stroke:K.l});
  const e=this.log[this.log.length-1];if(e)T(S,10,L.log+18,(c?e.ts.slice(0,5)+' ':e.ts+'  ')+t(e.k)+e.extra,{s:c?9:8.5,c:e.c});
  T(S,L.W-10,L.log+18,c?String(this.log.length):t('log_n')+' · '+this.log.length,{s:8,c:K.g,a:'end'})}
 drawMon(){const S=this.gMon;clear(S);const st=this.st;const L=this.L,c=this.compact;const y0=L.mon;el(S,'rect',{x:0,y:y0,width:L.W,height:L.monH,fill:'#000',stroke:K.l});
  const w=st.win;T(S,10,y0+16,t('mon_win')+' '+w+'–'+(w+5)+' s'+(c?'':' · '+t('synth_ecg')),{s:c?9:8.5,c:K.g});
  T(S,L.W-10,y0+16,st.unlocked?(c?t('mon_dec').split(' · ')[0]:t('mon_dec')):(c?t('mon_enc').split(' · ')[0]:t('mon_enc')),{s:c?9:8.5,c:st.unlocked?K.C:K.A,a:'end'});
  const X0=10,W=c?290:490;for(let i=0;i<6;i++)el(S,'line',{x1:X0+i*W/5,x2:X0+i*W/5,y1:y0+22,y2:y0+L.monH-6,stroke:'#0E1B12'});
  const pts=(arr,ya,h,col,sw)=>{let d='';let mn=1e9,mx=-1e9;for(const v of arr){if(v==null)continue;mn=Math.min(mn,v);mx=Math.max(mx,v)}
   let pen=false;arr.forEach((v,i)=>{if(v==null){pen=false;return}const x=X0+W*i/(arr.length-1),y=ya+h-(v-mn)/((mx-mn)||1)*h;d+=(pen?'L':'M')+x.toFixed(1)+','+y.toFixed(1);pen=true});
   el(S,'path',{d,fill:'none',stroke:col,'stroke-width':sw||1.4,'stroke-linejoin':'round'})};
  const step=c?6:3;const hx=c?300:512,he=L.W-10;
  if(st.unlocked&&st.plain){const a1=[],a2=[];for(let p=w;p<w+5;p++){const pl=st.plain[p];for(let j=0;j<360;j+=step){a1.push(pl?pl[j]:null);a2.push(pl?pl[360+j]:null)}}
   for(let p=w;p<w+5;p++)if(!st.plain[p])el(S,'rect',{x:X0+W*(p-w)/5,y:y0+22,width:W/5,height:L.monH-28,fill:'#3A0D0D'});
   pts(a1,y0+24,c?50:46,K.G,1.5);pts(a2,y0+(c?82:78),c?44:40,K.C,1.3);
   const raw=[];for(let p=w;p<w+5;p++){const pl=st.plain[p];if(!pl)continue;for(let j=0;j<360;j++)raw.push(pl[j])}
   let hr='--';if(raw.length>720){const mx=Math.max(...raw);const th=mx*.55;const pk=[];for(let i=1;i<raw.length-1;i++)if(raw[i]>th&&raw[i]>=raw[i-1]&&raw[i]>raw[i+1]&&(!pk.length||i-pk[pk.length-1]>108))pk.push(i);
    if(pk.length>1){const rr=(pk[pk.length-1]-pk[0])/(pk.length-1)/360;hr=String(Math.round(60/rr))}}
   T(S,hx,y0+48,t('hr'),{s:9,c:K.G});T(S,he,y0+(c?80:74),hr,{s:c?32:34,c:K.G,a:'end',f:FS,w:700});T(S,hx,y0+L.monH-16,'K2',{s:9,c:K.C});T(S,he,y0+L.monH-12,'360 Hz',{s:c?11:12,c:K.C,a:'end'})}
  else if(this.ct){const a=[];for(let p=w;p<w+5;p++){const cc=this.ct[p];for(let j=0;j<360;j+=step*2/3|0||2)a.push(cc[j])}
   pts(a,y0+26,L.monH-40,'#2C4A66',1);T(S,(hx+he)/2,y0+L.monH/2+8,t('mon_enc').split(' · ')[0],{s:9.5,c:K.A,a:'middle'})}}
 drawCtl(){const st=this.st;const L=this.L,c=this.compact;const g=this.bRep;clear(g);const col=st.report?K.g:K.G;
  const bx=10,by=c?620:484,bw=c?186:150,bh=c?48:26;
  el(g,'rect',{x:bx,y:by,width:bw,height:bh,rx:2,fill:st.report?'#000':'#0B2A16',stroke:st.report?K.l:K.G,'stroke-width':1.4});T(g,bx+bw/2,by+bh/2+(c?4:3.5),st.report?t('b_unreport'):t('b_report'),{s:c?11:9.5,c:col,a:'middle',w:700});
  const R=this.gRib;clear(R);const w=st.win;const RB=L.rib;
  for(let i=0;i<600;i++){const cc=i%RB.cols,r=Math.floor(i/RB.cols);const inw=i>=w&&i<w+5;const bad=st.tam.has(i)||(st.plain&&!st.plain[i]);
   el(R,'rect',{x:RB.x+cc*RB.px,y:RB.y+r*RB.py,width:RB.px*.8,height:RB.py*.75,fill:bad?K.R:inw?K.W:st.unlocked?K.G:'#2C4A66',opacity:inw||bad?1:.8})}
  const ty=RB.y+RB.rows*RB.py+(c?16:12);
  T(R,RB.x,ty,c?t('ribbon').split(' · ')[0]:t('ribbon'),{s:c?9:8,c:K.g});T(R,L.W-10,ty,w+'–'+(w+5)+' s',{s:c?9.5:8.5,c:K.W,a:'end'});
  if(!st.report&&st.ready)T(R,L.W/2,ty+(c?20:16),t('hint_bb3'),{s:c?9.5:8.5,c:K.A,a:'middle'})}
}
const WOS=[['WO-0917',32,'wo1','TKS','hold'],['WO-0930',71,'wo2','TKS','hold'],['WO-0921',32,'wo3','TKS','verify'],['WO-0884',72,'wo4','OT-3','run'],['WO-0902',31,'wo5','DLS','done'],
 ['WO-0866',25,'wo6','MIS','done'],['WO-0911',28,'wo7','MIS','run'],['WO-0925',52,'wo8','MIS','done'],['WO-0940',49,'wo9','MIS','run'],['WO-0948',34,'wo10','DLS','done']];
const STC={hold:'#FFB020',verify:'#3CC8E8',run:'#40E07A',done:'#40E07A'};
const RISKC={4:'#FF4545',3:'#FFB020',2:'#3CC8E8',1:'#40E07A'};
class MRO{
 constructor(host){this.host=host;this.svg=mkSvg('MRO MCDU status');this.page='MENU';this.pg=0;this.wo=0;this.rec=0;this.scr='';this.msg='';this.build()}
 setCompact(c){if(this.compact===c)return;this.compact=c;this.build()}
 lay(){return this.compact?{W:400,H:1252,bez:[4,4,392,716],scr:[58,22,284,304],d0:86,dp:38,lsk:[10,352,38,26],fk:[10,340,72,40,77,46,9.5],kp:[40,450,64,44,17,12],msg:[378,706],st:[4,728,392,520],sx:[16,384,200],sy:752,lh:18,ak:.4,fs:[9.5,12.5,13]}
   :{W:640,H:600,bez:[2,2,308,596],scr:[44,20,224,246],d0:70,dp:34,lsk:[14,276,22,14],fk:[14,278,53,26,57,32,7.5],kp:[40,362,46,38,14,10],msg:[290,580],st:[318,2,320,596],sx:[330,626,478],sy:26,lh:15,ak:.44,fs:[8,10.5,11]}}
 dataY(k){return this.L.d0+k*this.L.dp}
 build(){const S=this.svg;clear(S);const L=this.L=this.lay();S.setAttribute('viewBox',`0 0 ${L.W} ${L.H}`);el(S,'rect',{x:0,y:0,width:L.W,height:L.H,fill:'#0A0E15'});
  const [bx,by,bw,bh]=L.bez;el(S,'rect',{x:bx,y:by,width:bw,height:bh,rx:14,fill:'#1A1F29',stroke:'#2E3646','stroke-width':2});el(S,'rect',{x:bx+8,y:by+8,width:bw-16,height:bh-16,rx:10,fill:'none',stroke:'#11151C'});
  const [sx,sy,sw,sh]=L.scr;el(S,'rect',{x:sx,y:sy,width:sw,height:sh,rx:4,fill:'#000',stroke:'#2E3646','stroke-width':3});
  this.scrG=el(S,'g',{});
  const [lx,rx,lw,lh]=L.lsk;
  for(let k=0;k<6;k++){const y=this.dataY(k)-5;
   for(const side of ['L','R']){const x=side==='L'?lx:rx;const g=el(S,'g',{});el(g,'rect',{x:x-6,y:y-L.dp/2,width:lw+12,height:L.dp,fill:'transparent'});
    el(g,'rect',{x,y:y-lh/2,width:lw,height:lh,rx:3,fill:'#2A303C',stroke:'#3A4252'});
    el(g,'line',{x1:side==='L'?x+lw:x,x2:side==='L'?x+lw+5:x-5,y1:y,y2:y,stroke:'#4A5466'});act(g,side+(k+1),()=>this.lsk(side,k))}}
  const F=[['k_wo',()=>this.go('WO')],['k_ev',()=>this.go('EV')],['k_partis',()=>this.go('PARTIS')],['k_attack',()=>this.go('ATTACK')],['k_ek19',()=>this.go('EK19')],
   ['k_menu',()=>this.go('MENU')],['k_prev',()=>this.slew(-1)],['k_next',()=>this.slew(1)],['k_sp',()=>this.type(' ')],['k_clr',()=>{this.scr='';this.msg='';this.draw()}]];
  const [fx,fy,fw,fh,fp,fr,ffs]=L.fk;
  F.forEach(([k,fn],i)=>{const x=fx+(i%5)*fp,y=fy+Math.floor(i/5)*fr;const g=el(S,'g',{});el(g,'rect',{x:x-(fp-fw)/2,y:y-(fr-fh)/2,width:fp,height:fr,fill:'transparent'});el(g,'rect',{x,y,width:fw,height:fh,rx:3,fill:'#262C38',stroke:'#3A4252'});T(g,x+fw/2,y+fh/2+ffs*.38,t(k),{s:ffs,a:'middle'});act(g,t(k),fn)});
  const keys=['ABCDEF','GHIJKL','MNOPRS','TUVYZ/','123456','7890.-'];const [kx,ky,kpx,kpy,kr,kfs]=L.kp;
  keys.forEach((row,j)=>[...row].forEach((ch,i)=>{const cx=kx+i*kpx,cy=ky+j*kpy;const g=el(S,'g',{});el(g,'rect',{x:cx-kpx/2+2,y:cy-kpy/2+1,width:kpx-4,height:kpy-2,fill:'transparent'});el(g,'circle',{cx,cy,r:kr,fill:'#262C38',stroke:'#3A4252'});T(g,cx,cy+kfs*.36,ch,{s:kfs,a:'middle'});act(g,ch,()=>this.type(ch))}));
  this.msgL=el(S,'circle',{cx:L.msg[0],cy:L.msg[1],r:5,fill:'#3A2A0A'});T(S,L.msg[0]-10,L.msg[1]+4,'MSG',{s:7,c:K.g,a:'end'});
  const [tx,ty,tw,th]=L.st;el(S,'rect',{x:tx,y:ty,width:tw,height:th,rx:6,fill:'#000',stroke:K.l});this.stG=el(S,'g',{});
  this.draw()}
 go(p){this.page=p;this.pg=0;this.msg='';this.draw()}
 slew(d){const n=this.pages();this.pg=(this.pg+d+n)%n;this.draw()}
 pages(){return this.page==='WO'?2:this.page==='EV'?Math.ceil(MROREC.length/5):1}
 type(ch){if(this.scr.length<18)this.scr+=ch;this.msg='';this.draw()}
 say(k){this.msg=t(k);this.draw()}
 lsk(side,k){const p=this.page;
  if(p==='MENU'&&side==='L'){const m=['WO','EV','PARTIS','ATTACK','EK19'][k];if(m)this.go(m);return}
  if(p==='WO'){if(side==='L'&&k<5){const i=this.pg*5+k;if(i<WOS.length){this.wo=i;this.page='WO_DET';this.draw()}}else if(k===5&&side==='L')this.go('MENU');return}
  if(p==='WO_DET'){if(k===5&&side==='L'){this.page='WO';this.pg=Math.floor(this.wo/5);this.draw()}else if(k===5&&side==='R'&&WOS[this.wo][3]==='TKS'){this.rec=0;this.go('EV');this.say('sel_rec')}return}
  if(p==='EV'){if(side==='L'&&k<5){if(/^\d+$/.test(this.scr)){const id=this.scr.padStart(6,'0');const j=MROREC.findIndex(r=>r[0]===id);this.scr='';if(j>=0){this.rec=j;this.pg=Math.floor(j/5);this.say('sel_rec')}else this.say('no_page');return}
    const i=this.pg*5+k;if(i<MROREC.length){this.rec=i;this.say('sel_rec')}}else if(k===5&&side==='L')this.go('MENU');return}
  if(k===5&&side==='L')this.go('MENU')}
 draw(){this.drawScreen();this.drawStatus()}
 lines(){const L=[];const p=this.page;const r=MROREC[this.rec];const isS=this.rec===0;
  const st=s=>t('st_'+s);
  if(p==='MENU'){return {title:t('m_menu'),L:[[ '', '<'+t('m_wo'),K.C],['', '<'+t('m_ev'),K.C],['', '<'+t('m_partis'),K.C],['', '<'+t('m_attack'),K.C],['', '<'+t('m_ek19'),K.C],[t('menu_about'),t('menu_hint'),K.g]]}}
  if(p==='WO'){for(let k=0;k<5;k++){const w=WOS[this.pg*5+k];if(!w){L.push(['','']);continue}L.push([w[0]+' ATA'+w[1],'<'+t(w[2]),K.C,st(w[4]),STC[w[4]]])}L.push(['',t('back'),K.W]);return {title:t('m_wo'),pg:`${this.pg+1}/2`,L}}
  if(p==='WO_DET'){const w=WOS[this.wo];return {title:w[0],L:[[t('ata'),String(w[1]),K.C],[t('task'),t(w[2]),K.C],[t('system'),w[3],K.C],[t('state'),st(w[4]),STC[w[4]]],[t('reason'),w[3]==='TKS'?t('tks_unrel'):'—',w[3]==='TKS'?K.A:K.W],['',t('back'),K.W,w[3]==='TKS'?t('event'):'',K.W]]}}
  if(p==='EV'){for(let k=0;k<5;k++){const i=this.pg*5+k;const q=MROREC[i];if(!q){L.push(['','']);continue}
    L.push([(i===this.rec?'▶':' ')+q[0]+' · '+q[1],'<'+(t('cls_m')[q[3]]||q[3]).slice(0,19),i===this.rec?K.W:K.C,String(q[4]),RISKC[q[4]]])}
   L.push(['',t('back'),K.W]);return {title:t('m_ev'),pg:`${this.pg+1}/${this.pages()}`,L}}
  if(p==='PARTIS'){const nc=[t('not_coded'),K.g];return {title:t('m_partis')+' · '+r[0],L:[[t('is_event'),...(isS?[t('yes'),K.G]:nc)],[t('assessed'),...(isS?['✓',K.G]:nc)],[t('reportable'),...(isS?['✓',K.G]:nc)],[t('cause'),...(isS?[t('nonadv'),K.W]:nc)],['',''],['',t('back'),K.W]]}}
  if(p==='ATTACK'){const nm=t('tech')[r[9]]||'';return {title:t('m_attack')+' · '+r[0],L:[['ENTERPRISE',r[9],K.C],['',nm,K.W],[t('mapping'),isS?t('approx'):t('not_coded'),isS?K.A:K.g],[t('id_rule'),'',K.g],['',''],['',t('back'),K.W]]}}
  if(p==='EK19'){return {title:t('m_ek19')+' · '+r[0],L:[[t('ek19'),r[10].join(' '),K.C],[t('ek21'),r[4]+' · '+t('risk'+r[4]),RISKC[r[4]]],[t('h72'),r[7]?t('yes'):t('no'),r[7]?K.G:K.A],[t('kvkk'),r[6]?t('yes'):t('no'),K.W],[t('outage'),r[5]+' dk',K.W],['',t('back'),K.W]]}}
  return {title:'',L:[]}}
 drawScreen(){const S=this.scrG;clear(S);const o=this.lines();const L=this.L;const [sx,sy,sw,sh]=L.scr;const [f0,f1,f2]=L.fs;const c=this.compact;
  T(S,sx+sw/2,sy+(c?24:18),o.title,{s:f2,a:'middle'});if(o.pg)T(S,sx+sw-6,sy+(c?24:18),o.pg,{s:f0+1,a:'end'});
  o.L.forEach((ln,k)=>{const dy=this.dataY(k),ly=dy-(c?16:13);if(ln[0])T(S,sx+8,ly,ln[0],{s:f0,c:K.W});if(ln[1])T(S,sx+8,dy,ln[1],{s:f1,c:ln[2]||K.C,f:/^\d+\.\d/.test(ln[1])?FS:FM});if(ln[3])T(S,sx+sw-6,dy,ln[3],{s:f1,c:ln[4]||K.W,a:'end'})});
  const sp=this.msg||this.scr;T(S,sx+8,sy+sh-(c?10:8),sp,{s:f1,c:this.msg?K.A:K.W});this.msgL.setAttribute('fill',this.msg?K.A:'#3A2A0A');
  for(let k=0;k<6;k++){const dy=this.dataY(k);const ln=o.L[k];if(!ln||!(ln[1]||ln[3]))continue;const h=L.dp-2,y=dy-h+(c?8:6);
   const gl=el(S,'g',{});el(gl,'rect',{x:sx,y,width:sw*.66,height:h,fill:'transparent'});act(gl,'L'+(k+1),()=>this.lsk('L',k));
   const gr=el(S,'g',{});el(gr,'rect',{x:sx+sw*.66,y,width:sw*.34,height:h,fill:'transparent'});act(gr,'R'+(k+1),()=>this.lsk(ln[3]&&/>$/.test(ln[3])?'R':'L',k))}}
 drawStatus(){const S=this.stG;clear(S);const L=this.L;const r=MROREC[this.rec];const isS=this.rec===0;const [x0,x1,cx]=L.sx;const c=this.compact;const fs=c?11:9.5;
  T(S,cx,L.sy,t('status'),{s:c?16:14,a:'middle',f:FS,w:700});el(S,'line',{x1:cx-38,x2:cx+38,y1:L.sy+5,y2:L.sy+5,stroke:K.W,'stroke-width':1.5});
  T(S,x1,L.sy,r[0],{s:c?10.5:9,c:K.C,a:'end'});
  let y=L.sy+(c?32:28);const ln=(s,cl,o)=>{T(S,x0,y,s,Object.assign({s:fs,c:cl},o||{}));y+=L.lh};
  ln(t('restr'),K.C,{u:1});if(isS){ln(t('r1'),K.A);ln(t('r1b'),K.A);ln(t('r2'),K.W);ln(t('r3'),K.W)}else ln(t('r_none'),K.g);y+=6;
  ln(t('dual'),K.C,{u:1});
  const cls=t('cls_m')[r[3]]||r[3];
  const rows=[[t('cls'),cls,K.W],[t('ek13'),'✓✓✓✓✓',K.G],[t('ek19').split(' ')[0],r[10].join(' '),K.W],[t('ek21'),r[4]+' '+t('risk'+r[4]),RISKC[r[4]]],[t('h72'),r[7]?t('yes'):t('no'),r[7]?K.G:K.A],
   [t('partis'),isS?t('reportable'):t('not_coded'),isS?K.G:K.g],[t('attack'),r[9]+(isS?' ~':''),K.W],[t('cause'),isS?t('nonadv'):t('not_coded'),isS?K.W:K.g]];
  rows.forEach(([a,b,cl],j)=>{T(S,x0,y,a,{s:fs});T(S,x1,y,b,{s:j===2?fs+.5:fs,c:cl,a:'end',f:j===2?FS:FM});y+=L.lh});
  y+=4;el(S,'line',{x1:x0,x2:x1,y1:y-8,y2:y-8,stroke:K.l});
  T(S,x0,y+6,t('inop'),{s:fs,u:1});T(S,x1,y+6,isS?'TKS':'—',{s:fs,c:isS?K.A:K.g,a:'end'});
  const k=L.ak,yy=y+20;const g=el(S,'g',{transform:`translate(${cx},${yy}) scale(${k})`});const stl={fill:'none',stroke:isS?K.G:'#2C3A4E','stroke-width':1.2/k};
  ['M21,170 L200,268 L203,288 L21,246 Z','M-21,170 L-200,268 L-203,288 L-21,246 Z','M17,352 L92,394 L94,408 L14,390 Z','M-17,352 L-92,394 L-94,408 L-14,390 Z','M0,0 C14,0 22,26 22,62 L22,350 C22,384 10,406 0,420 C-10,406 -22,384 -22,350 L-22,62 C-22,26 -14,0 0,0 Z'].forEach(d=>el(g,'path',Object.assign({d},stl)));
  [70,-92].forEach(x=>el(g,'rect',Object.assign({x,y:186,width:22,height:56,rx:9},stl)));
  if(isS){[['32',34,252,K.R,0],['32',-34,252,K.G,4],['71',81,236,K.R,1],['72',81,196,K.A,3],['31',0,58,K.G,4]].forEach(([tt,x,yv,cl,wi])=>{const X=cx+x*k,Y=yy+yv*k;const z=el(S,'g',{});el(z,'rect',{x:X-20,y:Y-15,width:40,height:30,fill:'transparent'});el(z,'rect',{x:X-10,y:Y-8,width:20,height:16,fill:'#000',stroke:cl});T(z,X,Y+3.5,tt,{s:8.5,c:cl,a:'middle'});
    act(z,'ATA '+tt,()=>{this.wo=wi;this.page='WO_DET';this.draw()})})}
  else T(S,cx,yy+206*k*1.1,t('ac_none'),{s:fs-1,c:K.g,a:'middle'})}
}
const MODS={atm:ATM,bb3:BB3,mro:MRO};const LABK={atm:'du_atm',bb3:'du_bb3',mro:'du_mro'};
const INST=[];
function mount(root){if(root.__kk)return;root.__kk=1;const full=root.getAttribute('data-karakutu')==='full';root.classList.add('kk');
 root.innerHTML=`<div class="kk-head"><div class="kk-brand" translate="no"><b>CDSA</b><span data-k="brand_sub"></span></div>
  <div class="kk-mods" role="tablist"><button type="button" data-m="atm">ATM</button><button type="button" data-m="bb3">BB3</button><button type="button" data-m="mro">MRO</button></div>
  <div class="kk-stat"><span class="kk-box kk-amb" data-k="synth"></span><span class="kk-utc">UTC <b>--:--:--</b></span>${full?'<button type="button" class="kk-lang">EN</button>':'<a class="kk-full" href="/sandbox/" data-k="full"></a>'}</div></div>
 <div class="kk-grid"><div class="kk-du kk-main"><div class="kk-lab"><span>DU 1</span><b></b><i class="dot"></i></div><div class="kk-scr"></div></div>
  <div class="kk-side"><div class="kk-du" role="button" tabindex="0"><div class="kk-lab"><span>DU 2</span><b></b><em data-k="promote"></em></div><div class="kk-scr"></div></div>
  <div class="kk-du" role="button" tabindex="0"><div class="kk-lab"><span>DU 3</span><b></b><em data-k="promote"></em></div><div class="kk-scr"></div></div></div></div>`;
 const I={root,full,order:['atm','bb3','mro'],mods:{}};
 for(const k in MODS)I.mods[k]=new MODS[k](I);
 const slots=[...root.querySelectorAll('.kk-du')];I.slots=slots;
 const place=()=>{I.order.forEach((m,i)=>{const sc=slots[i].querySelector('.kk-scr');sc.appendChild(I.mods[m].svg);slots[i].querySelector('.kk-lab b').textContent=t(LABK[m]);slots[i].dataset.m=m;
   if(i===0){const vb=I.mods[m].svg.getAttribute('viewBox').split(' ');sc.style.aspectRatio=vb[2]+'/'+vb[3]}});
  root.querySelectorAll('.kk-mods button').forEach(b=>{b.classList.toggle('on',b.dataset.m===I.order[0]);b.setAttribute('aria-selected',b.dataset.m===I.order[0])})};
 const promote=m=>{const i=I.order.indexOf(m);if(i<=0)return;I.order[i]=I.order[0];I.order[0]=m;place()};
 slots.slice(1).forEach(s=>{s.addEventListener('click',()=>promote(s.dataset.m));s.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();promote(s.dataset.m)}})});
 root.querySelectorAll('.kk-mods button').forEach(b=>b.addEventListener('click',()=>promote(b.dataset.m)));
 const utc=root.querySelector('.kk-utc b');I.mods.atm.onTime=x=>{utc.textContent=hhmmss(x)+'Z'};
 const lb=root.querySelector('.kk-lang');if(lb)lb.addEventListener('click',()=>setLang(LANG==='tr'?'en':'tr'));
 I.place=place;I.texts=()=>{root.querySelectorAll('[data-k]').forEach(e=>e.textContent=t(e.dataset.k));if(lb)lb.textContent=LANG==='tr'?'EN':'TR'};
 I.texts();place();I.mods.atm.draw(true);
 I.compact=null;const fit=()=>{const c=root.clientWidth<600;if(c===I.compact)return;I.compact=c;root.classList.toggle('kk-compact',c);for(const k in I.mods)I.mods[k].setCompact(c);place()};
 fit();if('ResizeObserver' in window)new ResizeObserver(fit).observe(root);else addEventListener('resize',fit);
 // visibility + autoplay
 I.vis=false;const red=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
 if('IntersectionObserver' in window){new IntersectionObserver(es=>{for(const e of es){I.vis=e.isIntersecting;if(I.vis&&!I.started&&!red){I.started=true;I.mods.atm.playing=true;I.mods.atm.drawPlay()}}},{threshold:.2}).observe(root)}else I.vis=true;
 INST.push(I)}
function setLang(l){LANG=l==='en'?'en':'tr';document.documentElement.lang=LANG;document.querySelectorAll('[data-kk-text]').forEach(e=>e.textContent=t(e.dataset.kkText));const desc=document.querySelector('meta[data-kk-description]');if(desc)desc.content=t('description');for(const I of INST){for(const k in I.mods){const m=I.mods[k];m.build()}I.texts();I.place();I.mods.atm.draw(true)}}
let last=0;function frame(ts){const dt=last?Math.min(.25,(ts-last)/1000):0;last=ts;for(const I of INST)if(I.vis&&!document.hidden)I.mods.atm.tick(dt);requestAnimationFrame(frame)}
function init(){let l=null;try{if(typeof lang==='string')l=lang}catch(e){}if(!l)l=(document.documentElement.lang||'tr').slice(0,2);LANG=l==='en'?'en':'tr';
 document.querySelectorAll('[data-karakutu]').forEach(mount);if(INST.length)requestAnimationFrame(frame)}
window.KARAKUTU={setLang,mount};
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
