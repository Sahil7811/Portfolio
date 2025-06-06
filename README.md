# 🚀 React + Vite Portfolio Website

This project is a minimal yet powerful setup for building a modern **React** portfolio website using **Vite**, featuring fast Hot Module Replacement (HMR) and essential **ESLint** rules to ensure code quality.

---

## 📦 Tech Stack

- **React** – UI library for building interactive user interfaces  
- **Vite** – Lightning-fast build tool with instant server start and HMR  
- **ESLint** – Static code analysis to catch common errors and enforce code style  
- **Babel or SWC** – Fast Refresh support for React development  
  - [`@vitejs/plugin-react`](https://github.com/vitejs/vite-plugin-react) (uses Babel)
  - [`@vitejs/plugin-react-swc`](https://github.com/vitejs/vite-plugin-react-swc) (uses SWC)

---

## 💡 Features

- ⚡️ Fast development experience with Vite  
- ✅ Linting enabled for clean and consistent code  
- 🔄 Hot Module Replacement (HMR) for instant feedback  
- 📁 Minimal project structure to build upon  
- 🧩 Easily extendable with your favorite React libraries

---

## 📈 Expanding the ESLint Configuration

For production-grade applications, it’s recommended to use **TypeScript** with **type-aware linting** to catch more complex bugs and improve maintainability.

Check out the official [React + TypeScript Vite template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to get started, and refer to [`typescript-eslint`](https://typescript-eslint.io) for more advanced linting configurations.

---

## 📂 Suggested Folder Structure

```bash
├── public/             # Static assets
├── src/                # Source files
│   ├── assets/         # Images, fonts, etc.
│   ├── components/     # Reusable UI components
│   ├── pages/          # Page-level components
│   └── App.jsx         # Main app component
├── .eslintrc.cjs       # ESLint config
├── vite.config.js      # Vite config
└── index.html          # Entry HTML
