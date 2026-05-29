# Portfolio Jad

Portfolio personnel — Créateur de contenu & UI/UX Designer.

## Stack
- HTML / CSS / Vanilla JS
- Zéro framework, zéro build step
- Déployable instantanément sur Netlify

## Structure
```
portfolio-jad/
├─ index.html       ← Accueil (hero vidéo + grille photos + about teaser)
├─ about.html       ← Qui suis-je ? (timeline chronologique)
├─ projects.html    ← Mes projets (cards avec vidéo en fond)
├─ style.css        ← Design system complet (tokens, composants)
├─ main.js          ← Navbar scroll + autoplay vidéo + animations
├─ netlify.toml     ← Config Netlify
└─ assets/          ← Mets ici tes vidéos et photos
    ├─ hero-reel.mp4
    ├─ about-reel.mp4
    ├─ projects-reel.mp4
    ├─ proj1.mp4 … proj4.mp4
    └─ (tes photos .jpg/.png)
```

## Déployer sur Netlify
1. [app.netlify.com](https://app.netlify.com) → **Add new site** → **Import from Git**
2. Sélectionne `zabre/portfolio-jad`
3. Publish directory : `.`  (déjà dans `netlify.toml`)
4. **Deploy site**

## Remplacer les placeholders
- Dépose tes vidéos dans `assets/` (MP4 optimisé, max ~8 Mo chacune)
- Remplace les `<div class="ph-img">` par `<img src="assets/ta-photo.jpg" />` dans chaque HTML
- Les fonts Rockness et MODERNIZ/Agrandir ne sont pas sur Google Fonts — remplace les `@import` par tes fichiers locaux dans `style.css`

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/zabre/portfolio-jad)
