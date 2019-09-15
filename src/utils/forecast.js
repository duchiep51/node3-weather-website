const request = require('request')

const forecast = (latitute, longitute, callback) => {
    const url = 'https://api.darksky.net/forecast/5e2a8e89f77520a330fb8a481ef47d72/' + latitute + ',' + longitute

    request({ url, json: true }, (error, { body }) => {
        if(error) {
            callback('Unable to connect to weather service', undefined)
        } else if(body.error) {
            callback('No location found', undefined)
        } else {
           callback(undefined, body.daily.data[0].summary)
        }
    })
}

module.exports = forecast