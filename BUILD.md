# Building myfirst_app

This app was made in **Expo Snack** in December 2022, on **Expo SDK 46** (React Native 0.69, React 18.0). This guide explains how to run and build it today, without upgrading the code.

| Target | How | Status |
|---|---|---|
| Web (dev server) | `npm run web` | ✅ tested on 2026-11-23 |
| Web (static build) | `npx expo export:web` → `web-build/` | ✅ tested on 2026-11-23 (used for the README screenshots) |
| Android APK / iOS | EAS Build, or a local native build | ⚠️ not tested here, see the notes below |

---

## 1. Requirements

- **Node.js**: SDK 46 was made for Node 14–18. Node 18 LTS works best. Newer Node works too (tested on Node 24) with one extra flag for the web build (see step 4).
- **npm** (comes with Node)
- **Git**

```bash
git clone https://github.com/Muhammad-Usman-911/myfirst_app.git
cd myfirst_app
```

## 2. Install dependencies

```bash
npm install
```

## 3. Add the web packages (one time)

The Snack export has no web packages. Install the versions that match SDK 46:

```bash
npx expo install react-native-web@~0.18.7 react-dom@18.0.0 @expo/webpack-config@^0.17.0
```

> `npx expo install` picks versions that work with the installed Expo SDK and adds them to `package.json`.

## 4. Run it

```bash
npm start        # Expo dev server (opens a QR code + menu)
npm run web      # opens the app in the browser
```

**On Node 17 or newer**, the old webpack 4 that SDK 46 uses fails with `error:0308010C:digital envelope routines::unsupported`. Turn on the legacy OpenSSL provider:

```bash
# Linux / macOS
NODE_OPTIONS=--openssl-legacy-provider npm run web

# Windows PowerShell
$env:NODE_OPTIONS="--openssl-legacy-provider"; npm run web
```

The app was designed for a phone screen. In the browser, open DevTools and switch to a phone view (for example iPhone 12, 390 × 844).

## 5. Build for the web (static files)

```bash
NODE_OPTIONS=--openssl-legacy-provider npx expo export:web
```

The output is in **`web-build/`** (git-ignored). Any static host can serve it:

```bash
npx serve web-build            # check it locally
```

- **Vercel**: build command `npx expo export:web`, output directory `web-build`, and the env var `NODE_OPTIONS=--openssl-legacy-provider`.
- **Netlify**: the same build command and env var, publish directory `web-build`.
- **GitHub Pages**: push the contents of `web-build/` to a `gh-pages` branch.

## 6. Build for Android / iOS

The classic `expo build:android` service was shut down. Use **EAS Build** instead.

```bash
npm install -g eas-cli
eas login                 # free Expo account
eas build:configure       # creates eas.json
```

To get an installable **APK** (not a Play Store bundle), add a `preview` profile to `eas.json`:

```json
{
  "build": {
    "preview": {
      "android": { "buildType": "apk" }
    },
    "production": {}
  }
}
```

```bash
eas build -p android --profile preview      # APK to install on a phone
eas build -p android --profile production   # AAB for Google Play
eas build -p ios                            # needs an Apple Developer account
```

Also set real identifiers in `app.json` before a store build, for example:

```json
"android": { "package": "com.muhammadusman.myfirstapp" },
"ios": { "bundleIdentifier": "com.muhammadusman.myfirstapp" }
```

### Local native build (no Expo servers)

```bash
npx expo prebuild          # creates android/ and ios/
cd android && ./gradlew assembleRelease
# APK: android/app/build/outputs/apk/release/app-release.apk
```

This needs the Android SDK + JDK (and Xcode on a Mac for iOS).

## 7. Things to know about SDK 46

- **Expo Go:** the current Expo Go app on the stores only opens the newest SDKs, so it can't open an SDK 46 project. To use Expo Go on a phone, upgrade first (`npx expo install expo@latest --fix`, then fix any breaking changes), or use a development build from EAS.
- **EAS:** EAS Build images for very old SDKs may be retired. If an SDK 46 build fails on EAS, upgrading the SDK is the fix.
- **Web-first styles:** the app uses web units like `vh` and `position: 'fixed'` (it was built and tested in Snack's web preview). It looks best on the web. On a native phone, some boxes may sit in slightly different places.
- **Background image:** the home wallpaper loads from `w0.peakpx.com`, and that host no longer resolves. The app falls back to a dark navy background, so it still works and looks fine without it.

## Troubleshooting

| Problem | Fix |
|---|---|
| `error:0308010C:digital envelope routines::unsupported` | Set `NODE_OPTIONS=--openssl-legacy-provider` (step 4), or use Node 16/18 |
| `It looks like you're trying to use web support but don't have the required dependencies installed` | Run the `npx expo install ...` command in step 3 |
| `ERESOLVE unable to resolve dependency tree` | `npm install --legacy-peer-deps` |
| Port 19006 is already in use | `npx expo start --web --port 19007` |
| Expo Go says the project is incompatible | See "Expo Go" in section 7 |
