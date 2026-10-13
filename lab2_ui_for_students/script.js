/* Інтерактивність для 10 елементів інтерфейсу*/
(() => {
  "use strict";

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

  // Виводить рядок "текст <жирне значення>" без innerHTML
  function readout(el, text, strong = "") {
    el.textContent = text;
    if (strong) {
      el.append(" ");
      const b = document.createElement("b");
      b.textContent = strong;
      el.append(b);
    }
  }

  /* ---------- Посилання "До списку лабораторних" ----------
     Воно працює лише в структурі репозиторію: корінь/index.html (список) і
     корінь/lab1/index.html (ця сторінка). 
     Посилання видно, лише коли назва папки починається з lab<номер>_ і далі
     йде будь-яка назва, наприклад lab1_ui_elements, lab2_forms, lab10_dashboard.
     Просто lab1 (без назви після номера) теж підходить. */
  const folderName = decodeURIComponent(
    location.pathname.replace(/index\.html$/, "").split("/").filter(Boolean).pop() || ""
  );
  if (!/^lab\d+(_|$)/i.test(folderName)) {
    $$("[data-labs-link]").forEach((link) => {
      (link.closest("footer p") || link).hidden = true;
    });
  }

  /* ---------- 1. Radiobutton ---------- */
  const radios = $$('input[name="delivery"]');
  const radioOut = $("#radio-out");
  function renderRadio() {
    const checked = radios.find((r) => r.checked);
    const name = checked.closest("label").querySelector(".choice-text").textContent;
    readout(radioOut, "Обрано:", name);
  }
  radios.forEach((r) => r.addEventListener("change", renderRadio));
  renderRadio();

  /* ---------- 2. Checkbox ---------- */
  const master = $("#notify-all");
  const channels = $$('input[name="notify"]');
  const checkOut = $("#check-out");
  function renderChecks() {
    const count = channels.filter((c) => c.checked).length;
    master.checked = count === channels.length;
    readout(checkOut, "Увімкнено каналів:", `${count} з ${channels.length}`);
  }
  master.addEventListener("change", () => {
    channels.forEach((c) => (c.checked = master.checked));
    renderChecks();
  });
  channels.forEach((c) => c.addEventListener("change", renderChecks));
  renderChecks();

  /* ---------- 3. Text input ---------- */
  const email = $("#email");
  const emailHint = $("#email-hint");
  const emailDefault = emailHint.textContent;
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  let emailTouched = false;

  function validateEmail() {
    const value = email.value.trim();
    if (!value) {
      email.removeAttribute("aria-invalid");
      delete email.dataset.valid;
      delete emailHint.dataset.state;
      emailHint.textContent = emailDefault;
      return;
    }
    const ok = emailRe.test(value);
    email.setAttribute("aria-invalid", String(!ok));
    email.dataset.valid = String(ok);
    emailHint.dataset.state = ok ? "valid" : "invalid";
    emailHint.textContent = ok
      ? "Адреса виглядає коректно."
      : "Перевірте формат: потрібні символ @ і домен, наприклад name@example.com.";
  }
  email.addEventListener("blur", () => {
    emailTouched = true;
    validateEmail();
  });
  email.addEventListener("input", () => {
    if (emailTouched) validateEmail();
  });

  /* ---------- 4. Tabs ---------- */
  $$(".tabs").forEach((root) => {
    const tabs = $$('[role="tab"]', root);
    const panels = tabs.map((t) => document.getElementById(t.getAttribute("aria-controls")));

    function select(index, focus = false) {
      tabs.forEach((tab, i) => {
        const active = i === index;
        tab.setAttribute("aria-selected", String(active));
        tab.tabIndex = active ? 0 : -1;
        panels[i].hidden = !active;
      });
      if (focus) tabs[index].focus();
    }

    tabs.forEach((tab, i) => {
      tab.addEventListener("click", () => select(i));
      tab.addEventListener("keydown", (e) => {
        let next = null;
        if (e.key === "ArrowRight") next = (i + 1) % tabs.length;
        else if (e.key === "ArrowLeft") next = (i - 1 + tabs.length) % tabs.length;
        else if (e.key === "Home") next = 0;
        else if (e.key === "End") next = tabs.length - 1;
        if (next !== null) {
          e.preventDefault();
          select(next, true);
        }
      });
    });
  });

  /* ---------- 5. Button ---------- */
  const saveBtn = $("#btn-save");
  const saveText = $("#btn-save-text");
  const btnOut = $("#btn-out");
  const btnDefault = "Натисніть «Зберегти», щоб побачити стан завантаження.";
  btnOut.textContent = btnDefault;

  saveBtn.addEventListener("click", () => {
    if (saveBtn.classList.contains("is-loading")) return;
    saveBtn.classList.add("is-loading");
    saveBtn.setAttribute("aria-busy", "true");
    saveText.textContent = "Зберігаємо";
    readout(btnOut, "Зберігаємо зміни…");
    setTimeout(() => {
      saveBtn.classList.remove("is-loading");
      saveBtn.removeAttribute("aria-busy");
      saveText.textContent = "Зберегти";
      readout(btnOut, "Збережено о", new Date().toLocaleTimeString("uk-UA"));
    }, 1100);
  });
  $("#btn-cancel").addEventListener("click", () => readout(btnOut, "Дію скасовано, зміни не збережено."));
  $("#btn-clear").addEventListener("click", () => (btnOut.textContent = btnDefault));

  /* ---------- 8. Tooltip ---------- */
  $$(".tip-wrap").forEach((wrap) => {
    const reset = () => wrap.classList.remove("dismissed");
    wrap.addEventListener("mouseleave", reset);
    wrap.addEventListener("focusout", reset);
  });

  // Esc закриває підказку, яка зараз показана (при наведенні курсору або фокусі)
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    $$(".tip-wrap").forEach((wrap) => {
      if (wrap.matches(":hover, :focus-within")) wrap.classList.add("dismissed");
    });
  });

  /* ---------- 9. Dropdown list ---------- */
  const course = $("#course");
  const selectOut = $("#select-out");
  selectOut.textContent = "Нічого не обрано.";
  course.addEventListener("change", () => {
    readout(selectOut, "Обрано напрям:", course.selectedOptions[0].textContent);
  });

  /* ---------- 10. Data grid ---------- */
  const rows = [
    { name: "Radiobutton",   tag: 'input[type="radio"]',    action: "Вибір одного варіанта",        level: 1 },
    { name: "Checkbox",      tag: 'input[type="checkbox"]', action: "Вибір кількох варіантів",      level: 1 },
    { name: "Text input",    tag: 'input[type="text"]',     action: "Введення тексту",              level: 2 },
    { name: "Tabs",          tag: 'role="tablist"',         action: "Перемикання розділів",         level: 3 },
    { name: "Button",        tag: "button",                 action: "Запуск дії",                   level: 1 },
    { name: "Text label",    tag: "label",                  action: "Пояснення призначення поля",   level: 1 },
    { name: "Link",          tag: "a[href]",                action: "Перехід за адресою",           level: 1 },
    { name: "Tooltip",       tag: 'role="tooltip"',         action: "Підказка при наведенні",       level: 2 },
    { name: "Dropdown list", tag: "select",                 action: "Вибір зі списку",              level: 2 },
    { name: "Data grid",     tag: "table",                  action: "Перегляд і сортування даних",  level: 3 },
  ];
  const levelLabel = { 1: "Низька", 2: "Середня", 3: "Висока" };

  const tbody = $("#grid-body");
  const gridCount = $("#grid-count");
  const filterInput = $("#grid-filter");
  const headers = $$("thead th");

  let sortKey = null;
  let sortDir = 1;
  let query = "";

  function cell(child) {
    const td = document.createElement("td");
    td.append(child);
    return td;
  }

  function renderGrid() {
    const q = query.trim().toLowerCase();
    let data = rows.filter(
      (r) =>
        !q ||
        [r.name, r.tag, r.action, levelLabel[r.level]].some((v) => v.toLowerCase().includes(q))
    );

    if (sortKey) {
      data = [...data].sort((a, b) => {
        const x = a[sortKey];
        const y = b[sortKey];
        const diff = typeof x === "number" ? x - y : String(x).localeCompare(String(y), "uk");
        return diff * sortDir;
      });
    }

    tbody.replaceChildren();

    if (data.length === 0) {
      const tr = document.createElement("tr");
      const td = document.createElement("td");
      td.colSpan = 4;
      td.className = "empty";
      td.textContent = "Нічого не знайдено. Спробуйте інший запит або очистіть фільтр.";
      tr.append(td);
      tbody.append(tr);
    }

    data.forEach((r) => {
      const tr = document.createElement("tr");

      const code = document.createElement("code");
      code.textContent = r.tag;

      const pill = document.createElement("span");
      pill.className = "pill";
      pill.dataset.level = r.level;
      pill.textContent = levelLabel[r.level];

      tr.append(
        cell(document.createTextNode(r.name)),
        cell(code),
        cell(document.createTextNode(r.action)),
        cell(pill)
      );
      tbody.append(tr);
    });

    readout(gridCount, "Показано", `${data.length} з ${rows.length}`);

    headers.forEach((th) => {
      const key = th.querySelector(".sort").dataset.key;
      th.setAttribute("aria-sort", key === sortKey ? (sortDir === 1 ? "ascending" : "descending") : "none");
    });
  }

  $$(".sort").forEach((btn) => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.key;
      if (sortKey === key) sortDir *= -1;
      else {
        sortKey = key;
        sortDir = 1;
      }
      renderGrid();
    });
  });

  filterInput.addEventListener("input", () => {
    query = filterInput.value;
    renderGrid();
  });

  renderGrid();
})();