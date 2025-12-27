# Alphadip Tracker 📈

A powerful single-page application for tracking stock dips and insider trading alerts with real-time price updates and AI-powered analysis.

## ✨ Features

- **Dip Tracker**: Compare data sets to identify common tickers and track buy-the-dip opportunities
- **Insider Tracker**: Monitor insider buy signals from CEO Watcher alerts
- **Real-time Pricing**: Automatic price updates via Google Sheets API
- **AI Analysis**: Grok-powered company analysis with buy/sell recommendations
- **Data Persistence**: Google Sheets backend for reliable data storage
- **Export Functionality**: CSV export for further analysis

## 🔒 Security First Setup

### Step 1: Clone and Setup Configuration

```bash
# Clone the repository
git clone <your-repo-url>
cd Alphadip

# Copy the example configuration
cp config.example.js config.js
```

### Step 2: Configure Your API Credentials

Edit `config.js` and add your credentials:

```javascript
window.ALPHADIP_CONFIG = {
    GOOGLE_API_KEY: 'your-actual-api-key',
    GOOGLE_SHEETS_ID: 'your-sheets-id',
    APPS_SCRIPT_URL: 'your-apps-script-url'
};
```

**⚠️ CRITICAL:** Never commit `config.js` to version control! It's already in `.gitignore`.

### Step 3: Set Up Google Cloud API

1. **Create a Google Cloud Project**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select existing one

2. **Enable Google Sheets API**
   - Navigate to "APIs & Services" > "Library"
   - Search for "Google Sheets API"
   - Click "Enable"

3. **Create API Credentials**
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "API Key"
   - Copy the API key to your `config.js`

4. **🔐 Restrict Your API Key** (CRITICAL!)
   - Click "Edit API Key" (pencil icon)
   - Under "Application restrictions":
     - Select "HTTP referrers"
     - Add your domain: `https://yourdomain.com/*`
     - For local testing: `http://localhost/*`
   - Under "API restrictions":
     - Select "Restrict key"
     - Only select "Google Sheets API"
   - Click "Save"

5. **Set Quota Limits** (Recommended)
   - Go to "APIs & Services" > "Quotas"
   - Set reasonable daily limits to prevent abuse

### Step 4: Set Up Google Sheets

1. **Create a Google Sheet** with the following tabs:
   - `Sheet1` - For dip tracker data
   - `InsiderTrades` - For insider trading data
   - `GrokAnalysis` - For cached AI analysis

2. **Share Settings**
   - Make the sheet accessible to anyone with the link (read-only)
   - Or use service account authentication for better security

3. **Copy the Sheets ID**
   - From URL: `https://docs.google.com/spreadsheets/d/{SHEETS_ID}/edit`
   - Add to `config.js`

### Step 5: Deploy Google Apps Script

1. **Create Apps Script**
   - From your Google Sheet: Extensions > Apps Script
   - Copy your backend script (if you have one)
   - Deploy as Web App

2. **Configure Deployment**
   - Click "Deploy" > "New deployment"
   - Select type: "Web app"
   - Execute as: "Me"
   - Who has access: "Anyone" (or as needed)
   - Copy the deployment URL to `config.js`

## 🚀 Deployment

### Local Testing

Simply open `index.html` in a web browser:

```bash
# Option 1: Direct file open
open index.html

# Option 2: Simple HTTP server
python3 -m http.server 8000
# Then visit: http://localhost:8000
```

### Production Deployment

Deploy to any static hosting service:

- **GitHub Pages**: Push to gh-pages branch
- **Netlify**: Connect your repository
- **Vercel**: Import project
- **Cloudflare Pages**: Connect via dashboard

**Important:** Make sure to configure API key restrictions for your production domain!

## 📁 File Structure

```
Alphadip/
├── index.html              # Main application file
├── config.js              # Your credentials (NEVER commit!)
├── config.example.js      # Template for configuration
├── .gitignore            # Prevents committing sensitive files
├── README.md             # This file
└── backups/              # Backup files (not committed)
    └── index.html.backup-*
```

