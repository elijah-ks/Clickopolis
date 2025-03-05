import { resources, gatherWood } from "./resources.js";
import { population, increasePopulation } from "./population.js";
import { buildHouse } from "./buildings.js";

document.addEventListener("DOMContentLoaded", function () {
    console.log("Game initialized!");

    // Ask for city name and ruler name
    let cityName = prompt("What is the name of your civilization?");
    let rulerName = prompt("Who is ruling this city?");

    if (cityName && rulerName) {
        document.getElementById("city-name").innerText = `The City of ${cityName}`;
        document.getElementById("ruler-name").innerText = `Governed by ${rulerName}`;
    }

    // Wait for UI elements to exist before adding event listeners
    const woodButton = document.getElementById("gather-wood");
    const citizenButton = document.getElementById("create-citizen");

    if (woodButton) {
        woodButton.addEventListener("click", () => {
            gatherWood();
            updateUI();
        });
    } else {
        console.error("Button 'gather-wood' not found!");
    }

    if (citizenButton) {
        citizenButton.addEventListener("click", () => {
            increasePopulation();
            updateUI();
        });
    } else {
        console.error("Button 'create-citizen' not found!");
    }

    console.log("Buttons linked successfully.");
    updateUI(); // Ensure UI starts with correct values
});

// Function to update UI values
function updateUI() {
    // Prevent "undefined" errors by providing default values (0)
    document.getElementById("food-count").innerText = (resources.food ?? 0).toFixed(1);
    document.getElementById("wood-count").innerText = (resources.wood ?? 0).toFixed(1);
    document.getElementById("rock-count").innerText = (resources.rock ?? 0).toFixed(1);
    document.getElementById("clay-count").innerText = (resources.clay ?? 0).toFixed(1);
    document.getElementById("brick-count").innerText = (resources.brick ?? 0).toFixed(1);
    document.getElementById("food-rate").innerText = (resources.foodRate ?? 0).toFixed(1) + "/s";
    document.getElementById("wood-rate").innerText = (resources.woodRate ?? 0).toFixed(1) + "/s";
    document.getElementById("rock-rate").innerText = (resources.rockRate ?? 0).toFixed(1) + "/s";
    document.getElementById("apartment-count").innerText = population.apartments ?? 0;
    document.getElementById("small-house-count").innerText = population.smallHouses ?? 0;
    document.getElementById("citizen-count").innerText = population.citizens ?? 0;
    document.getElementById("total-population").innerText = population.total ?? 0;
    document.getElementById("ready-to-work").innerText = population.readyToWork ?? 0;
}

// Auto-update the UI every second
setInterval(() => {
    updateUI();
}, 1000);

console.log("All game scripts are now working!");
