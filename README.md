# QC Fundamentals — Lab Works Collection

[![HTML5](https://img.shields.io/badge/HTML-HTML5-orange)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS-CSS3-blue)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-yellow)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![GitHub Pages](https://img.shields.io/badge/Hosted%20on-GitHub%20Pages-lightgrey)](https://pages.github.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Collection of lab works for the "QC Fundamentals" course (Software Engineering, Igor Sikorsky Kyiv Polytechnic Institute, 2026).

Every lab is stored in its own folder with a separate page and a detailed README. A landing page at the root of the repository lists all labs and links to them, and the whole site is published with GitHub Pages.

**Live site:** [https://mnjmaria.github.io/qc_fundamentals_labs/](https://mnjmaria.github.io/qc_fundamentals_labs/)

## Labs

| # | Lab | Description | Live page | Source |
|---|---|---|---|---|
| 2 | **UI for students** | Interactive page presenting ten core UI elements with explanations of their purpose and working examples | [Open](https://mnjmaria.github.io/qc_fundamentals_labs/lab2_ui_for_students/) | [lab2_ui_for_students/](lab2_ui_for_students/) |

New labs are added to this table as they are completed.

## Technologies

- **HTML5** (semantic markup, ARIA)
- **CSS3** (custom properties, Grid, Flexbox)
- **JavaScript** — vanilla, no frameworks
- **Google Fonts** — Unbounded and Onest
- **GitHub Pages** (hosting)

## Repository Structure

```text
qc_fundamentals_labs/
├── index.html                  # Landing page with the list of all labs
├── style.css                   # Landing page styles
├── README.md
└── lab2_ui_for_students/       # Lab 2 — UI for students
    ├── index.html
    ├── style.css
    ├── script.js
    └── README.md
```

Each lab is self-contained: it has its own `index.html` and styles, so labs do not depend on each other and can be opened or deleted independently.

## How to Run

No installation or build step is required.

```bash
git clone https://github.com/MNJMARIA/qc_fundamentals_labs.git
cd qc_fundamentals_labs
```

Open `index.html` in any modern browser, or start it with the **Live Server** extension in Visual Studio Code (open the `qc_fundamentals_labs` folder itself, not a lab folder inside it). An internet connection is only needed to load Google Fonts; without it a fallback font is used.

## How to Add a New Lab

1. Create a folder named `lab3_name/` (then `lab4_name/` and so on) with an `index.html` inside. The folder name must start with `lab<number>_`: the "back to all labs" link inside a lab is shown only for such folders.
2. Add a card on the landing page: copy the commented template at the bottom of the list in the root `index.html`, uncomment it, and change the number, title, and description.
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
