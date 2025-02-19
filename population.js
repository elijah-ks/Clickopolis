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

// Population functions
document.addEventListener("DOMContentLoaded", function () {
    addEventListenerById("create-citizen", () => {
        if (foodCount >= foodCostPerCitizen && citizenCount < (apartmentCount * citizensPerApartment + smallHouseCount * citizensPerSmallHouse)) {
            foodCount -= foodCostPerCitizen;
            citizenCount++;
            readyToWork++;
            updateUI();
        }
    });

    addEventListenerById("assign-agricultural-worker", () => {
        if (readyToWork > 0) {
            agriculturalWorkerCount++;
            readyToWork--;
            updateUI();
        }
    });

    addEventListenerById("assign-lumberjack", () => {
        if (readyToWork > 0) {
            lumberjackCount++;
            readyToWork--;
            updateUI();
        }
    });

    addEventListenerById("assign-rock-miner", () => {
        if (readyToWork > 0) {
            rockMinerCount++;
            readyToWork--;
            updateUI();
        }
    });
});
