document.addEventListener("DOMContentLoaded", function () {
    console.log("Script loaded successfully.");

    // Ask for city name and ruler name
    let cityName = prompt("What is the name of your civilization?");
    let rulerName = prompt("Who is ruling this city?");

    if (cityName && rulerName) {
        document.getElementById("city-name").innerText = `The City of ${cityName}`;
        document.getElementById("ruler-name").innerText = `Governed by ${rulerName}`;
    }

    // UI Elements
    const getEl = id => document.getElementById(id);
    const foodCountElement = getEl("food-count");
    const woodCountElement = getEl("wood-count");
    const rockCountElement = getEl("rock-count");
    const clayCountElement = getEl("clay-count");
    const brickCountElement = getEl("brick-count");
    const foodRateElement = getEl("food-rate");
    const woodRateElement = getEl("wood-rate");
    const rockRateElement = getEl("rock-rate");
    const apartmentCountElement = getEl("apartment-count");
    const smallHouseCountElement = getEl("small-house-count");
    const citizenCountElement = getEl("citizen-count");
    const totalPopulationElement = getEl("total-population");
    const readyToWorkElement = getEl("ready-to-work");

    function addEventListenerById(id, callback) {
        const element = document.getElementById(id);
        if (element) element.addEventListener("click", callback);
    }

    setInterval(() => {
        foodCount -= citizenCount * foodConsumptionRate;
        foodCount = Math.max(0, foodCount);

        if (manualRockClicks >= clayProductionRate) {
            clayCount += 1;
            manualRockClicks = 0;
        }

        updateUI();
    }, 1000);

    function updateUI() {
        foodCountElement.innerText = foodCount.toFixed(1);
        woodCountElement.innerText = woodCount.toFixed(1);
        rockCountElement.innerText = rockCount.toFixed(1);
        clayCountElement.innerText = clayCount.toFixed(1);
        brickCountElement.innerText = brickCount.toFixed(1);
        apartmentCountElement.innerText = apartmentCount;
        smallHouseCountElement.innerText = smallHouseCount;
        citizenCountElement.innerText = citizenCount;
        totalPopulationElement.innerText = citizenCount;
        readyToWorkElement.innerText = readyToWork;
    }

    console.log("All game scripts are now working!");
});
