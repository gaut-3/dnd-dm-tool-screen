# GitHub Actions & Firebase Hosting Deployment Guide

This guide walks you through setting up automatic deployment to Firebase Hosting via GitHub Actions.

## Prerequisites

- GitHub repository (public or private)
- Firebase project already created (see `FIREBASE_SETUP.md`)
- Firebase Hosting enabled (done automatically when you create a project)

## Step 1: Generate Firebase Service Account Key

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Go to **Project Settings** (gear icon) > **Service Accounts**
4. Click **Generate New Private Key**
5. A JSON file will download (keep this safe!)
6. Open the JSON file and copy the entire content

## Step 2: Add GitHub Secrets

You need to add secrets to your GitHub repository for the deployment workflow:

### Add Firebase Service Account Key

1. Go to your GitHub repository
2. Click **Settings** > **Secrets and variables** > **Actions**
3. Click **New repository secret**
4. Name: `FIREBASE_SERVICE_ACCOUNT_KEY`
5. Value: Paste the entire Firebase service account JSON (from Step 1)
6. Click **Add secret**

### Add Firebase Configuration Secrets

Create these secrets with your Firebase config values:

| Secret Name | Value |
|-------------|-------|
| `FIREBASE_API_KEY` | Your Firebase API Key |
| `FIREBASE_AUTH_DOMAIN` | `your-project.firebaseapp.com` |
| `FIREBASE_PROJECT_ID` | Your Firebase Project ID |
| `FIREBASE_STORAGE_BUCKET` | `your-project.appspot.com` |
| `FIREBASE_MESSAGING_SENDER_ID` | Your Messaging Sender ID |
| `FIREBASE_APP_ID` | Your Firebase App ID |

**How to find these values**:
1. Go to Firebase Console > Project Settings
2. Under "Your apps", click the web app
3. Copy the config values

## Step 3: Verify Workflow Files

The following files should already be in your repo:

- `.github/workflows/firebase-deploy.yml` - The deployment workflow
- `firebase.json` - Firebase hosting configuration

Check that these exist in your repository.

## Step 4: Initialize Firebase Hosting (Local)

Run this once locally to associate your project:

```bash
npm install -g firebase-tools
firebase login
firebase init hosting
```

When prompted:
- **What do you want to use as your public directory?** → `dist`
- **Configure as a single-page app?** → `Yes`
- **Set up automatic builds?** → `No` (GitHub Actions will do this)

This creates/updates `firebase.json` (already included in repo).

## Step 5: Push to GitHub

1. Make sure you're in your GitHub repository
2. Add the workflow and config files:
   ```bash
   git add .github/workflows/firebase-deploy.yml firebase.json
   git commit -m "Add GitHub Actions deployment workflow"
   git push origin main
   ```

3. Go to GitHub repository > **Actions** tab
4. You should see the workflow running
5. Wait for it to complete

## Step 6: Verify Deployment

After the workflow completes:

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Go to **Hosting**
4. You should see your app deployed!
5. Click the deployment URL to open your live app

## How the Workflow Works

### On Every Push to Main:
1. **Checkout code** - Downloads your repository
2. **Setup Node.js** - Installs Node 18.x
3. **Install dependencies** - Runs `npm ci`
4. **Run linter** - Validates code quality
5. **Build** - Runs `npm run build`
6. **Deploy** - Uploads to Firebase Hosting

### On Pull Requests:
1. Runs all tests and builds
2. Creates a **preview deployment** (unique URL)
3. Posts link as comment on PR
4. Does NOT deploy to production

### Build Environment:
- Node.js 18.x
- Ubuntu latest
- Firebase config injected from GitHub Secrets
- Automatic caching for faster builds

## Firebase Hosting Features

Your app gets:
- ✅ Global CDN (fast worldwide access)
- ✅ Free SSL/HTTPS
- ✅ Automatic deployments on every commit
- ✅ Preview URLs for pull requests
- ✅ Version history (rollback to previous deployments)
- ✅ Custom domain support
- ✅ Automatic compression (Gzip, Brotli)
- ✅ Cache optimization (separate for HTML and assets)

## Deployment URLs

After first deployment, your app will be at:
```
https://your-project-id.web.app
https://your-project-id.firebaseapp.com
```

You can also set up a custom domain in Firebase Console > Hosting > Custom Domains.

## Monitoring Deployments

### In GitHub:
- Go to **Actions** tab in your repository
- See all workflow runs
- Click a run to see detailed logs
- See which commits were deployed

### In Firebase:
- Go to **Hosting** in Firebase Console
- See deployment history
- View each deployment's details
- Rollback to previous versions if needed

## Environment Variables

The workflow automatically injects Firebase config from GitHub Secrets:

```yaml
env:
  VITE_FIREBASE_API_KEY: ${{ secrets.FIREBASE_API_KEY }}
  VITE_FIREBASE_AUTH_DOMAIN: ${{ secrets.FIREBASE_AUTH_DOMAIN }}
  # ... etc
```

These are used during the build process (`npm run build`) and never committed to the repo.

## Troubleshooting

### Workflow Fails with "Build failed"
- Check build logs in GitHub Actions
- Verify all secrets are set correctly
- Make sure `npm run build` works locally

### Deployment Fails with "Authentication error"
- Verify `FIREBASE_SERVICE_ACCOUNT_KEY` secret is set
- Make sure the service account JSON is complete and valid
- Check the secret isn't truncated

### Changes not showing up
- The workflow only deploys from `main` branch
- Check that your commit was pushed to `main`
- Wait for the workflow to complete (check Actions tab)
- Clear your browser cache (or hard refresh)

### Preview URLs in PR not working
- Make sure the workflow completed successfully
- Check that secrets are set
- Look for deployment link in workflow logs

## Customization

### Deploy Only on Tags:

Change the workflow trigger:
```yaml
on:
  push:
    tags:
      - 'v*'
```

### Deploy to Multiple Environments:

Create separate workflows for staging and production with different branch triggers and target names.

### Disable Preview Deployments:

Remove the "Preview deploy" job or set `if: false`.

## Security Best Practices

1. **Service Account Key**:
   - Store only as GitHub Secret
   - Never commit to repository
   - Rotate periodically in Firebase Console

2. **GitHub Secrets**:
   - Use strong, unique values
   - Rotate if accidentally exposed
   - Limit access to trusted collaborators

3. **Firebase Rules**:
   - Keep Firestore rules restrictive (done in FIREBASE_SETUP.md)
   - Review rules before deployment

4. **Deployment History**:
   - Review who can deploy (collaborators on GitHub)
   - Keep audit trail (GitHub Actions logs)

## Cost Implications

**Firebase Hosting Free Tier**:
- 10 GB storage
- 360 MB/day bandwidth
- Unlimited deployments
- Perfect for hobby projects!

**If you exceed:**
- Storage: $0.18 per GB/month
- Bandwidth: $0.15 per GB/month

Most personal projects stay well under limits.

## Next Steps

1. Set up GitHub Secrets (Step 2)
2. Push to main branch
3. Monitor first deployment in Actions tab
4. Visit your live app!

## Support & Resources

- [Firebase Hosting Docs](https://firebase.google.com/docs/hosting)
- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [Firebase Deploy Action](https://github.com/FirebaseExtended/action-hosting-deploy)

---

**Note**: The first deployment may take 2-5 minutes. Subsequent deployments are usually faster due to caching.
