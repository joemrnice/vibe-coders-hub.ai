# Vibe Coders Hub — Single-Page Community Website

> **Mantra:** Good Vibes. Clean Code. Limitless Impact.

Welcome to the official repository for **Vibe Coders Hub**, the ultimate single-page community hub for AI-powered creators, prompt engineers, and software builders.

---

## 🌟 Overview & Design Ethos

Vibe Coders Hub is designed as a high-performance, dark-mode-first static website built specifically for seamless hosting on **GitHub Pages**.

### Key Architectural Highlights:
- **Zero Heavy Frameworks:** Pure HTML5, modern CSS3 (Custom Properties & CSS Grid), and vanilla ES6 JavaScript.
- **Formspree Integration:** Genuinely wired contact form for static message processing without requiring a custom backend or Node server.
- **Responsive & Accessible:** Fully tested across screen sizes from 320px to 1920px+ with keyboard navigation, visible focus indicators, ARIA landmarks, and `@media (prefers-reduced-motion)` support.
- **Micro-Interactions:** Interactive terminal simulator on the hero section, active scroll Spy, and reveal-on-scroll card transitions using `IntersectionObserver`.

---

## 📂 Project Structure

```text
/
├── index.html                  # Main single-page document
├── README.md                   # Documentation & setup instructions
├── assets/
│   ├── favicon/
│   │   └── favicon.svg        # Custom VC vector favicon
│   └── images/
│       └── coders.jpg         # Community banner artwork
├── css/
│   └── style.css              # Custom CSS tokens, grid layouts, & glassmorphism
└── js/
    └── script.js              # Vanilla JS modules (Nav, Formspree, Animations)
```

---

## 📩 Formspree Configuration Instructions

The contact form in `index.html` uses [Formspree](https://formspree.io) to deliver visitor messages directly to your inbox without any server infrastructure.

### Step 1: Create a Formspree Endpoint
1. Sign up or log into [Formspree](https://formspree.io).
2. Click **"New Form"** and enter `Vibe Coders Hub Contact`.
3. Copy your unique Formspree Form ID (e.g. `f/xpwaokld` or `xpwaokld`).

### Step 2: Update `index.html`
Open `index.html` and locate line 324 (or search for `YOUR_FORM_ID`):

```html
<form class="contact-form" id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST" novalidate>
```

Replace `YOUR_FORM_ID` with your actual Formspree ID:

```html
<form class="contact-form" id="contact-form" action="https://formspree.io/f/xpwaokld" method="POST" novalidate>
```

> **Note:** The JavaScript in `js/script.js` uses progressive enhancement. If JavaScript is enabled, form submission will happen asynchronously via AJAX with smooth status messages. If JavaScript is disabled, native HTML form POST to Formspree will occur as a fallback.

---

## 🚀 GitHub Pages Deployment Guide

Follow these simple steps to deploy this website on GitHub Pages:

1. **Create a GitHub Repository:**
   - Go to [GitHub New Repository](https://github.com/new).
   - Name your repository (e.g. `vibe-coders-hub`).
   - Leave it public and do not initialize with a default README if you already have these local files.

2. **Push Project Files:**
   ```bash
   git init
   git add .
   git commit -m "feat: initial release of Vibe Coders Hub website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/vibe-coders-hub.git
   git push -u origin main
   ```

3. **Configure GitHub Pages:**
   - Go to your repository on GitHub.
   - Click **Settings** > **Pages** (under Code and automation).
   - Under **Build and deployment** > **Source**, select **Deploy from a branch**.
   - Select `main` branch and `/ (root)` folder.
   - Click **Save**.

4. **Access Your Live Website:**
   - After 1-2 minutes, GitHub will generate your live URL:
     `https://YOUR_USERNAME.github.io/vibe-coders-hub/`

---

## 🧪 Local Development & Verification

To run and preview the site locally without any build tools:

Using Python 3 built-in HTTP server:
```bash
python3 -m http.server 8000
```
Then open `http://localhost:8000` in your web browser.

---

## 📄 License

&copy; Vibe Coders Hub. All rights reserved. Open for community customization and deployment.
