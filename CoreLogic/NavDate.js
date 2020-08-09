const request = require('request');
const dtUtils = require('@anubhav.p.kumar/datetimeutil');

var GetNavDateAsync = async function GetNavDateAsync(schemeCode){
    return new Promise((resolve, reject) => {
        var Url = "https://api.mfapi.in/mf/".concat(schemeCode);
        request.get(Url, function(err, resp, body){
            if (body != null)
            {
                body = JSON.parse(body);
                var NavDate = {};
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

var CorrectDateString = (dtstring) => {
    dateSplit = dtstring.split("-");
    dateSplit = dateSplit.map((item) => {
        if (item.length == 1){
            item = "0" + item;
        }
        return item
    });
    return dateSplit.join("-");
}

var GetNavByDate = async function GetNavByDateAsync(schemeCode, date){
    var NavAndDate = await GetNavDateAsync(schemeCode);
    var dateObject = new dtUtils(date);
    var i  = 0;
    while(i < 5){
        var dateString = CorrectDateString(dateObject.GetNewDate());
        if(NavAndDate[dateString]){
            return NavAndDate[dateString];
        }
        i = i + 1;
        date = await dateObject.AddDaysToDate(1);
    }
    return undefined;
}



module.exports.GetNavByDate = GetNavByDate;
module.exports.CorrectDateString = CorrectDateString;