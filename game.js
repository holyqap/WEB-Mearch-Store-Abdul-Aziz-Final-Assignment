let points = 0;
let pointsPerSecond = 0;
let upgrades = [];
let upgradeCosts = {
  ["Wood Chest"]: 50,
  ["Silver Chest"]: 250,
  ["Gold Chest"]: 1000,
};
let upgradePPS = {
  ["Wood Chest"]: 1,
  ["Silver Chest"]: 10,
  ["Gold Chest"]: 50,
};
let upgradeButtons = document.querySelectorAll(".buy-btn");

setInterval(() => {
  points += pointsPerSecond;
  document.querySelector("#counter").innerHTML = points;
}, 1000);

upgradeButtons.forEach((button) => {
  button.addEventListener("click", buyUpgrade);
});

function buyUpgrade(event) {
  let currentUpgrade = event.target.getAttribute("data-upgrade");
  console.log(points);
  console.log(upgradeCosts[currentUpgrade]);
  if (points >= upgradeCosts[currentUpgrade]) {
    console.log("buying chest...");
    points -= upgradeCosts[currentUpgrade];
    pointsPerSecond += upgradePPS[currentUpgrade];
    upgrades.push(currentUpgrade);

    document.querySelector("#pps").innerHTML = pointsPerSecond;
    document.querySelector("#counter").innerHTML = points;
  }
}

document.querySelector(".click img").addEventListener(
  "click",
  (e) => {
    document.querySelector("#counter").textContent = ++points;
  },
  { passive: true }
);
