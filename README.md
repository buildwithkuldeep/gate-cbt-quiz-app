# 🚀 GATE CBT Quiz Application

A **GATE-style Computer Based Test (CBT) Quiz Platform** built with **React**, **Vite**, and **Tailwind CSS**.  
Designed to simulate the **real GATE examination interface** with a timer, question palette, result analysis, dark mode toggle, and reattempt flow.

🌐 **Live Demo:** https://gate-cbt-quiz-app.netlify.app/  
📁 **Repository:** https://github.com/buildwithkuldeep/gate-cbt-quiz-app

---

## ✨ Features

### 🧠 Core Exam Functionality
- Supports **MCQ, MSQ, and NAT** question types
- **Countdown timer** with auto-submit
- **Save & Next / Previous** navigation
- Persistent answers during test
- **Question palette** showing attempted, unattempted, and current questions

### 📊 Results & Feedback
- Score calculation
- Correct / Wrong / Unattempted breakdown
- Per-question review with:
  - Your answer
  - Correct answer
  - Explanation
- **Reattempt / Restart Test** functionality

### 🎨 UI & UX
- Clean, professional, exam-focused layout
- **Global Dark Mode**
- Classy card-based design
- Easy to use on desktop screens

### ⚙️ Architecture
- JSON-driven questions (easy to update / extend)
- Centralized state using `useReducer`
- Modular reusable components
- Ready for backend integration & authentication

---

## 🛠️ Tech Stack

- **Frontend:** React + Vite  
- **Styling:** Tailwind CSS  
- **State Management:** useReducer, useState  
- **Data Source:** Local JSON  
- **Deployment:** Netlify

---

## ▶️ Getting Started (Local Development)

Clone the repository:

```bash
git clone https://github.com/buildwithkuldeep/gate-cbt-quiz-app.git
cd gate-cbt-quiz-app
npm install
npm run dev






# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