## 🔐 Security Best Practices

### ✅ DO:
- Keep `config.js` in `.gitignore`
- Restrict API keys to specific domains
- Set quota limits on your API keys
- Regularly rotate API credentials
- Use HTTPS for production deployment
- Monitor API usage in Google Cloud Console

### ❌ DON'T:
- Commit `config.js` to version control
- Share API keys publicly
- Use unrestricted API keys
- Expose credentials in client-side code (except via config.js)
- Skip API key restrictions

## 🛡️ Security Audit Results

Based on the latest security audit:

| Category | Score | Notes |
|----------|-------|-------|
| Dependencies | 9/10 | Minimal external dependencies |
| Security | 8/10 | ✅ Credentials externalized |
| Code Bloat | 7/10 | Self-contained, could minify |
| Maintainability | 8/10 | Clean vanilla JavaScript |

**Previous Critical Issue (RESOLVED):**
- ~~Exposed API credentials in source code~~ ✅ **FIXED** - Now using external config

## 🔄 Backup and Recovery

Backups are automatically created in the `backups/` directory when you make changes.

To restore from backup:

```bash
cp backups/index.html.backup-YYYYMMDD-HHMMSS index.html
```

## 📊 Data Schema

### Sheet1 (Dip Tracker)
| Column | Description |
|--------|-------------|
| id | Unique identifier |
| date | Entry date |
| ticker | Stock ticker symbol |
| companyName | Company name |
| price | Original price |
| currentPrice | Current price |

### InsiderTrades (Insider Tracker)
| Column | Description |
|--------|-------------|
| id | Unique identifier |
| date | Alert date |
| ticker | Stock ticker symbol |
| companyName | Company name |
| news | News/reason |
| insider | Insider type |
| amount | Transaction amount |
| alertPrice | Price at alert |
| currentPrice | Current price |

### GrokAnalysis (AI Cache)
| Column | Description |
|--------|-------------|
| ticker | Stock ticker symbol |
| grokSector | Industry sector |
| grokWhatItDoes | Company description |
| grokBottomLine | Analysis summary |
| grokBuyTheDip | Buy recommendation |
| lastUpdated | Cache timestamp |

## 🐛 Troubleshooting

### "Configuration file not loaded"
- Make sure `config.js` exists (copy from `config.example.js`)
- Check that `config.js` is in the same directory as `index.html`

### "API key is invalid"
- Verify API key is correct in `config.js`
- Check that Google Sheets API is enabled
- Ensure API key restrictions aren't blocking your domain

### "Failed to load sheet data"
- Verify Google Sheets ID is correct
- Check sheet sharing permissions
- Ensure sheet has the correct tab names

### CORS Errors
- Make sure you're accessing via HTTP/HTTPS (not file://)
- Check API key domain restrictions
- Verify Apps Script deployment settings

## 🔧 Future Enhancements

- [ ] Add build process for minification
- [ ] Implement service worker for offline support
- [ ] Add Content Security Policy headers
- [ ] Create automated backup system
- [ ] Add data validation and error boundaries
- [ ] Implement retry logic with exponential backoff
- [ ] Add user authentication layer

## 📝 Changelog

### 2025-12-27 - Security Update v1.1
- ✅ Externalized API credentials to `config.js`
- ✅ Added `.gitignore` to prevent credential leaks
- ✅ Created configuration validation
- ✅ Added comprehensive security documentation
- ✅ Implemented backup system

### Previous - v1.0
- Initial release with inline credentials

## 📄 License

[Your License Here]

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. **Never commit `config.js`**
5. Submit a pull request

## 📞 Support

For issues and questions:
- Check the troubleshooting section
- Review security audit recommendations
- Verify API key restrictions in Google Cloud Console

---

**⚠️ Remember:** Always keep your `config.js` file private and never commit it to version control!
