var config = require('./config.json');
var businessLogic = require('./BusinessLogic/Calculations.js');

investmentFrequencyEnum = {
    1: "Monthly",
    2: "Annually"
}

investmentStartYear = config.investmentStartYear;
investmentStartMonth = config.investmentStartMonth;
investmentStartDate = config.investmentStartDate;
investmentFrequency = investmentFrequencyEnum[1];
schemeCode = config.schemeCode;
sellDate = config.sellDate;
sipAmount = config.sipAmount;

var main = async () => {
    buyDatesList = await businessLogic.getBuyDates(investmentStartYear, investmentStartMonth, investmentStartDate, investmentFrequency, sellDate);
    console.log("Buy Dates List = ", (buyDatesList));
    navLists = await businessLogic.getNavLists(buyDatesList, schemeCode);
    console.log("NAV List = ", (navLists));
    totalUnitsAccumulated = await businessLogic.getTotalUnitsAccumulated(navLists, sipAmount);
    console.log("Total units accum = ", totalUnitsAccumulated);
    var todaysPrice = await businessLogic.getNavByDay(schemeCode, sellDate);
    console.log("Sell Date price = ", todaysPrice);
    totalNav = totalUnitsAccumulated * todaysPrice;

    console.log("Total nav = ", totalNav);
}

main();





