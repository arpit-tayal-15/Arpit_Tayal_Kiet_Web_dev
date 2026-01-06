import { calculateInterest } from "./5) interest.js";
import { showResult } from "./5) display.js";

document.getElementById("calculate").addEventListener("click", () => {
  const p = parseFloat(document.getElementById("principal").value);
  const r = parseFloat(document.getElementById("rate").value);
  const t = parseFloat(document.getElementById("time").value);

  const interest = calculateInterest(p, r, t);
  showResult(interest);
});
