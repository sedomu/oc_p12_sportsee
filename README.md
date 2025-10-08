# OpenClassrooms – Project 12 SportSee

## 📌 Description

Source code of **Project 12 – Develop an Analytics Dashboard with React**, completed as part of the **OpenClassrooms JavaScript React Developer path**.

This project consists of **developing an analytics dashboard for sports coaching**, integrating **interactive charts and diagrams** using React.
The goal is to **visualize and analyze sports data** through a modern, responsive user interface.

Planned pages and components:

* User profile page with charts and statistics
* Graphical components: daily activity, performance, average sessions, skills radar, score

⚠️ **Educational project:** This repository was created for training purposes. It **is not intended for production**.

---

## 🎯 Learning Objectives

* Develop **advanced graphical components** with JavaScript libraries (Recharts, D3, etc.)
* Interact with a **web service** to fetch and display data (REST API or mocks)
* Structure a modern front-end application with **React**, **React Router**, and **TypeScript**
* Ensure **code quality and documentation** using JSDoc, prop types, and ESLint
* Master the integration of **SASS** and CSS animations for performant visual rendering

---

## 📦 Deliverables & Project Structure

* **React components**: modular and reusable, in `src/components/`
* **Pages**: in `src/pages/`, each representing a dashboard view or static page
* **React Router routing**: defined in `src/App.tsx`
* **Custom hooks**: in `src/hooks/` to handle business logic and data fetching (mock or API)
* **Mocked data**: in `src/data/` for development without a backend
* **SASS styles**: in `src/scss/` and `src/styles/`, with variables and modular organization

The front-end is currently designed to display correctly on screens **1024x780px and larger**.

![1024x780 screenshot](Front/public/assets/screenshot_1024x780.png)
*user page 12, resolution 1024x780px*

[Live preview](https://oc-p12-sportsee-git-dev-muczs-projects.vercel.app/) – mocked site hosted on Vercel

---

## 🏗 Application Architecture

### 1. Entry Point

* `src/main.tsx`: initializes React and mounts the app in the DOM
* `src/App.tsx`: root component, configures routing and page components

### 2. Routing

* Managed via **React Router** in `App.tsx`
* Each route renders the corresponding component in `src/pages/`

### 3. Pages

* `src/pages/` contains main pages: dashboard, user profile, not found page
* Pages consume **custom hooks** to fetch and format data

### 4. Custom Hooks

* `src/hooks/` encapsulates business logic and data calls
* Example flow for the dashboard:

```
<UserContent /> ⇒ useUserData ⇒ useConditionalFetch ⇒ useFetch
<UserContent /> ⇒ useUserData ⇒ useNormalisedData
```

* Data is redistributed to chart components: `<DailyActivityGraph />`, `<StatsGraph />`, `<AverageSessions />`, `<SkillsRadar />`, `<ScoreGraph />`

### 5. UI Components

* `src/components/` contains graphical and functional components
* Props are passed from pages or parent components

### 6. Styles

* Managed via **SASS** and modular CSS in `src/scss/` and `src/styles/`

---

## 🛠 Tools & Methodologies

### 📦 Main Dependencies

* react
* react-dom
* react-router
* recharts
* sass

### 🛠 Development Dependencies

* vite
* @vitejs/plugin-react
* eslint + React plugins
* prettier
* typescript
* @types/react
* @types/react-dom
* typescript-eslint

### Other Tools

* **Node.js** for dependency management and JavaScript execution
* **Vite** for build and development environment

---

## 🚀 Usage

*All commands should be executed from the project root folder `sportsee/`.*

### Install

```bash
npm install
```

### Run the app (development mode)

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

The compiled files are generated in the `dist` folder.

### Preview the build

```bash
npm run preview
```

### Data

#### Option 1: Use mocked data

*The configuration file `src/appConfig.ts` contains the parameter **mocked: true** by default.
It will fetch mocked data from `/src/data/mocked-data.ts`*

#### Option 2: Fetch data from API

Clone and run the backend (see repo [OpenClassrooms-Student-Center / SportSee](https://github.com/OpenClassrooms-Student-Center/SportSee)).

The backend listens by default on port **3000** on **localhost**.

Modify the configuration file `src/appConfig.ts`: set **mocked: false**.
*Data will be fetched from the server specified in the config file: **server: "[http://localhost:3000](http://localhost:3000)"** by default*

---

## ⚠️ Disclaimer

This project is a **mocked front-end application** developed for learning purposes.
It **is not intended for production**, but demonstrates mastery of **React, React Router, TypeScript, SASS** and the integration of **interactive analytics graphics**.