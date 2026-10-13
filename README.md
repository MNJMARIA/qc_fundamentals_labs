# UI/UX Design Labs — Lab Works Collection

[![HTML5](https://img.shields.io/badge/HTML-HTML5-orange)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS-CSS3-blue)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-yellow)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![GitHub Pages](https://img.shields.io/badge/Hosted%20on-GitHub%20Pages-lightgrey)](https://pages.github.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Collection of lab works for the "UI/UX design" course (Software Engineering, Igor Sikorsky Kyiv Polytechnic Institute, 2026).

Every lab is stored in its own folder with a separate page and a detailed README. A landing page at the root of the repository lists all labs and links to them, and the whole site is published with GitHub Pages.

**Live site:** [https://mnjmaria.github.io/ui-ux-labs/](https://mnjmaria.github.io/ui-ux-labs/)

## Labs

| # | Lab | Description | Live page | Source |
|---|---|---|---|---|
| 1 | **UI Elements Catalog** | Interactive page presenting ten core UI elements with explanations of their purpose and working examples | [Open](https://mnjmaria.github.io/ui-ux-labs/lab1/) | [lab1/](lab1/) |

New labs are added to this table as they are completed.

## Technologies

- **HTML5** (semantic markup, ARIA)
- **CSS3** (custom properties, Grid, Flexbox)
- **JavaScript (ES6+)** — vanilla, no frameworks
- **Google Fonts** — Cormorant Garamond and Manrope
- **GitHub Pages** (hosting)

## Repository Structure

```text
ui-ux-labs/
├── index.html        # Landing page with the list of all labs
├── style.css         # Landing page styles
├── README.md
├── LICENSE
└── lab1/             # Lab 1 — UI Elements Catalog
    ├── index.html
    ├── style.css
    ├── script.js
    └── README.md
```

Each lab is self-contained: it has its own `index.html` and styles, so labs do not depend on each other and can be opened or deleted independently.

## How to Run

No installation or build step is required.

```bash
git clone https://github.com/MNJMARIA/ui-ux-labs.git
cd ui-ux-labs
```

Open `index.html` in any modern browser, or start it with the **Live Server** extension in Visual Studio Code. An internet connection is only needed to load Google Fonts; without it a fallback font is used.

## How to Add a New Lab

1. Create a folder named `lab2/` (then `lab3/` and so on) with an `index.html` inside.
2. Add a link on the landing page: copy the commented template at the bottom of the list in the root `index.html`, uncomment it, and change the number, title, and description.
3. Add a short `README.md` to the lab folder and a new row to the table above.
4. Commit and push. GitHub Pages updates the site within a couple of minutes.

## Publishing

The site is served directly from the `main` branch: **Settings → Pages → Deploy from a branch → `main` / `(root)`**. The file `index.html` must stay in the repository root.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Author:** Mariia Stepanova  
**Program:** Software Engineering  
**Institution:** Igor Sikorsky Kyiv Polytechnic Institute (Kyiv, Ukraine)  
**Year:** 2026
