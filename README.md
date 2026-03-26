# 📊 Weekly Trade Tracker

A free, browser-based trading tool — no installation, no backend, no subscription.  
Works offline. Optionally syncs to the cloud via Firebase.

**[▶ Live Demo](https://mellokone.github.io/WTT)**

---

## ✨ Features

- **Margin Calculator** — calculate required margin by profit target, entry/exit price and leverage
- **Trade Tracker** — log wins/losses across multiple trades with per-trade tabs
- **Total PnL** — cumulative stats: win rate, ROI, overall profit/loss
- **Trade Curve** — visual P&L chart per trade, per month, and overall
- **PnL Calendar** — daily and monthly P&L calendar view
- **Market Clocks** — real-time clocks for Kyiv, New York, London, Tokyo (configurable)
- **Notes** — rich-text notepad with bold, italic, lists and more
- **Drag & drop layout** — freely arrange and resize all panels
- **Cloud sync** — optional Google sign-in + Firestore sync across devices
- **Bilingual** — Ukrainian 🇺🇦 and English 🇬🇧
- **Lock screen** — password-protect your workspace
- **Undo / Redo** — full Ctrl+Z / Ctrl+Shift+Z support
- **Export / Import** — save and load your data as `.wtt` files

---

## 🚀 Quick Start

### Option A — Use online
Visit **[mellokone.github.io/wtt](https://mellokone.github.io/WTT)**

### Option B — Run locally
```
git clone https://github.com/Mellokone/wtt.git
cd wtt
# Open index.html in your browser
```
> All data is saved in your browser's `localStorage` — no server required.

---

## ☁️ Cloud Sync (optional)

Cloud sync lets you log in with Google and sync your trading data across devices.  
It requires a free Firebase project. See the full setup guide:

**[📖 Firebase Setup Guide](docs/FIREBASE_SETUP.md)**

---

## 📁 Project Structure

```
wtt/
├── index.html                  — main app
├── css/
│   └── style.css               — all styles
├── js/
│   └── app.js                  — all logic
├── img/
│   └── mellok.jpg              — author avatar (donation screen)
├── docs/
│   └── FIREBASE_SETUP.md       — cloud sync setup guide
├── firebase-config.example.js  — Firebase config template
├── index_en.html               — redirect to ?lang=en
├── index_uk.html               — redirect to ?lang=uk
├── LICENSE
└── .gitignore
```

---

## 🛠 Tech Stack

Vanilla HTML / CSS / JavaScript — zero dependencies, zero build step.  
Firebase Auth + Firestore (optional, for cloud sync).

---

## 📄 License

MIT © 2026 Olexandr Skorobagatko
