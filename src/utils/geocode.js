const request = require('request') 

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoiZHVjaGllcDUxIiwiYSI6ImNqenA5OTAxMDBuNjYzbXJxZ25jaTlkYjUifQ.7uYtQQYFmeQlrXDDFEuhrQ'
    request({ url, json: true }, (error, { body }) => {
        if(error) {
            callback('Unable to connect to location services!', undefined)
        } else if(body.features.length === 0) {
            callback('Unable to find location. Try another search', undefined)
        } else {
            const {center, place_name} = body.features[0]
            callback(undefined, {
                latitute: center[1],
                longitute: center[0],
                location: place_name
            })
        }
    })
}

module.exports = geocode