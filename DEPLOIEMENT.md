# Guide de déploiement

## ⚠️ IMPORTANT : Que déployer ?

Votre site est un **projet Vite statique**. Vous devez **UNIQUEMENT déployer le contenu du dossier `dist/`**, pas la racine du projet.

## Étapes de déploiement

### 1. Générer les fichiers de production

```bash
npm run build
```

Cette commande crée/met à jour le dossier `dist/` avec tous les fichiers optimisés.

### 2. Déployer selon votre hébergeur

#### Option A : Hébergement à la racine du domaine (ex: www.monsite.com)

**Fichiers à uploader :**
- Tout le contenu du dossier `dist/` → à la racine de votre hébergeur
- Soit : `dist/index.html`, `dist/assets/`, `dist/logo.svg`, etc.

**Configuration :** Aucune modification nécessaire (déjà configuré avec `base: '/'`)

#### Option B : Hébergement dans un sous-dossier (ex: www.monsite.com/auxbois/)

**Fichiers à uploader :**
- Tout le contenu du dossier `dist/` → dans votre sous-dossier

**Configuration requise :**

1. Éditez `vite.config.js` ligne 6 :
```javascript
// Décommentez et modifiez :
base: '/auxbois/', // Remplacez par le nom de votre sous-dossier
```

2. Rebuild :
```bash
npm run build
```

3. Uploadez le nouveau contenu de `dist/`

## Vérification des liens

Après le build, les fichiers HTML dans `dist/` doivent contenir :

```html
<link rel="stylesheet" href="/assets/main-ZWcMhtI6.css">
<script src="/assets/main-Hx9ZLqqq.js"></script>
```

Si vous voyez ces chemins, c'est correct !

## Problèmes fréquents

### ❌ Le CSS ne se charge pas (HTML brut)

**Causes possibles :**
1. Vous avez uploadé les fichiers sources au lieu du dossier `dist/`
2. Le `base` dans `vite.config.js` ne correspond pas à votre URL
3. Votre hébergeur ne pointe pas vers le bon dossier

**Solution :**
- Vérifiez que vous uploadez `dist/index.html` (pas `index.html` de la racine)
- Vérifiez l'URL de votre site et ajustez `base` si nécessaire
- Vérifiez que les chemins `/assets/` sont accessibles

### ❌ Les images ne s'affichent pas

**Solution :**
- Assurez-vous que `dist/photo_accueil.jpg` existe
- Vérifiez que tous les fichiers de `public/` sont copiés dans `dist/`

## Hébergeurs populaires

### Netlify / Vercel
Ces plateformes buildent automatiquement. Configuration dans leur interface :
- **Build Command:** `npm run build`
- **Publish Directory:** `dist`

### FTP classique (OVH, O2Switch, etc.)
1. `npm run build` sur votre ordinateur
2. Uploadez TOUT le contenu de `dist/` via FileZilla/FTP
3. Placez les fichiers dans `public_html/` ou `www/`

### cPanel
1. `npm run build`
2. Compressez le dossier `dist/` en ZIP
3. Uploadez via le File Manager de cPanel
4. Décompressez dans le bon dossier
5. Déplacez le contenu de `dist/` à la racine (pas le dossier lui-même)

## Structure du dossier dist/ déployé

```
dist/
├── index.html
├── a-propos.html
├── nos-services.html
├── nos-projets.html
├── boutique.html
├── blog.html
├── contact.html
├── mentions-legales.html
├── photo_accueil.jpg
├── logo.svg
├── vite.svg
└── assets/
    ├── main-ZWcMhtI6.css
    └── main-Hx9ZLqqq.js
```

## Support HTTPS / HTTP (Mixed Content)

✅ Les assets utilisent des chemins relatifs, donc aucun problème de mixed content.
✅ Les images externes (Unsplash) utilisent déjà HTTPS.

---

## Note importante sur Twig/Symfony

Ce projet **N'EST PAS** un projet Twig/Symfony. C'est un site statique HTML/CSS/JS généré par Vite.

Il n'y a **PAS** de :
- Fichiers `.twig`
- Fonction `{{ asset() }}`
- Fichier `config.yaml`
- Dossier `public/theme/`

Si vous souhaitez migrer vers Symfony/Twig, c'est un projet complètement différent qui nécessite un serveur PHP.
