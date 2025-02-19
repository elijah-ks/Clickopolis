document.addEventListener("DOMContentLoaded", function () {
    console.log("Script loaded successfully.");

    // Ask for city name and ruler name
    let cityName = prompt("What is the name of your civilization?");
    let rulerName = prompt("Who is ruling this city?");
    
    if (cityName && rulerName) {
        document.getElementById("city-name").innerText = `The City of ${cityName}`;
        document.getElementById("ruler-name").innerText = `Governed by ${rulerName}`;
    }

    // Resource values
    let foodCount = 0.0;
    let woodCount = 0.0;
    let rockCount = 0.0;
    let clayCount = 0.0;
    let brickCount = 0.0;
    let apartmentCount = 0;
    let smallHouseCount = 0;
    let citizenCount = 0;
    let readyToWork = 0;
    let agriculturalWorkerCount = 0;
    let lumberjackCount = 0;
    let rockMinerCount = 0;
    let brickmakerCount = 0;
    let manualRockClicks = 0;

    // Constants
    const maxFood = 100;
    const maxWood = 100;
    const maxRocks = 100;
    const woodCostPerApartment = 65;
    const woodCostPerSmallHouse = 45;
    const brickCostPerSmallHouse = 40;
    const foodCostPerCitizen = 25;
    const citizensPerApartment = 2;
    const citizensPerSmallHouse = 8;
    const foodConsumptionRate = 1;
    const foodProductionPerWorker = 1.2;
    const woodProductionPerLumberjack = 0.5;
    const rockProductionPerMiner = 0.2;
    const clayProductionRate = 4;
    const clayPerBrick = 2;
    const bricksProducedPerSecond = 2;

    // DOM elements
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
    const agriculturalWorkerCountElement = getEl("agricultural-worker-count");
    const lumberjackCountElement = getEl("lumberjack-count");
    const rockMinerCountElement = getEl("rock-miner-count");
    const brickmakerCountElement = getEl("brickmaker-count");

    // Function to check available housing space
    function getMaxCitizens() {
        return (apartmentCount * citizensPerApartment) + (smallHouseCount * citizensPerSmallHouse);
    }

    // Function to update UI values
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

        // Update production rates
        let foodProduction = agriculturalWorkerCount * foodProductionPerWorker;
        let foodConsumption = citizenCount * foodConsumptionRate;
        let netFoodRate = foodProduction - foodConsumption;
        updateRateDisplay(foodRateElement, netFoodRate);

        let woodProduction = lumberjackCount * woodProductionPerLumberjack;
        updateRateDisplay(woodRateElement, woodProduction);

        let rockProduction = rockMinerCount * rockProductionPerMiner;
        updateRateDisplay(rockRateElement, rockProduction);
    }

    function updateRateDisplay(element, rate) {
        element.innerText = rate.toFixed(1) + "/s";
        element.style.color = rate > 0 ? "green" : rate < 0 ? "red" : "black";
    }

    // Function to update resources every second
    function updateResources() {
        let foodProduction = agriculturalWorkerCount * foodProductionPerWorker;
        let foodConsumption = citizenCount * foodConsumptionRate;
        let netFoodChange = foodProduction - foodConsumption;

        foodCount += netFoodChange;
        foodCount = Math.max(0, Math.min(foodCount, maxFood));

        woodCount += lumberjackCount * woodProductionPerLumberjack;
        woodCount = Math.min(woodCount, maxWood);

        rockCount += rockMinerCount * rockProductionPerMiner;
        rockCount = Math.min(rockCount, maxRocks);

        if (manualRockClicks >= clayProductionRate) {
            clayCount += 1;
            manualRockClicks = 0;
        }

        let clayUsed = brickmakerCount * clayPerBrick;
        if (clayCount >= clayUsed) {
            clayCount -= clayUsed;
            brickCount += brickmakerCount * bricksProducedPerSecond;
        }

        if (foodCount <= 0 && citizenCount > 0) {
            let populationLost = Math.floor(citizenCount / 4);
            citizenCount -= populationLost;
            readyToWork = Math.max(0, readyToWork - populationLost);
        }

        updateUI();
    }

    setInterval(updateResources, 1000);

    // Button Event Listeners
    function addEventListenerById(id, callback) {
        const element = document.getElementById(id);
        if (element) element.addEventListener("click", callback);
    }

    addEventListenerById("gather-rocks", () => {
        if (rockCount < maxRocks) {
            rockCount += 1;
            manualRockClicks += 1;
            updateUI();
        }
    });

    addEventListenerById("build-apartment", () => {
        if (woodCount >= woodCostPerApartment) {
            woodCount -= woodCostPerApartment;
            apartmentCount += 1;
            updateUI();
        }
    });

    addEventListenerById("build-small-house", () => {
        if (woodCount >= woodCostPerSmallHouse && brickCount >= brickCostPerSmallHouse) {
            woodCount -= woodCostPerSmallHouse;
            brickCount -= brickCostPerSmallHouse;
            smallHouseCount += 1;
            updateUI();
        }
    });

    addEventListenerById("create-citizen", () => {
        if (foodCount >= foodCostPerCitizen && citizenCount < getMaxCitizens()) {
            foodCount -= foodCostPerCitizen;
            citizenCount += 1;
            readyToWork += 1;
            updateUI();
        }
    });

    console.log("All buttons and event listeners are now working!");
});
