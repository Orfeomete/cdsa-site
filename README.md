# CDSA — Tamamlayıcı Tanısal Emniyet Yaklaşımı

> **Complementary Diagnostic Safety Approach**
> Giyilebilir teknolojiler ve uçuş emniyeti optimizasyonu araştırma projesi

🔗 **Canlı Site:** [orfeomete.github.io/cdsa-site](https://orfeomete.github.io/cdsa-site)

---

## Hakkında

Bu repo, **Tamamlayıcı Tanısal Emniyet Yaklaşımı (CDSA)** araştırma projesinin ana sunum sitesini barındırmaktadır. Site; akademik özet, CDSA mimarisi, canlı uygulama demoları ve kaynakçadan oluşmaktadır.

CDSA, geleneksel uçuş veri kaydedicilerinin (FDR/CVR) ölçemediği pilotun içsel fizyolojisini — akut stres, gizli hipoksi, mikro-uyku — giyilebilir teknoloji ile aydınlatmayı hedefleyen üçüncü nesil bir havacılık emniyet paradigmasıdır.

---

## Uygulama Ekosistemi

| Uygulama | Rol | Repo |
|----------|-----|------|
| **PilotO2 Watch Application** | Hipoksi ve risk tahmini | [hipoksi-app-](https://github.com/Orfeomete/hipoksi-app-) |
| **PilotGuard SmartWatch** | Uçuş öncesi hazırlık izleme | [pilotguard-app-](https://github.com/Orfeomete/pilotguard-app-) |
| **PilotReflect EFB** | Uçuş sonrası biyometrik değerlendirme | [PilotReflect-new](https://github.com/Orfeomete/PilotReflect-new) |
| **PilotSense AUTH** | Kriptografik çoklu imza — Aşama 1 | [pilotsense-auth](https://github.com/Orfeomete/pilotsense-auth) |
| **PilotSense OPS** | Anonim filo izleme — Aşama 2 | [pilotsense-ops](https://github.com/Orfeomete/pilotsense-ops) |

---

## CDSA Mimarisi

```
Bireysel Katman (Aşama 0)
├── PilotO2        →  SpO₂, HRV, solunum, irtifa izleme
├── PilotGuard     →  Stres, uyku, uçuş hazırlık skoru
└── PilotReflect   →  Uçuş sonrası EFB debriefing

Veri İşleme Katmanı
├── Aşama 1 (AUTH) →  AES-256-GCM + 3/3 kriptografik eşik
└── Aşama 2 (OPS)  →  Anonimleştirilmiş filo makro analizi
```

---

## Site İçeriği

- **Özet** — Akademik abstract (TR/EN)
- **İçerik** — 4 bölüm: Dönüşüm · Etik · Tanısal Güç · Regülasyon
- **CDSA Mimarisi** — Aşama 1 ve Aşama 2 iframe demoları
- **Canlı Demolar** — PilotO2, PilotGuard, PilotReflect
- **Sonuç** — Araştırma bulguları
- **Kaynakça** — Akademik kaynaklar + GitHub repoları

---

## Teknik

- Saf HTML/CSS/JS — harici framework yok
- Plus Jakarta Sans & Syne tipografisi
- **TR/EN dil desteği** — tam arayüz değişimi
- **GitHub Pages** — Statik hosting

---

## Akademik Kaynaklar

- Cantekin, M. (2025). *Mekanikten Yapay Zekaya Evrilen Pilot Saatlerinin Uçuş Emniyetindeki Yeni Rolü*. ATAConf'25, Yayın No: 10232620.
- Cantekin, M. (2025). *Tamamlayıcı Tanısal Emniyet Yaklaşımı (CDSA) Kapsamında Giyilebilir Teknolojiler ve Uçuş Emniyeti Optimizasyonu*.
- Cantekin, M. (2025). *PilotReflect: EFB Çerçevesinde Uçuş Sonrası Kişisel Biyometrik Refleksiyon Sistemi*.

---

> ⚠️ **Sadece eğitim ve araştırma amaçlıdır.** Tüm simülasyon verileri sentetiktir.

*ICAO Ek-13 · GDPR Madde 9 · FAA AC 120-76E · EASA AMC 20-25*
