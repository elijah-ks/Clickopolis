import { resources } from "./resources.js";
import { buildHouse } from "./buildings.js";

export let population = 10;

export function increasePopulation() {
    population += 1;
    console.log("Population increased:", population);
    updateUI();
}

// Population values
let citizenCount = 0;
let readyToWork = 0;
let agriculturalWorkerCount = 0;
let lumberjackCount = 0;
let rockMinerCount = 0;

// Constants
const foodCostPerCitizen = 25;
const citizensPerApartment = 2;
const citizensPerSmallHouse = 8;

document.addEventListener("DOMContentLoaded", function () {
    console.log("Population script initialized.");

    // Attach event listeners properly
    const citizenButton = document.getElementById("create-citizen");
    const agriculturalWorkerButton = document.getElementById("assign-agricultural-worker");
    const lumberjackButton = document.getElementById("assign-lumberjack");
    const rockMinerButton = document.getElementById("assign-rock-miner");

    if (citizenButton) {
        citizenButton.addEventListener("click", () => {
            if (resources.food >= foodCostPerCitizen && citizenCount < (apartmentCount * citizensPerApartment + smallHouseCount * citizensPerSmallHouse)) {
                resources.food -= foodCostPerCitizen;
                citizenCount++;
                readyToWork++;
                updateUI();
                console.log("Citizen created! Total:", citizenCount);
            } else {
                console.log("Not enough food or housing to create a citizen!");
            }
        });
    } else {
        console.error("Button 'create-citizen' not found!");
    }

    if (agriculturalWorkerButton) {
        agriculturalWorkerButton.addEventListener("click", () => {
            if (readyToWork > 0) {
                agriculturalWorkerCount++;
                readyToWork--;
                updateUI();
                console.log("Agricultural worker assigned! Total:", agriculturalWorkerCount);
            }
        });
    } else {
        console.error("Button 'assign-agricultural-worker' not found!");
    }

    if (lumberjackButton) {
        lumberjackButton.addEventListener("click", () => {
            if (readyToWork > 0) {
                lumberjackCount++;
                readyToWork--;
                updateUI();
                console.log("Lumberjack assigned! Total:", lumberjackCount);
            }
        });
    } else {
        console.error("Button 'assign-lumberjack' not found!");
    }

    if (rockMinerButton) {
        rockMinerButton.addEventListener("click", () => {
            if (readyToWork > 0) {
                rockMinerCount++;
                readyToWork--;
                updateUI();
                console.log("Rock miner assigned! Total:", rockMinerCount);
            }
        });
    } else {
        console.error("Button 'assign-rock-miner' not found!");
    }
});