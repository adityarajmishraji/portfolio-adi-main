# Portfolio Deployment Guide

This is a React-based portfolio project configured for GitHub Pages deployment.

## Quick Manual Deployment Steps

1. **Initial Setup (First time only)**
   - Clone the repository
   - Run `npm install` to install dependencies

2. **Local Development**
   - Run `npm start` to start development server
   - View at http://localhost:3000

3. **Manual Deployment Steps**
   
   Option 1 - Using GitHub Pages (Recommended):
   ```bash
   # Build and deploy to GitHub Pages
   npm run deploy
   ```
   This will automatically:
   - Build the project
   - Deploy to the gh-pages branch
   - Make it available at: https://adityarajmishraji.github.io/portfolio-adi-main

   Option 2 - Manual Deployment to Any Host:
   ```bash
   # Generate production build
   npm run build
   ```
   Then upload the contents of the `build` folder to your web host.

## Important Notes

- The project is pre-configured for GitHub Pages in package.json
- The homepage is set to: "https://adityarajmishraji.github.io/portfolio-adi-main"
- If deploying to a different location, update the "homepage" field in package.json
