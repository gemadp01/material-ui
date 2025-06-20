# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Branch Configuration
- The master branch uses the styled-engine with styled-components (MUI v5)  
    `npm install @mui/material @mui/styled-engine-sc styled-components`
  
- Try switching to the Emotion styling engine (default for MUI).
  - If you've already installed the styled-components engine, uninstall it first:  
      `npm uninstall styled-components @mui/styled-engine-sc`
  - Then install Emotion:  
      `npm install @mui/material @emotion/react @emotion/styled`
  - If you want to switch back to styled-components, uninstall Emotion first:  
      `npm uninstall @emotion/react @emotion/styled`
