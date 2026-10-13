# Lab 1 — UI Elements Catalog

[![HTML5](https://img.shields.io/badge/HTML-HTML5-orange)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS-CSS3-blue)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-yellow)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Interactive web page presenting ten core user interface elements, with an explanation of the purpose of each one and a working example. Developed as the first lab work for the "UI/UX design" course (Software Engineering, Igor Sikorsky Kyiv Polytechnic Institute, 2026).

The page is written in Ukrainian and covers the following elements: radiobutton, checkbox, text input, tabs, button, text label, link, tooltip, dropdown list, and data grid. Each section explains what the element does, when it should (and should not) be used, and which HTML markup implements it. Every example is fully functional, so the element can be clicked, typed into, and navigated with the keyboard right on the page.

**Live demo:** [https://mnjmaria.github.io/ui-ux-labs/lab1/](https://mnjmaria.github.io/ui-ux-labs/lab1/)

Back to the [list of all labs](../README.md).

## Project Highlights

- **10 UI elements**, each with a purpose description and a live example
- **Dark premium theme**: deep midnight background, cool platinum text, and a single blue accent
- **No frameworks or libraries** — plain HTML, CSS, and JavaScript
- **Keyboard accessible** and screen-reader friendly (semantic markup and ARIA)
- **Responsive layout** for desktop and mobile screens
- **Respects `prefers-reduced-motion`** for users who disable animations

## Technologies

- **HTML5** (semantic markup, ARIA roles and attributes)
- **CSS3** (custom properties, Grid, Flexbox, responsive media queries)
- **JavaScript (ES6+)** — vanilla, no dependencies
- **Google Fonts** — Unbounded (headings) and Onest (text and interface)
- **GitHub Pages** (hosting)

## Features

| # | Element | Purpose | What the example demonstrates |
|---|---|---|---|
| 1 | **Radiobutton** | Choose exactly one option from a small group | Delivery method selection with a live result |
| 2 | **Checkbox** | Turn independent options on and off | Notification channels with a "select all" checkbox and a partial (indeterminate) state |
| 3 | **Text input** | Enter free-form text | Email field with live format validation and hints |
| 4 | **Tabs** | Switch between sections in one place | Three tabs controlled by mouse and by arrow keys, Home and End |
| 5 | **Button** | Trigger an action | Primary, secondary, ghost, loading, and disabled states |
| 6 | **Text label** | Describe a field or a value | Comparison of a linked `<label>` and plain text |
| 7 | **Link** | Navigate to another page or section | Internal link, external link in a new tab, and an inline link |
| 8 | **Tooltip** | Show a short hint on hover or focus | Hints that appear on hover and keyboard focus, closed with Esc |
| 9 | **Dropdown list** | Choose one option from a long list | Styled native `<select>` with a live result |
| 10 | **Data grid** | Display and compare tabular data | Sorting by column, text filter, row counter, and an empty state |

### Page Experience

- Sticky side navigation that highlights the section currently in view
- Soft spotlight effect that follows the cursor on each demo panel
- "Skip to content" link for keyboard users
- Copy-to-clipboard action inside the tooltip example

## Folder Structure

```text
lab1/
├── index.html   # Page markup and descriptions of all 10 elements
├── style.css    # Dark theme, layout, styles of every component
├── script.js    # Interactivity: validation, tabs, tooltips, data grid
└── README.md
```

## How to Run

Open `index.html` from this folder in any modern browser, or start it with the **Live Server** extension in Visual Studio Code. No installation or build step is required. An internet connection is only needed to load Google Fonts; without it a fallback font is used.

## The Process

This lab followed the full front-end development cycle:

- Analysis of the assignment and selection of the content for each element
- Planning of the page structure: purpose, usage rules, and markup for every element
- Choice of the visual direction (dark, restrained, premium) and definition of the color palette and typography
- Semantic HTML markup with ARIA roles for tabs, tooltips, and the data grid
- Styling with CSS custom properties, including custom radio buttons and checkboxes built on top of native inputs
- Implementation of the interactive behavior in vanilla JavaScript
- Responsive adaptation for tablets and phones
- Manual testing in the browser, including keyboard-only navigation
- Publishing the page with GitHub Pages

The focus was on making every example a real, working component instead of a static picture, while keeping the code readable and free of external dependencies.

## What I Learned

- Choosing the right UI element for a given task and explaining the reasoning behind it
- Writing **semantic HTML** and using **ARIA** attributes where native elements are not enough
- Building accessible custom controls (radio buttons, checkboxes, tabs, tooltips) with full keyboard support
- Using **CSS custom properties**, Grid, and Flexbox to create a consistent and responsive design system
- Working with the DOM in **vanilla JavaScript** (events, state, sorting and filtering data)
- Designing clear states: hover, focus, active, loading, disabled, valid, and invalid
- Writing short and clear interface copy
- Deploying a static website with **GitHub Pages**

## How It Could Be Improved

- Add a light theme and a theme switcher
- Add more elements: date picker, modal window, accordion, toast notifications, pagination
- Replace the native dropdown with a fully custom listbox
- Add pagination and column resizing to the data grid
- Support several interface languages (Ukrainian and English)
- Add automated accessibility and end-to-end tests
- Make tooltips dismissible and hoverable according to WCAG 1.4.13

## Screenshots

<img src="screenshots/overview.png" width="80%">
<p><em>Page overview with side navigation</em></p>

<img src="screenshots/form-elements.png" width="70%">
<p><em>Radiobutton, checkbox, and text input examples</em></p>

<img src="screenshots/data-grid.png" width="80%">
<p><em>Data grid with sorting and filtering</em></p>

<img src="screenshots/mobile.png" width="35%">
<p><em>Mobile layout</em></p>

---

## License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.

---

**Author:** Mariia Stepanova  
**Program:** Software Engineering  
**Institution:** Igor Sikorsky Kyiv Polytechnic Institute (Kyiv, Ukraine)  
**Year:** 2026
