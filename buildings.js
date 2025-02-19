// Building values
let apartmentCount = 0;
let smallHouseCount = 0;

// Constants
const woodCostPerApartment = 65;
const woodCostPerSmallHouse = 45;
const brickCostPerSmallHouse = 40;

// Building construction event listeners
document.addEventListener("DOMContentLoaded", function () {
    addEventListenerById("build-apartment", () => {
        if (woodCount >= woodCostPerApartment) {
            woodCount -= woodCostPerApartment;
            apartmentCount++;
            updateUI();
        }
    });

    addEventListenerById("build-small-house", () => {
        if (woodCount >= woodCostPerSmallHouse && brickCount >= brickCostPerSmallHouse) {
            woodCount -= woodCostPerSmallHouse;
            brickCount -= brickCostPerSmallHouse;
            smallHouseCount++;
            updateUI();
        }
    });
});
