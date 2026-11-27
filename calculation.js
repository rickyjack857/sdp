// HeritageTrail Visit Billing System
const TAX_RATE = 0.18;
function calculateBill() {
 let subtotal = 0;
 const rows = document.querySelectorAll("tbody tr");
 rows.forEach(function(row) {
const price = Number(row.querySelector(".price").innerText);
const quantityInput = row.querySelector(".quantity");
let quantity = Number(quantityInput.value);
if (isNaN(quantity) || quantity < 0) {
quantity = 0;
quantityInput.value = 0;}
const itemTotal = price * quantity;
row.querySelector(".item-total").innerText = itemTotal.toFixed(2);
subtotal = subtotal + itemTotal;});
const taxAmount = subtotal * TAX_RATE;
const finalTotal = subtotal + taxAmount;
document.getElementById("subtotal").innerText = subtotal.toFixed(2);
document.getElementById("tax").innerText = taxAmount.toFixed(2);
document.getElementById("grandTotal").innerText = finalTotal.toFixed(2);}
document.getElementById("calculateBtn").addEventListener("click", calculateBill);