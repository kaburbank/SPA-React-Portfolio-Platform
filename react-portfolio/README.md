# React Portfolio Project App

As freelance developer, designer, or a creative agency needs a modern, responsive, and easily maintainable web presence to showcase their work. They require an online platform that not only displays their past projects but also allows them to dynamically update their portfolio as new work is completed. This platform must provide a seamless user experience, making it easy for potential clients or collaborators to navigate through the projects and learn about the specifics of each one.

## Task

You are tasked with creating a personal project showcase application based on a provided design mock-up. The app must include the following features:

A landing page displaying a list of projects.
A form that allows users to add new projects dynamically.
A detailed project view accessible via client-side routing.
A responsive design that matches or is largely inspired by the mock-up

## Project Features

A component heirarcy using resusable components from a Vite + React template
Optimized and reusable state management with error handling and input validation
Intuitive event handling utilizing onChange and onSubmit event handlers
Props utilized clearly and passed from parent to child components
Polished design utilizing CSS that matches the UI and functionality of the provided mock-up

## Component Tree
```
└── App
    ├── ProjectForm
    ├── SearchBar
    └── ProjectList
        └──ProjectCard
```

## Set-up
### Prerequisites

- Node.js 
- npm

### Installation

1. Clone the repository
git clone https://github.com/kaburbank/SPA-React-Portfolio-Platform.git
cd SPA-React-Portfolio-Platform
cd react-portfolio

2. Install dependencies
npm install

3. Run the App
npm run dev



## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
