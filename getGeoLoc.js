require('dotenv').config({ path: '.env' })
const request = require('request');


const  searchLoc = (address,callback) => {
    request({
        url: `https://www.mapquestapi.com/geocoding/v1/address?key=${process.env.MAPQUEST_GEOCODE_KEY}&location=${address}`,
        json: true
    },(err, resp, body) => {
        if(err != null){
            console.error(err);
            callback('Please check your internet connection and try again 🤔')
        }
        else if(body.info.statuscode == 400){
            console.log(body);
            callback('Hey, no such place exist..!!, make sure you are searching earth for places');
        }
        else{
            callback(undefined,{
                latitute: body.results[0].locations[0].latLng.lat,
                longitude: body.results[0].locations[0].latLng.lng,
                street : body.results[0].locations[0].street,
                area5 : body.results[0].locations[0].adminArea5,
                state : body.results[0].locations[0].adminArea3 ||  body.results[0].locations[0].adminArea5,
                country : body.results[0].locations[0].adminArea1
            })
        }
    })
}

module.exports.searchLoc = searchLoc;