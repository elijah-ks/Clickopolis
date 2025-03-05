import { population, increasePopulation } from "./population.js";
import { buildHouse } from "./buildings.js";

// Define resources
export let resources = {
    food: 0,
    wood: 0,
    rock: 0,
    clay: 0,
    brick: 0,
    foodRate: 0,
    woodRate: 0,
    rockRate: 0
};

// Resource gathering functions
export function gatherWood() {
    if (resources.wood < 100) {
        resources.wood += 1;
        console.log("Wood gathered:", resources.wood);
        updateUI();
    }
}

document.addEventListener("DOMContentLoaded", function () {
    console.log("Resources script initialized.");

    // Attach event listeners properly
    const foodButton = document.getElementById("gather-food");
    const woodButton = document.getElementById("gather-wood");
    const rockButton = document.getElementById("gather-rocks");

    if (foodButton) {
        foodButton.addEventListener("click", () => {
            if (resources.food < 100) {
                resources.food += 1;
                updateUI();
            }
        });
    } else {
        console.error("Button 'gather-food' not found!");
    }

    if (woodButton) {
        woodButton.addEventListener("click", gatherWood);
    } else {
        console.error("Button 'gather-wood' not found!");
    }

    if (rockButton) {
        rockButton.addEventListener("click", () => {
            if (resources.rock < 100) {
                resources.rock += 1;
                updateUI();
            }
        });
    } else {
        console.error("Button 'gather-rocks' not found!");
    }
});