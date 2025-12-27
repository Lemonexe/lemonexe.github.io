# lemonexe.github.io

My personal website deployed with GitHub Pages and a very custom build process.

### Local build:

```bash
nvm i
npm run build
```

### How to add new page:
- Add an entry in `TOC.csv` with `page_name`
- Create `./includes/page_name.cs.html` and `./includes/page_name.en.html`
- _Optional: add menu entry in_ `TEMPLATE.html`
