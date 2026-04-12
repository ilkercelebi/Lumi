# Lumi Website (Marketing & Legal)

This is a static marketing website for the Lumi iOS app, built with **Vite** for performance and easy deployment to **GitHub Pages**.

## 🚀 Features
- **High Performance**: Minimal dependencies, fast static output.
- **Brand Aligned**: Uses Lumi's Bondly token system (warm creams, mint, and pinks).
- **SEO Ready**: Proper meta tags, OG images, `robots.txt`, and `sitemap.xml`.
- **Legal Compliance**: Comprehensive Privacy Policy, Terms of Use, and Data Deletion instructions.
- **Responsive**: Mobile-first design.

## 🛠 Setup & Development

1. **Install dependencies**:
   ```bash
   cd website
   npm install
   ```

2. **Run dev server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

## 🌍 GitHub Pages Deployment

### Option 1: GitHub Actions (Recommended)
Create a file at `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Set up Node
        uses: actions/checkout@v4
        with:
          node-version: "20"
      - name: Install dependencies
        run: npm install
        working-directory: ./website
      - name: Build
        run: npm run build
        working-directory: ./website
      - name: Setup Pages
        uses: actions/configure-pages@v4
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './website/dist'
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Option 2: Build folder (docs/)
1. Configure Vite `outDir` to `../docs` in `vite.config.js`.
2. Run `npm run build`.
3. In GitHub Settings > Pages, set the source to "Deploy from a branch" and select the `main` branch with the `/docs` folder.

## 📝 Configuration
Centralized settings are found in `src/config.js`. Update the following before deployment:
- `companyName`
- `appStoreUrl`
- `supportEmail`
- `jurisdiction`
