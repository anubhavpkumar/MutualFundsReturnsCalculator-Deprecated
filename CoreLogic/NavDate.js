const request = require('request');

var GetNavDateAsync = async function GetNavDateAsync(schemeCode){
    return new Promise((resolve, reject) => {
        var Url = "https://api.mfapi.in/mf/".concat(schemeCode);
        request.get(Url, function(err, resp, body){
            if (body != null)
            {
                body = JSON.parse(body);
                var NavDate = {};
                //console.log(body.data);
                body.data.forEach((item,index) => {
                    NavDate[item.date] = item.nav;
                });
                resolve(NavDate);
            }
            else{
                reject(null);
            }
            }
        );
    })
}

var PrintResponse = async function PrintResponseAsync(schemeCode){
    var x = await GetNavDateAsync(schemeCode);
    console.log(x);
}

var GetNavByDate = async function GetNavByDateAsync(schemeCode, date){
    if (ValidateDateFormat(date))
    {
        var NavAndDate = await GetNavDateAsync(schemeCode);
        var i  = 0;
        while(i < 5){
            if(NavAndDate[date]){
                return NavAndDate[date];
            }
            i = i + 1;
            console.log("No NAV found for schemecode ", schemeCode, " on date ", date);
            return 0;
        }
    }
    else{
        console.error("Incorrect Date Format");
    }
}

var ValidateDateFormat = function(datestr){
    return Date.parse(datestr) != NaN;
}

var runTest = async (schemeCode, datestring) => {
    nav = await GetNavByDate(schemeCode, datestring);
    console.log("nav is ", nav);
}
runTest(118672, '24-01-2013');