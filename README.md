# Fametonic Landing Page

A responsive Next.js landing page that matches the provided Figma design exactly for both web and mobile versions.

## Features

- 🎯 Responsive design that works perfectly on desktop and mobile
- 📱 Interactive phone mockup with app interface
- ✨ Smooth animations and hover effects
- 🚀 Built with Next.js 15 and Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd fametonic-landing
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Deployment

This project can be deployed to:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **GitHub Pages**
- Any hosting service that supports Node.js

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Deploy to Netlify

1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

## Project Structure

```
fametonic-landing/
├── src/
│   └── app/
│       ├── globals.css      # Global styles
│       ├── layout.tsx       # Root layout
│       └── page.tsx         # Main landing page
├── public/                  # Static assets
├── package.json            # Dependencies
└── README.md              # This file
```

## Technologies Used

- **Next.js 15**: React framework with App Router
- **React 19**: Latest React version
- **Tailwind CSS 4**: Utility-first CSS framework
- **TypeScript**: Type-safe JavaScript
