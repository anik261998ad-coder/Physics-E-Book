# Physics 9-10 E-book: free PWA package

Everything is already wired up: offline support (sw.js), install manifest, icons,
and fonts bundled locally (no Google Fonts needed). Just upload this folder.

## 1. Host it for free (GitHub Pages) – about 5 minutes
1. Create a free account at github.com and click **New repository** (e.g. `physics-ebook`, Public).
2. Click **uploading an existing file**, drag in ALL files and folders from this package
   (index.html, sw.js, manifest.webmanifest, fonts/, icons/), then **Commit**.
3. Go to **Settings → Pages → Branch: main / (root) → Save**.
4. After a minute your app is live at `https://YOUR-NAME.github.io/physics-ebook/`.
   (Netlify Drop or Cloudflare Pages work the same way if you prefer.)

## 2. Install it on a phone
- **Android (Chrome):** open the link → menu ⋮ → **Install app**. It gets a home-screen icon,
  opens full screen, and works offline after the first visit.
- **iPhone (Safari):** open the link → Share → **Add to Home Screen**.

## 3. Optional: make a real Android APK (still free)
1. Go to https://www.pwabuilder.com and paste your live link.
2. Choose **Android → Generate package**. Download the zip; it contains an `.apk` you can share
   directly (Telegram, Facebook groups, Drive). Students must allow "install unknown apps".
3. For Google Play you need the .aab file from the same zip and a one-time $25 developer account.

## 4. Updating the book later
Replace index.html on GitHub, and change `VERSION = "v1"` to `"v2"` in sw.js so phones fetch the new copy.

## Good to know
- Student progress (quiz scores, XP, mistake notebook) is saved on each device and browser separately.
  Clearing browser data or uninstalling the app erases it.
- Fonts: Noto Sans Bengali (SIL Open Font License, see fonts/LICENSE-NotoSansBengali.txt).
- Test offline mode: open the app once online, then turn on airplane mode and reopen it.
