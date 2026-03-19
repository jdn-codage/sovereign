# SOVEREIGN Esport — Site Web

Site vitrine officiel de l'organisation esport **SOVEREIGN**.  
Stack : HTML5 · CSS3 · JavaScript vanilla (aucune dépendance).

---

## 📁 Structure du projet

```
sovereign/
├── index.html                  ← Page principale
├── css/
│   └── style.css               ← Tous les styles (variables, composants, responsive)
├── js/
│   └── main.js                 ← Nav scroll, filtre de jeux, scroll reveal
├── pages/
│   ├── valorant.html           ← Page équipe Valorant
│   ├── lol.html                ← Page équipe League of Legends
│   ├── cs2.html                ← Page équipe Counter-Strike 2
│   └── mentions-legales.html   ← Mentions légales
└── assets/
    └── images/
        ├── logo.png             ← Logo Sovereign
        └── players/             ← Dossier pour les photos des joueurs (à ajouter)
```

---

## 🚀 Démarrage rapide

1. Ouvrir le dossier dans **VS Code**
2. Installer l'extension **Live Server** (ritwickdey.LiveServer)
3. Clic droit sur `index.html` → **Open with Live Server**

Ou simplement ouvrir `index.html` directement dans votre navigateur.

---

## ✏️ Personnalisation

### Couleurs
Toutes les couleurs sont définies dans `css/style.css` sous forme de variables CSS :

```css
:root {
  --black:    #000000;
  --white:    #ffffff;
  --purple:   #1c0047;   /* Couleur principale */
  --purple-l: #2d0070;   /* Variante plus claire */
}
```

### Liens sociaux
Remplacer les placeholders `VOTRE_LIEN` / `VOTRE_CHAINE` dans `index.html` :

```html
<!-- Chercher et remplacer : -->
https://discord.gg/VOTRE_LIEN
https://twitch.tv/VOTRE_CHAINE
https://youtube.com/@VOTRE_CHAINE
https://tiktok.com/@VOTRE_COMPTE
```

### Joueurs
Dans `index.html`, chaque joueur suit ce schéma :

```html
<div class="player-card">
  <!-- Option A : initiales (placeholder) -->
  <div class="player-silhouette">
    <div class="player-initials">XX</div>
  </div>

  <!-- Option B : vraie photo -->
  <!-- <img src="assets/images/players/nom-joueur.png" alt="Pseudo"> -->

  <div class="player-info">
    <div class="player-flag-role">
      <span class="p-flag">🇫🇷</span>
      <span class="p-role">Rôle</span>
    </div>
    <div class="p-pseudo">PSEUDO</div>
    <div class="p-realname">Prénom Nom</div>
  </div>
</div>
```

**Pour ajouter une photo joueur :**
1. Déposer l'image dans `assets/images/players/`
2. Format recommandé : 400×600 px, PNG avec fond transparent ou fond sombre
3. Remplacer le bloc `<div class="player-silhouette">` par `<img src="assets/images/players/nom.png" alt="Pseudo">`

### Ajouter un jeu / une équipe
1. Ajouter un bouton dans le filtre (`index.html`) :
```html
<button class="filter-btn" data-game="fortnite">Fortnite</button>
```
2. Dupliquer un bloc `.game-block` et changer `data-game="fortnite"`
3. Dupliquer une page dans `pages/` (ex: `pages/fortnite.html`)

### Sponsors
Remplacer les slots vides par vos vrais logos :
```html
<!-- Slot vide -->
<div class="sponsor-slot">...</div>

<!-- Avec logo -->
<div class="sponsor-slot" style="background: white;">
  <img src="assets/images/sponsors/nom-sponsor.png" alt="Sponsor" style="max-height:60px; max-width:80%;">
</div>
```

---

## 🌐 Mise en ligne (GitHub Pages)

1. Créer un repository GitHub (ex: `sovereign-website`)
2. Pousser tous les fichiers :
```bash
git init
git add .
git commit -m "init: site sovereign"
git remote add origin https://github.com/TON_USER/sovereign-website.git
git push -u origin main
```
3. Aller dans **Settings → Pages → Source : main branch → Save**
4. Le site sera disponible sur `https://TON_USER.github.io/sovereign-website/`

---

## 📦 Déploiement (Netlify / Vercel)

**Netlify (drag & drop) :**
1. Aller sur [netlify.com](https://netlify.com)
2. Glisser-déposer le dossier `sovereign/` sur le dashboard
3. C'est en ligne en 30 secondes ✅

**Vercel :**
```bash
npm i -g vercel
vercel
```

---

## 📝 Contact
Pour toute question sur le site : **contact@sovereign-esport.fr**
