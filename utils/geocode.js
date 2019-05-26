const request = require('request')

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiYmVub3IiLCJhIjoiY2p3NHhjaXhkMDk3azQzbnUzaWlzNnp6OSJ9.8PxCYUeMfyvl8Cx0vVCrLw&limit=1`
    request({url, json: true}, (error, {body}) => {
        if(error) {
            callback('Unable to connect to location services', undefined)
        } else if(body.features.length === 0) {
            callback('Unable to find location, Try another search', undefined)
        } else {
            const geocodeData = body.features
            callback(undefined, {
                longitude: geocodeData[0].center[0],
                latitude: geocodeData[0].center[1],
                location: geocodeData[0].place_name
            })
        }
    })
}

module.exports = geocode