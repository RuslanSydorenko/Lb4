var exp = "";

const btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", function() {document.getElementById("meaning").value = exp += "1";});
const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", function() {document.getElementById("meaning").value = exp += "2";});
const btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", function() {document.getElementById("meaning").value = exp += "3";});
const btn4 = document.querySelector("#btn4");
btn4.addEventListener("click", function() {document.getElementById("meaning").value = exp += "4";});
const btn5 = document.querySelector("#btn5");
btn5.addEventListener("click", function() {document.getElementById("meaning").value = exp += "5";});
const btn6 = document.querySelector("#btn6");
btn6.addEventListener("click", function() {document.getElementById("meaning").value = exp += "6";});
const btn7 = document.querySelector("#btn7");
btn7.addEventListener("click", function() {document.getElementById("meaning").value = exp += "7";});
const btn8 = document.querySelector("#btn8");
btn8.addEventListener("click", function() {document.getElementById("meaning").value = exp += "8";});
const btn9 = document.querySelector("#btn9");
btn9.addEventListener("click", function() {document.getElementById("meaning").value = exp += "9";});
const btn0 = document.querySelector("#btn0");
btn0.addEventListener("click", function() {document.getElementById("meaning").value = exp += "0";});

const btnDiv = document.querySelector("#btnDiv");
btnDiv.addEventListener("click", function() {document.getElementById("meaning").value = exp += "/";});
const btnMul = document.querySelector("#btnMul");
btnMul.addEventListener("click", function() {document.getElementById("meaning").value = exp += "*";});
const btnMin = document.querySelector("#btnMin");
btnMin.addEventListener("click", function() {document.getElementById("meaning").value = exp += "-";});
const btnPlus = document.querySelector("#btnPlus");
btnPlus.addEventListener("click", function() {document.getElementById("meaning").value = exp += "+";});
const btnRes = document.querySelector("#reset");
btnRes.addEventListener("click", function() {exp = "";});