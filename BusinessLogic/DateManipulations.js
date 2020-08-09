var IsSellDateReached = (currentDate, sellDate) => {
    currentDateSplit = (currentDate.split("-"));
    sellDateSplit = (sellDate.split("-"));
    if (parseInt(currentDateSplit[2]) == parseInt(sellDateSplit[2])){
        if (parseInt(currentDateSplit[1]) == parseInt(sellDateSplit[1])){
            return parseInt(currentDateSplit[0]) >= parseInt(sellDateSplit[0]);
        }
        else{
            return parseInt(currentDateSplit[1]) > parseInt(sellDateSplit[1]);
        }
    }
    else{
        return parseInt(currentDateSplit[2]) > parseInt(sellDateSplit[2]);
    }
}

var IncreaseMonthByOne = (currentDate) => {
    currentDateSplit = currentDate.split("-");
    currentDateSplit[1] = parseInt(currentDateSplit[1]) + 1;
    if (currentDateSplit[1] == 13){
        currentDateSplit[1] = 1;
        currentDateSplit[2] = parseInt(currentDateSplit[2]) + 1;
    }
    currentDate = currentDateSplit.join("-");
    return currentDate;
}

var IncreaseYearByOne = (currentDate) =>{
    currentDateSplit = currentDate.split("-");
    currentDateSplit[2] = parseInt(currentDateSplit[2]) + 1;
    currentDate = currentDateSplit.join("-");
    return currentDate;
}

module.exports.IsSellDateReached = IsSellDateReached;
module.exports.IncreaseMonthByOne = IncreaseMonthByOne;
module.exports.IncreaseYearByOne = IncreaseYearByOne;