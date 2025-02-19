// Resource values
let foodCount = 0.0;
let woodCount = 0.0;
let rockCount = 0.0;
let clayCount = 0.0;
let brickCount = 0.0;
let manualRockClicks = 0;

// Constants
const maxFood = 100;
const maxWood = 100;
const maxRocks = 100;
const clayProductionRate = 4;

// Resource gathering event listeners
document.addEventListener("DOMContentLoaded", function () {
    addEventListenerById("gather-food", () => {
        if (foodCount < maxFood) {
            foodCount += 1;
            updateUI();
        }
    });

    addEventListenerById("gather-wood", () => {
        if (woodCount < maxWood) {
            woodCount += 1;
            updateUI();
        }
    });

    addEventListenerById("gather-rocks", () => {
        if (rockCount < maxRocks) {
            rockCount += 1;
            manualRockClicks += 1;
            updateUI();
        }
    });
});
