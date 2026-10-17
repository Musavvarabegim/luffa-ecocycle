/* Luffa EcoCycle: accessible navigation + transparent planning calculator */
(() => {
  "use strict";

  const menuToggle = document.getElementById("menuToggle");
  const nav = document.getElementById("mainNav");

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Navigatsiyani yopish" : "Navigatsiyani ochish");
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Navigatsiyani ochish");
    }));
    document.addEventListener("keydown", event => {
      if (event.key === "Escape") {
        nav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  const ids = ["units", "sellRate", "price", "variable", "labor", "overhead", "selling", "investment"];
  const fields = Object.fromEntries(ids.map(id => [id, document.getElementById(id)]));
  const fmt = value => new Intl.NumberFormat("uz-UZ", {
    maximumFractionDigits: 0
  }).format(Math.round(value)) + " so‘m";
  const number = id => {
    const field = fields[id];
    if (!field) return 0;
    const value = Number(field.value);
    return Number.isFinite(value) ? Math.max(0, value) : 0;
  };

  function calculate() {
    if (!fields.units) return;

    const plannedUnits = number("units");
    const sellRate = Math.min(100, number("sellRate")) / 100;
    const price = number("price");
    const variableCost = number("variable");
    const labor = number("labor");
    const overhead = number("overhead");
    const selling = number("selling");
    const investment = number("investment");

    const soldUnits = plannedUnits * sellRate;
    const revenue = soldUnits * price;
    const variableTotal = soldUnits * variableCost;
    const fixedTotal = labor + overhead + selling;
    const profit = revenue - variableTotal - fixedTotal;
    const contribution = price - variableCost;
    const breakEven = contribution > 0 ? Math.ceil(fixedTotal / contribution) : null;
    const payback = profit > 0 && investment > 0 ? investment / profit : null;

    document.getElementById("assumptionLine").textContent =
      `Sotuv: ${new Intl.NumberFormat("uz-UZ", {maximumFractionDigits: 1}).format(soldUnits)} dona/oy. Bu rejalashtirish taxmini.`;
    document.getElementById("revenue").textContent = fmt(revenue);
    document.getElementById("variableTotal").textContent = fmt(variableTotal);
    document.getElementById("fixedTotal").textContent = fmt(fixedTotal);

    const profitEl = document.getElementById("profit");
    const profitCard = profitEl.closest(".result");
    profitEl.textContent = (profit < 0 ? "−" : "") + fmt(Math.abs(profit));
    profitCard.classList.toggle("negative", profit < 0);
    document.getElementById("profitNote").textContent =
      profit < 0 ? "Zarar: oylik xarajatlar tushumdan yuqori" : "Soliq va moliyalashtirishdan oldin";

    document.getElementById("breakEven").textContent =
      contribution <= 0 ? "Hisoblab bo‘lmaydi" : `${new Intl.NumberFormat("uz-UZ").format(breakEven)} dona`;
    document.getElementById("breakEvenNote").textContent =
      contribution <= 0 ? "Narx dona o‘zgaruvchan xarajatidan yuqori bo‘lishi kerak" :
      breakEven > soldUnits ? "Rejalashtirilgan sotuv zararsizlik nuqtasiga yetmaydi" :
      "Rejalashtirilgan sotuv zararsizlik nuqtasiga yetadi";

    document.getElementById("payback").textContent =
      payback === null ? "Hozircha yo‘q" : `${payback.toFixed(1)} oy`;
    document.getElementById("paybackNote").textContent =
      payback === null ? "Musbat oylik natija va sarmoya kiritilishi kerak" :
      "Soddalashtirilgan qoplanish; mavsumiylik va soliq hisobga olinmagan";
  }

  ids.forEach(id => {
    if (fields[id]) {
      fields[id].addEventListener("input", calculate);
      fields[id].addEventListener("change", () => {
        const min = Number(fields[id].min || 0);
        const max = fields[id].max === "" ? Infinity : Number(fields[id].max);
        let value = Number(fields[id].value);
        if (!Number.isFinite(value)) value = min;
        fields[id].value = Math.min(max, Math.max(min, value));
        calculate();
      });
    }
  });

  const reset = document.getElementById("resetCalc");
  if (reset) {
    reset.addEventListener("click", () => {
      const defaults = {
        units: 500, sellRate: 80, price: 18000, variable: 6500,
        labor: 3000000, overhead: 1000000, selling: 500000,
        investment: 100000000
      };
      Object.entries(defaults).forEach(([id, value]) => {
        if (fields[id]) fields[id].value = value;
      });
      calculate();
    });
  }

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // The placeholder contact address is deliberately visible in the page copy.
  // Replace it with a real project address before publishing.
  calculate();
})();
