# Portfolio

A modern personal website built with React and TypeScript. Scaffolded with Vite, and styled with CSS.

## Tech Stack

- **React 19** 
- **TypeScript** 
- **Vite 8** 

## Features

- Performance optimized (~62KB gzipped)
- Responsive design with smooth scroll animations
- Sticky navigation with active section tracking (Intersection Observer API)
- Interactive project showcase with detail view
- Navy and gold color palette

## Project Structure

```
src/
  components/  – Reusable UI components
  hooks/       – Custom React hooks (scroll spy, animations)
  data/        – Project and experience data
  types/       – TypeScript type definitions
  App.tsx      – Root component
  App.css      – Component styles
  index.css    – Global styles and CSS variables
```

## Starting the server

```bash
npm install
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```