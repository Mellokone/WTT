# Firebase Setup Guide

This guide connects Weekly Trade Tracker to Google sign-in and cloud sync.  
Everything is free within Firebase's Spark (free) plan.

---

## Step 1 — Create a Firebase project

1. Go to [https://console.firebase.google.com](https://console.firebase.google.com)
2. Click **Add project**
3. Enter a project name, e.g. `weekly-trade-tracker`
4. Disable Google Analytics (not needed) → click **Create project**

---

## Step 2 — Register a Web App

1. In your project dashboard, click the **`</>`** (Web) icon
2. Enter an app nickname, e.g. `WTT`
3. Leave "Firebase Hosting" unchecked
4. Click **Register app**
5. You will see a code block like this — **copy it**, you'll need it shortly:

```js
const firebaseConfig = {
  apiKey:            "AIzaSy...",
  authDomain:        "your-project.firebaseapp.com",
  projectId:         "your-project",
  storageBucket:     "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId:             "1:123456789:web:abc123"
};
```

---

## Step 3 — Enable Google Sign-In

1. In the left sidebar go to **Build → Authentication**
2. Click **Get started**
3. Under **Sign-in providers**, click **Google**
4. Toggle **Enable** → set a support email → click **Save**

---

## Step 4 — Create a Firestore database

1. In the left sidebar go to **Build → Firestore Database**
2. Click **Create database**
3. Choose **Start in production mode** → click **Next**
4. Pick a region close to you (e.g. `europe-west3`) → click **Enable**
5. Go to the **Rules** tab and replace the content with:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /wttUsers/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

6. Click **Publish**

> This rule ensures each user can only access their own data.

---

## Step 5 — Add your domain to Authorized Domains

1. Go to **Build → Authentication → Settings → Authorized domains**
2. Click **Add domain**
3. Enter your GitHub Pages domain: `YOUR_USERNAME.github.io`
4. Click **Add**

> Without this step, Google sign-in will be blocked.

---

## Step 6 — Create firebase-config.js

1. In the root of the project, copy the example file:
   ```
   cp firebase-config.example.js firebase-config.js
   ```
2. Open `firebase-config.js` and paste your credentials from Step 2:

```js
window.WTT_FIREBASE_CONFIG = {
  apiKey:            "AIzaSy...",
  authDomain:        "your-project.firebaseapp.com",
  projectId:         "your-project",
  storageBucket:     "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId:             "1:123456789:web:abc123"
};
```

3. Open `index.html` and uncomment this line (remove `<!--` and `-->`):
   ```html
   <!-- <script src="firebase-config.js"></script> -->
   ```
   So it becomes:
   ```html
   <script src="firebase-config.js"></script>
   ```

---

## Step 7 — Keep your keys safe

`firebase-config.js` is already listed in `.gitignore`, so it will **never be committed** to GitHub.

When deploying to GitHub Pages, you have two options:

**Option A — Simple (for personal use):**  
Manually upload `firebase-config.js` via the GitHub web interface after the initial commit.  
It won't be tracked by git but will be served by GitHub Pages.

**Option B — Proper (recommended):**  
Use a GitHub Actions secret + a build step to inject the config at deploy time.  
This is more advanced — ask for help if needed.

---

## Done!

Open the app, click **LOGIN** in the top bar, and sign in with your Google account.  
Your trade data will sync automatically every 7 seconds.
