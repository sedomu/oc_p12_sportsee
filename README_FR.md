# OpenClassrooms – Projet 12 SportSee

## 📌 Description

Code source du **Projet 12 – Développez un tableau de bord d’analytics avec React**, complété dans le cadre du **parcours Développeur d'application JavaScript React**.

Le projet consiste à **développer un tableau de bord d’analytics pour le coaching sportif**, en intégrant des **graphiques et diagrammes interactifs** via React.
L’objectif est de **visualiser et analyser des données sportives** en utilisant une interface utilisateur moderne et réactive.

Pages et composants prévus :

* Page profil utilisateur avec graphiques et statistiques
* Composants graphiques : activité quotidienne, performances, temps moyen, radar de compétences, score

⚠️ **Projet éducatif :** Ce dépôt a été créé dans un contexte de formation. Il **n’est pas destiné à la production**.

---

## 🎯 Objectifs pédagogiques

* Développer des **éléments graphiques avancés** avec des bibliothèques JavaScript (Recharts, D3…)
* Interagir avec un **service web** pour récupérer et afficher des données (API REST ou mocks)
* Structurer une application front-end moderne avec **React**, **React Router** et **TypeScript**
* Assurer la **qualité et la documentation du code** avec JSDoc, proptypes et ESLint
* Maîtriser l’intégration de **SASS** et d’animations CSS pour un rendu visuel performant

---

## 📦 Livrables & Structure du projet

* **Composants React** : modulaires et réutilisables, dans `src/components/`
* **Pages** : dans `src/pages/`, chacune représentant une vue du dashboard ou page statique
* **Routing React Router** : défini dans `src/App.tsx`
* **Hooks personnalisés** : dans `src/hooks/` pour gérer la logique métier et les appels aux données (mock ou API)
* **Données mockées** : dans `src/data/` pour le développement sans back-end
* **Styles SASS** : dans `src/scss/` et `src/styles/`, avec variables et organisation modulaire

Selon les requirements du projet au stade actuel, le frontend est conçu pour correctement s'afficher sur des résolutions d'écran de 1024x780px et au-delà.

![1024x780 screenshot](./sportsee/public/assets/screenshot_1024x780.png)
_page de l'utilisateur 12, résolution 1024x780px_

[Live preview](https://oc-p12-sportsee-git-dev-muczs-projects.vercel.app/) - site en version
mockée hébergée sur Vercel

---

## 🏗 Architecture de l’application

### 1. Point d’entrée

* `src/main.tsx` : initialise React et monte l’application dans le DOM
* `src/App.tsx` : composant racine, configure routing et composants de page

### 2. Routage

* Géré via **React Router** dans `App.tsx`
* Chaque route rend le composant correspondant dans `src/pages/`

### 3. Pages

* `src/pages/` contient les pages principales : dashboard, profil utilisateur, page introuvable
* Les pages consomment les **hooks personnalisés** pour récupérer et formater les données

### 4. Hooks personnalisés

* `src/hooks/` encapsule la logique métier et les appels aux données
* Exemple de flux pour le dashboard :

```
<UserContent /> ⇒ useUserData ⇒ useConditionalFetch ⇒ useFetch
<UserContent /> ⇒ useUserData ⇒ useNormalisedData
```

* Les données sont redistribuées aux composants graphiques : `<DailyActivityGraph />`, `<StatsGraph />`, `<AverageSessions />`, `<SkillsRadar />`, `<ScoreGraph />`

### 5. Composants UI

* `src/components/` contient les composants graphiques et fonctionnels
* Props transmises depuis les pages ou composants parents

### 6. Styles

* Gestion via **SASS** et CSS modulaire dans `src/scss/` et `src/styles/`

---

## 🛠 Outils & Méthodologies

### 📦 Dépendances principales

* react
* react-dom
* react-router
* recharts
* sass

### 🛠 Dépendances de développement

* vite
* @vitejs/plugin-react
* eslint + plugins React
* prettier
* typescript
* @types/react
* @types/react-dom
* typescript-eslint

### Autres outils

* **Node.js** pour la gestion des dépendances et exécution JavaScript
* **Vite** pour le build et l’environnement de développement

---

## 🚀 Utilisation

_Toutes les commandes doivent être exécutées depuis le dossier racine du projet `sportsee/`._

### Installation

```bash
npm install
```

### Lancer l’application (mode développement)

```bash
npm run dev
```

### Compiler pour production

```bash
npm run build
```

Les fichiers compilés sont générés dans le dossier `dist`.

### Prévisualiser le build

```bash
npm run preview
```

### Données

#### Option 1 : Utiliser les données mockées

_Le fichier de configuration `src/appConfig.ts`, contient le paramètre **mocked: true** par défaut. Il récupèrera les données mockées dans `/src/data/mocked-data.ts`_

#### Option 2 : Récupération des données par API

Cloner et lancer le backend (voir repo [OpenClassrooms-Student-Center /
SportSee](https://github.com/OpenClassrooms-Student-Center/SportSee)).

Le backend lancé va écouter par défaut le port **3000** sur **localhost**.

Modifier le fichier de configuration `src/appConfig.ts`: passer le paramètre **mocked: false**.
_Les données seront récupérées par API sur le serveur indiqué dans le fichier de configuration : **server: "http://localhost:3000"** par défaut_

---

## ⚠️ Disclaimer

Ce projet est une **application front-end mockée** développée dans le cadre d’un apprentissage.
Il **n’est pas destiné à la production**, mais sert à démontrer la maîtrise de **React, React Router, TypeScript, SASS** et l’intégration de **graphismes analytiques interactifs**.