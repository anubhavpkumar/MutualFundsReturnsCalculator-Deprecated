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

var PrintResponse = async function PrintResponseAsync(){
    var x = await GetNavDateAsync(118672);
    console.log(x);
}
PrintResponse();