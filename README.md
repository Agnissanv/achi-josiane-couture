# Achi Josiane — Atelier de Couture

Site vitrine haut de gamme pour l'atelier de couture d'Achi Josiane, Marcory – Abidjan.

## Stack Technique

- **React 18** + **Vite 5**
- **Tailwind CSS** (stylage Afro-Luxe)
- **Framer Motion** (animations de luxe)
- **React Router v6** (HashRouter pour GitHub Pages)
- **Lucide React** (icônes)
- WhatsApp API (`wa.me`) — zéro backend

---

## Démarrage rapide

```bash
# 1. Installer les dépendances
npm install

# 2. Démarrer en développement
npm run dev

# 3. Build de production
npm run build

# 4. Prévisualiser le build
npm run preview
```

---

## ⚙️ Configuration importante

### 1. Numéro WhatsApp

Dans **`src/pages/Contact.jsx`** et **`src/components/Footer.jsx`**, remplacez :

```js
const WA_NUMBER = '2250700000000'
```

Par le vrai numéro au format international sans `+` ni espaces :
- `225` = indicatif Côte d'Ivoire
- suivi des 10 chiffres du numéro

Exemple : `+225 07 58 12 34 56` → `2250758123456`

### 2. Lien Instagram

Dans `Footer.jsx`, remplacez `https://instagram.com` par le vrai profil Instagram.

### 3. Images

Toutes les images utilisent Unsplash (mode africaine). Pour utiliser vos vraies photos :
1. Placez vos images dans `/public/images/`
2. Remplacez les URLs Unsplash par `./images/votre-photo.jpg`

---

## 🚀 Déploiement GitHub Pages

```bash
# 1. Build
npm run build

# 2. Pusher le dossier dist/ sur GitHub
# Puis activer GitHub Pages → Source: "dist" branch ou dossier
```

Ou avec `gh-pages` automatique :

```bash
npm install --save-dev gh-pages
```

Ajoutez dans `package.json` :
```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```

Puis :
```bash
npm run deploy
```

---

## 📂 Structure des fichiers

```
achi-josiane/
├── index.html              # Point d'entrée HTML + Google Fonts
├── vite.config.js          # Config Vite (base: './')
├── tailwind.config.js      # Palette Afro-Luxe
├── favicon.svg
├── src/
│   ├── main.jsx
│   ├── App.jsx             # Router + AnimatePresence + Grain overlay
│   ├── index.css           # Variables CSS, grain, boutons, animations
│   ├── components/
│   │   ├── Navbar.jsx      # Navigation + menu mobile circulaire
│   │   ├── Footer.jsx      # Pied de page Afro-Luxe
│   │   └── Motion.jsx      # Composants Reveal, StaggerContainer, PageTransition
│   └── pages/
│       ├── Home.jsx        # Accueil: Hero parallax + Valeurs + Teaser
│       ├── Lookbook.jsx    # Grille masonry + filtres + lightbox
│       ├── About.jsx       # Storytelling + Process + Stats
│       └── Contact.jsx     # Formulaire WhatsApp + FAQ + Infos
```

---

## 🎨 Charte graphique

| Token          | Valeur      | Usage                    |
|----------------|-------------|--------------------------|
| `sable`        | `#F7F3EC`   | Fond principal           |
| `sable2`       | `#EDE8DE`   | Fond secondaire          |
| `cream`        | `#FAF8F4`   | Cards, surfaces          |
| `ocre`         | `#8B5E3C`   | Accent principal         |
| `or`           | `#C4973A`   | Accent or / détails      |
| `ebene`        | `#1A1208`   | Texte principal          |
| `ebene-light`  | `#3D2B1A`   | Texte secondaire         |

**Typographies :**
- Titres : `Cormorant Garamond` (italic, légère)
- Sous-titres : `Playfair Display`
- Corps : `DM Sans` (300–500)

---

## 📱 Mobile-first

Toutes les pages sont conçues Mobile-first :
- Menu hamburger avec animation clip-path circulaire
- Images optimisées (lazy loading)
- Typographie fluide (clamp)
- Touch-friendly (cibles min. 44px)

---

Fait avec ❤️ à Abidjan 🇨🇮



1. npm run dev        → le site se rafraîchit automatiquement à chaque sauvegarde
2. Tu modifies un fichier → tu sauvegardes (Ctrl+S) → tu vois le résultat instantanément
3. npm run build      → quand tu es prêt à mettre en ligne