// personalised greeting
// On page load
const studentName = prompt("Welcome to USIU!, Your new home away from home. What's your first name?");
alert("Karibu, " + studentName + "!");
const studentID = prompt("And your student ID?");
alert("Great, " + studentName + ". Let's get started!");
console.log("Student entered name:", studentName);
document.getElementById("greeting").textContent = "Mambo, " +
studentName + " 👋";
document.getElementById("greeting").textContent += " (ID: " + studentID + ")";
//estimator
// Triggered on button click or load
function runEstimator() {
const days = Number(prompt("How many days per week do you come to campus for physical classes? (e.g., 3)"));
const costPerTrip = Number(prompt("Average transport cost per trip in KSh? (e.g., avg price fom CBD to USIU is 100)"));
const snacksPerDay = Number(prompt("Snacks per day? (e.g., smochas from micheal's or loaded fries from Gavo's)"));
const snackPrice = Number(prompt("Average price per snack in KSh? (e.g., a 70 bob smocha or 40 bob samosa)"));
const transportWeekly = days * costPerTrip * 2; // to & from
const snacksWeekly = days * snacksPerDay * snackPrice;
const totalWeekly = transportWeekly + snacksWeekly;
const save10 = totalWeekly * 0.10;
const totalWithSavings = totalWeekly - save10;console.log({ days, costPerTrip, snacksPerDay, snackPrice,
transportWeekly, snacksWeekly, totalWeekly, totalWithSavings
});

console.log({
    days,
    costPerTrip,
    snacksPerDay,
    snackPrice,
    transportWeekly,
    snacksWeekly,
    totalWeekly,
    totalWithSavings
  });

const summary = `
Hi ${studentName},  ${studentID}, here's your weekly estimate:
Weekly Transport: KSh ${transportWeekly}
Weekly Snacks:
KSh ${snacksWeekly}
-------------------------------
Weekly Total:
KSh ${totalWeekly}
If you cut 10%:
KSh ${Math.round(totalWithSavings)} from your weekly spending,
You can save KSh ${Math.round(save10)} weekly! by reducing snack runs at Gavo's place or taking matatus before rush hour to avoid the crazy traffic jam on Thika road
`;
document.getElementById("summary").innerText = summary;
alert("Check your summary on the page. All details logged to console for debugging.");
}

//theme toggle
function toggleTheme() {
const current = document.body.style.backgroundColor;
document.body.style.backgroundColor = (current === "white"
|| current === "#e7e7c2ff") ? "#111" : "white";
document.body.style.color = (document.body.style.backgroundColor === "#2247fcff") ? "#fcfa9aff" : "#32346bff";
(document.body.style.backgroundColor === "#0a111dff") ? "white" :
"black";
console.log("Theme toggled. Background now:",
document.body.style.backgroundColor);
}