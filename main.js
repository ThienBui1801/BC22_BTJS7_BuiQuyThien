"use strict";

// Bài 1
const btnNumber = document.querySelector("#btn-number");

function findNumber() {
  const renderHtml = document.querySelector("#render-number");

  let s = 0;
  let n = 0;

  while (s < 10000) {
    n++;
    s += n;
  }

  renderHtml.innerHTML = `<p class='alert alert-warning'>Số nguyên dương nhỏ nhất là ${n}</p>`;
}

btnNumber.addEventListener("click", findNumber);

// Bài 2
const btnCalc = document.querySelector("#btn-calc");

function calcNumber() {
  const numberX = document.getElementById("number-x").value * 1;
  const numberN = document.getElementById("number-n").value * 1;
  const renderCalc = document.querySelector("#render-calc");

  let result = 0;
  let lt = 1;

  for (let i = 1; i <= numberN; i++) {
    lt = lt * numberX;
    result += lt;
  }

  renderCalc.innerHTML = `<p>Tổng là ${result}</p>`;
}

btnCalc.addEventListener("click", calcNumber);

// Bài 3
const btnGt = document.querySelector("#btn-gt");

btnGt.addEventListener("click", () => {
  const numberGt = document.getElementById("number-gt").value * 1;
  let factorialResult = 1;
  for (let i = 1; i <= numberGt; i++) {
    factorialResult *= i;
    document.getElementById(
      "render-gt"
    ).innerHTML = `<p>Giai thừa của ${numberGt} là ${factorialResult}</p>`;
  }
});

// Bài 4
const btnDiv = document.querySelector("#btn-div");

btnDiv.addEventListener("click", () => {
  let allDiv = document.querySelectorAll(".div");
  for (let i = 0; i < allDiv.length; i++) {
    let item = allDiv[i];
    console.log(item);
    if ((i + 1) % 2 === 0) {
      console.log(123);
      item.style.background = "red";
    } else {
      item.style.background = "blue";
    }
  }
});
