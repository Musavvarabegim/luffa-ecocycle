const ids = ["units", "price", "variable", "fixed", "investment", "sellRate"];
const el = Object.fromEntries(ids.map(id => [id, document.getElementById(id)]));
const money = value => new Intl.NumberFormat("uz-UZ", { maximumFractionDigits: 0 }).format(Math.round(value)) + " so‘m";
const number = id => Math.max(0, Number(el[id].value) || 0);

function calculate() {
  const plannedUnits = number("units");
  const price = number("price");
  const variableCost = number("variable");
  const fixedCost = number("fixed");
  const investment = number("investment");
  const sellRate = Math.min(100, number("sellRate")) / 100;
  const soldUnits = plannedUnits * sellRate;
  const revenue = soldUnits * price;
  const totalVariable = soldUnits * variableCost;
  const expenses = totalVariable + fixedCost;
  const profit = revenue - expenses;
  const contribution = price - variableCost;
  const breakEven = contribution > 0 ? Math.ceil(fixedCost / contribution) : null;
  const payback = profit > 0 && investment > 0 ? investment / profit : null;

  document.getElementById("revenue").textContent = money(revenue);
  document.getElementById("expenses").textContent = money(expenses);
  document.getElementById("profit").textContent = money(profit);
  document.getElementById("profit").style.color = profit >= 0 ? "#31563e" : "#a94435";
  document.getElementById("profitCaption").textContent = profit >= 0 ? "Soddalashtirilgan operatsion natija" : "Xarajatlar tushumdan yuqori";
  document.getElementById("breakEven").textContent = breakEven === null ? "Hisoblab bo‘lmaydi" : `${new Intl.NumberFormat("uz-UZ").format(breakEven)} dona`;
  document.getElementById("payback").textContent = payback === null ? "Hozircha aniqlanmaydi" : `${payback.toFixed(1)} oy`;
  document.getElementById("paybackNote").textContent = payback === null ? "Musbat oylik natija va boshlang‘ich sarmoya talab qilinadi." : "Soddalashtirilgan hisob; mavsumiylik va soliqlar kiritilmagan.";
  document.getElementById("calcStatus").textContent = `Hisoblangan sotuv: ${new Intl.NumberFormat("uz-UZ").format(Math.round(soldUnits))} dona/oy. Sotuv ulushi ${Math.round(sellRate * 100)}% deb olindi.`;
}
ids.forEach(id => el[id].addEventListener("input", calculate));
document.getElementById("resetCalc").addEventListener("click", () => {
  const defaults = {units:500, price:18000, variable:6500, fixed:4500000, investment:100000000, sellRate:85};
  Object.entries(defaults).forEach(([id, value]) => el[id].value = value);
  calculate();
});
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("mainNav");
menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));
document.getElementById("year").textContent = new Date().getFullYear();
calculate();