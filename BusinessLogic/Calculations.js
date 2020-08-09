var dtman = require('./DateManipulations');
var coreLogic = require('../CoreLogic/NavDate');

var GetBuyDates = async (investmentStartYear, investmentStartMonth, investmentStartDate, investmentFrequency, sellDate) => {
    sellDateSplit = sellDate.split("-");
    sellYear = sellDateSplit[2];
    sellMonth = sellDateSplit[1];
    sellDay = sellDateSplit[0];

    var buyDates = [];
    currentDate = ([investmentStartDate, investmentStartMonth, investmentStartYear].join("-"));
    while (!dtman.IsSellDateReached(currentDate, sellDate)){
        buyDates.push(currentDate);
        if (investmentFrequency == "Monthly"){
            currentDate = dtman.IncreaseMonthByOne(currentDate);
        }
        else{
            currentDate = dtman.IncreaseYearByOne(currentDate);
        }
    }
    return buyDates;
}

var getNavLists = async (buyDatesList, schemeCode) => {
    navList = [];
    var i;
    for (i = 0; i < buyDatesList.length; i++){
        navList.push(await coreLogic.GetNavByDate(schemeCode, buyDatesList[i]));
    }
    return navList;
}

var getTotalUnitsAccumulated = (navList, sipAmount) => {
    var units = 0;
    for (i=0; i < navList.length; i++){
        units = parseFloat(units) + (parseFloat(sipAmount)/parseFloat(navList[i]));
    }
    return units;
}

var getNavByDay = async (schemeCode, date) => {
    return await coreLogic.GetNavByDate(schemeCode, date);
}

module.exports.getBuyDates = GetBuyDates;
module.exports.getNavLists = getNavLists;
module.exports.getTotalUnitsAccumulated = getTotalUnitsAccumulated;
module.exports.getNavByDay = getNavByDay;
