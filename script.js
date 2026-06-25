let priceInput = document.querySelector("#price");
let hourWageInput = document.querySelector("#hourWage");
let itemNameInput = document.querySelector("#itemName");
let monthlySalaryInput = document.querySelector("#monthlySalary");

let report = document.querySelector(".reportModal");
let generateReportbtn = document.querySelector("#generateReport");

generateReportbtn.addEventListener("click", function () {

  let price = Number(document.querySelector("#price").value);
  let hourWage = Number(document.querySelector("#hourWage").value);
  let itemName = document.querySelector("#itemName").value;
  let monthlySalary = Number(document.querySelector("#monthlySalary").value);

  let finalHourWage;

  if (hourWage) {
    finalHourlyWage = hourWage;
  }
  else if (monthlySalary) {
    finalHourlyWage = monthlySalary / (22 * 8);
  }
  else {
    alert("Enter income details");
    return;
  }

  let hoursNeeded = price / finalHourlyWage;

  let daysNeeded = hoursNeeded / 8;

  let monthlyIncome = finalHourlyWage * 8 * 22;

  let impact = (price / monthlyIncome) * 100;

  let reportData = {
    itemName,
    price,
    hoursNeeded,
    daysNeeded,
    impact
  };

  rProduct.innerText = itemName;
  rPrice.innerText = "₹ " + price;

  rHours.innerText = hoursNeeded.toFixed(2) + " hrs";
  rDays.innerText = daysNeeded.toFixed(2) + " days";
  rImpact.innerText = impact.toFixed(2) + "%";

  overlay.style.display = "flex";

  if (impact < 10) {
    impactBox.innerText = "🟢 Low Impact Purchase";
    impactBox.style.color = "green";
  }

  else if (impact < 25) {
    impactBox.innerText = "🟡 Moderate Impact Purchase";
    impactBox.style.color = "orange";
  }

  else {
    let months = impact / 100;
    rImpact.innerText = "Needs " + months.toFixed(2) + " months of salary";
    impactBox.innerText = "🔴 High Impact Purchase";
    impactBox.style.color = "red";
  }

  closeBtn.addEventListener("click", function () {
    overlay.style.display = "none";
  });

});

let overlay = document.querySelector("#overlay");

let rProduct = document.querySelector("#rProduct");
let rPrice = document.querySelector("#rPrice");
let rHours = document.querySelector("#rHours");
let rDays = document.querySelector("#rDays");
let rImpact = document.querySelector("#rImpact");
let impactBox = document.querySelector("#impactBox");

let closeBtn = document.querySelector("#closeBtn");

let themeToggle = document.querySelector(".themeToggle");
let dayIcon = document.querySelector("#day");
let nightIcon = document.querySelector("#night");

let isDark = false;

themeToggle.addEventListener("click", function () {

  document.body.classList.toggle("dark");

  isDark = !isDark;

  if (isDark) {
    dayIcon.style.display = "none";
    nightIcon.style.display = "flex";
  } else {
    dayIcon.style.display = "flex";
    nightIcon.style.display = "none";
  }

});
