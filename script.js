"use strict";

const billEl = document.getElementById("bill");
const percentageEl = document.getElementById("percentage");
const totalBillEl = document.getElementById("total-bill");
const btnEl = document.querySelector(".btn");
const resetEl = document.querySelector(".reset");

btnEl.addEventListener("click", function () {
  const bill = Number(billEl.value);
  const percentage = Number(percentageEl.value);
  const totalBill = bill * (percentage / 100) + bill;

  totalBillEl.textContent += totalBill;
  btnEl.classList.toggle("none");
  resetEl.classList.toggle("none");
});

resetEl.addEventListener("click", function () {
  billEl.value = "";
  percentageEl.value = "";
  totalBillEl.textContent = "$";
  resetEl.classList.toggle("none");
  btnEl.classList.toggle("none");
});
