# 🎯 AV NewsStream

**Production-ready news aggregation platform with intelligent API key rotation, 10-minute caching, and text-to-speech.**

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-avnews.vercel.app-brightgreen)](https://avnews.vercel.app/)
[![Technical Docs](https://img.shields.io/badge/📖_Technical_Docs-Read_More-blue)](./docs/AV-NEWSSTREAM-TECHNICAL-DOCUMENTATION.md)
[![Portfolio](https://img.shields.io/badge/👨‍💻_Portfolio-amansuryavanshi.me-4285F4)](https://www.amansuryavanshi.me)

---

## 📊 Key Metrics

| Metric | Value | Description |
|--------|-------|-------------|
| **API Reduction** | 90% | Through intelligent caching |
| **Daily Capacity** | 300+/day | Across 8 rotated keys |
| **Uptime** | 99.9% | Zero downtime during limits |
| **Users** | 1,000+ | Production-ready traffic |

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| **Smart Key Rotation** | Auto-rotate across 8 API keys (3/3/2 split) |
| **10-Min Caching** | Reduces API calls by 90% |
| **Multi-Source Feed** | NewsAPI + GNews + YouTube unified |
| **Duplicate Detection** | Content hashing algorithm |
| **Text-to-Speech** | Listen to articles via Web Speech API |
| **Save for Later** | Redux-persisted bookmarks |
| **Graceful Degradation** | Works when APIs fail |

---

## 🛠️ Tech Stack

| Layer | Technologies |
|-------|--------------|
| **Frontend** | React 18, Redux Toolkit, Vite, Tailwind CSS, DaisyUI |
| **Backend** | Node.js, Express, CORS |
| **APIs** | NewsAPI, GNews, YouTube Data API |
| **Voice** | Web Speech API (Native TTS) |
| **Deploy** | Vercel |

---

## 🚀 Quick Start

```bash
# Clone and install
git clone https://github.com/AmanSuryavanshi-1/AV-News-Stream.git
cd AV-News-Stream
npm install

# Configure environment
cp .env.local.example .env.local
# Add your API keys (3 per service for rotation)

# Development
npm run dev        # Both servers
npm run dev:server # Backend only (port 3001)
npm run dev:client # Frontend only (port 5173)

# Production
npm run build
npm run preview
```

---

## 📁 Project Structure

```
AV-News-Stream/
├── src/
│   ├── Components/         # NewsCard, Navbar, SearchBar
│   ├── pages/              # News, YTNews, Saved, About
│   └── utils/              # ApiKeyManager, DataFetch, hooks
├── server.js               # Express API proxy
├── vercel.json             # Deployment config
└── docs/                   # Technical documentation
```

---

## 📊 API Limit Management

| Service | Keys | Per Key | Total Capacity |
|---------|------|---------|----------------|
| NewsAPI | 3 | 100/day | **300/day** |
| GNews | 3 | 100/day | **300/day** |
| YouTube | 2 | 10,000 units | **20,000/day** |

**How limits are managed:** 10-min caching (90% reduction) + smart key rotation + 15-min cooldown on failures.

---

## 🐛 Quick Troubleshooting

| Issue | Solution |
|-------|----------|
| "All API keys exhausted" | Wait 15 min or check `/api/health` |
| Backend not starting | Verify `.env.local` exists, port 3001 free |
| No news loading | Confirm backend running, check console |

---

## 📖 Documentation

For comprehensive technical details including architecture diagrams, code deep-dives, and implementation specifics, see:

**→ [Full Technical Documentation](./docs/AV-NEWSSTREAM-TECHNICAL-DOCUMENTATION.md)**

---

## 👨‍💻 Author

**Aman Suryavanshi**

[![Portfolio](https://img.shields.io/badge/Portfolio-amansuryavanshi.me-4285F4?style=flat-square)](https://www.amansuryavanshi.me)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=flat-square)](https://www.linkedin.com/in/amansuryavanshi-ai/)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=flat-square)](https://github.com/AmanSuryavanshi-1)

---

## 📝 License

MIT License - see [LICENSE](LICENSE) for details.

---

**Made with 🤖 by Aman Suryavanshi**
