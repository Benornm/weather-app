const request = require('request')

const forecast = (lat, long, callback) => {
    const url = `https://api.darksky.net/forecast/601e39c3e449432f3bccbe4233f51128/${lat},${long}?units=si`
    request({url, json: true}, (error, {body}) => {
        if(error) {
            callback('Unable to connect to weather service', undefined)
        } else if(body.error) {
            callback('Unable to find location', undefined)
        } else {
            const currentlyData = body.currently
            const dailyData = body.daily
            callback(undefined, `${dailyData.data[0].summary} It is currently ${currentlyData.temperature} degress out. There is ${currentlyData.precipProbability}% chance of rain.`)

        }
    })
}

module.exports = forecast