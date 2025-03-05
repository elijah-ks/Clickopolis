import { resources } from "./resources.js";
import { population } from "./population.js";

export function buildHouse() {
    console.log("House built!");
}

// Building values
let apartmentCount = 0;
let smallHouseCount = 0;

// Constants
const woodCostPerApartment = 65;
const woodCostPerSmallHouse = 45;
const brickCostPerSmallHouse = 40;

document.addEventListener("DOMContentLoaded", function () {
    console.log("Buildings script initialized.");

    // Attach event listeners properly
    const apartmentButton = document.getElementById("build-apartment");
    const smallHouseButton = document.getElementById("build-small-house");

    if (apartmentButton) {
        apartmentButton.addEventListener("click", () => {
            if (resources.wood >= woodCostPerApartment) {
                resources.wood -= woodCostPerApartment;
                apartmentCount++;
                updateUI();
                console.log("Apartment built! Total:", apartmentCount);
            } else {
                console.log("Not enough wood to build an apartment!");
            }
        });
    } else {
        console.error("Button 'build-apartment' not found!");
    }

    if (smallHouseButton) {
        smallHouseButton.addEventListener("click", () => {
            if (resources.wood >= woodCostPerSmallHouse && resources.brick >= brickCostPerSmallHouse) {
                resources.wood -= woodCostPerSmallHouse;
                resources.brick -= brickCostPerSmallHouse;
                smallHouseCount++;
                updateUI();
                console.log("Small house built! Total:", smallHouseCount);
            } else {
                console.log("Not enough resources to build a small house!");
            }
        });
    } else {
        console.error("Button 'build-small-house' not found!");
    }
});