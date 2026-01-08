# Firebase Integration Setup Guide

This guide walks you through setting up Firebase for cloud sync with authentication.

## Prerequisites

- Node.js and npm installed
- A Firebase project created

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click **Create a new project**
3. Name it: `dnd-dm-screen` (or your preferred name)
4. Disable Google Analytics (optional)
5. Click **Create project**

## Step 2: Enable Authentication

1. In Firebase Console, go to **Authentication** > **Sign-in method**
2. Enable **Email/Password**:
   - Click the toggle to enable
   - Save
3. Enable **Google**:
   - Click the toggle to enable
   - You'll need to set up the OAuth consent screen:
     - Click **Configure Google Cloud Console**
     - Complete the OAuth consent screen (add your app details)
     - Return to Firebase and the Google provider should be enabled

## Step 3: Create Firestore Database

1. In Firebase Console, go to **Firestore Database**
2. Click **Create database**
3. Choose **Production mode**
4. Select your region (choose closest to you)
5. Click **Create**

## Step 4: Set Firestore Security Rules

1. In Firestore, go to **Rules** tab
2. Replace all rules with:

```firestore
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can only read/write their own data
    match /users/{userId} {
      allow read, write: if request.auth.uid == userId;
    }
  }
}
```

3. Click **Publish**

## Step 5: Get Firebase Configuration

1. In Firebase Console, click **Project Settings** (gear icon)
2. Under **Your apps**, click the web icon `</>`
3. Copy the config object (looks like below)
4. Create a `.env.local` file in your project root with:

```env
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

5. Replace the values with your actual Firebase config

## Step 6: Running the App

1. Install dependencies (if not already done):
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. The app should open at `http://localhost:5173/`

4. You'll see a login page. Sign up or log in with:
   - Email/password
   - Or Google account

## Step 7: Sync Configuration

The app is configured with:
- **Auto-sync interval**: 5 minutes
- **Smart sync**: Only syncs if data actually changed
- **Manual sync**: Click "Sync Now" button for immediate sync
- **Offline support**: App works offline and syncs when back online
- **Conflict resolution**: Last-write-wins

## Architecture Overview

```
src/
├── context/
│   ├── GameContext.tsx (game state + sync methods)
│   └── AuthContext.tsx (authentication logic)
├── services/
│   ├── firebase.ts (Firebase initialization)
│   └── syncManager.ts (auto-sync orchestration)
└── pages/
    └── LoginPage.tsx (login/signup UI)
```

## How Sync Works

1. **Automatic Sync (every 5 minutes)**:
   - Checks if game state has changed
   - If changed, uploads to Firestore
   - Shows sync status indicator

2. **Manual Sync**:
   - Click "Sync Now" button
   - Immediately uploads to Firestore

3. **Offline Mode**:
   - App works fully offline
   - Changes stored in localStorage
   - Auto-syncs when back online

4. **Conflict Resolution**:
   - Last-write-wins: Remote data overwrites local if newer
   - Timestamps track when each change happened

## Quota Usage Estimate

**Monthly usage** (1 user, 1 campaign):
- Writes: ~600-1500 (well under 20,000 limit)
- Reads: ~750-1800 (well under 50,000 limit)
- Storage: <100MB (under 1GB limit)

**Result**: Free tier covers typical usage!

## Troubleshooting

### "Firebase config is missing"
- Make sure `.env.local` file exists with all required variables
- Restart dev server after updating `.env.local`

### "Cannot sign in"
- Check that Email/Password auth is enabled in Firebase
- For Google login, ensure OAuth consent screen is configured

### "Data not syncing"
- Check browser console for errors
- Ensure Firestore security rules are published
- Check that you're logged in (see email at top)

### "Offline not working"
- Browser must support IndexedDB (all modern browsers do)
- Private/Incognito windows may not support persistence

## Next Steps

1. Test on multiple devices:
   - Log in on Device A
   - Make changes to encounter
   - Wait for auto-sync (5 min) or click "Sync Now"
   - Check data on Device B (should update)

2. Test offline:
   - Go offline (disconnect internet)
   - Make changes
   - Go online
   - Changes should sync automatically

3. Monitor Firebase quota:
   - Go to Firebase Console > Usage tab
   - Watch for unexpected spikes

## Support

For issues or questions, check:
- Browser console (F12) for error messages
- Firebase documentation: https://firebase.google.com/docs
- React docs: https://react.dev
