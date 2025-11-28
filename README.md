# JANUS Command Center PWA - Deployment Guide

## What's Included
- `index.html` - Main app (renamed from janus_v9.7)
- `manifest.json` - PWA configuration
- `sw.js` - Service worker for offline support
- `icon-*.png` - App icons in various sizes
- `icon.svg` - Source icon

## Quick Deploy to GitHub Pages (Free, 5 minutes)

### Step 1: Create GitHub Repository
1. Go to github.com and sign in
2. Click "+" → "New repository"
3. Name it `janus` (or anything you want)
4. Make it **Private** (for your use only)
5. Click "Create repository"

### Step 2: Upload Files
1. Click "uploading an existing file"
2. Drag all files from the ZIP into the upload area
3. Click "Commit changes"

### Step 3: Enable GitHub Pages
1. Go to repository "Settings"
2. Click "Pages" in left sidebar
3. Under "Source" select "main" branch
4. Click "Save"
5. Wait 1-2 minutes

### Step 4: Access Your App
- URL will be: `https://YOUR-USERNAME.github.io/janus/`
- Bookmark this on all devices

## Adding to iPhone Home Screen

1. Open the URL in Safari (must be Safari, not Chrome)
2. Tap the Share button (square with arrow)
3. Scroll down, tap "Add to Home Screen"
4. Name it "JANUS"
5. Tap "Add"

Now you have an app icon that opens JANUS full-screen!

## Adding to Android Home Screen

1. Open the URL in Chrome
2. Tap the three-dot menu
3. Tap "Add to Home Screen" or "Install App"
4. Confirm

## Alternative: Netlify Deploy (Also Free)

1. Go to netlify.com and sign up
2. Drag the entire unzipped folder onto the Netlify dashboard
3. Get your URL (e.g., `random-name-123.netlify.app`)
4. Optional: Set up custom domain or password protection

## Syncing Data Between Devices

Currently, each device has its own data (stored in browser).
To sync:
1. On device A: Settings → Export JSON
2. Transfer file (email, iCloud, Google Drive)
3. On device B: Settings → Import JSON

## Offline Usage

Once loaded, JANUS works offline! The service worker caches:
- The app itself
- Fonts and icons

API calls (prices, news, F&G) require internet.

## Updating the App

To update when I provide a new version:
1. Download new ZIP
2. Replace files in your GitHub repo (or re-upload to Netlify)
3. Clear browser cache or wait for service worker to update

---

Enjoy JANUS! 🎯
