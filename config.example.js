// Configuration Template for Alphadip Tracker
// Copy this file to config.js and fill in your actual credentials
// NEVER commit config.js to version control!

window.ALPHADIP_CONFIG = {
    // Google Sheets Configuration
    // Get your API key from: https://console.cloud.google.com/apis/credentials
    GOOGLE_API_KEY: 'YOUR_GOOGLE_API_KEY_HERE',

    // Your Google Sheets ID (found in the spreadsheet URL)
    // Example: https://docs.google.com/spreadsheets/d/{SHEETS_ID}/edit
    GOOGLE_SHEETS_ID: 'YOUR_GOOGLE_SHEETS_ID_HERE',

    // Your deployed Google Apps Script URL
    // Deploy from: https://script.google.com/
    APPS_SCRIPT_URL: 'YOUR_APPS_SCRIPT_URL_HERE'
};

// Security Notes:
// 1. Restrict your API key in Google Cloud Console to:
//    - HTTP referrers (your domain only)
//    - Google Sheets API only
//    - Set daily quota limits
// 2. Keep config.js in .gitignore
// 3. Never share your API credentials publicly
