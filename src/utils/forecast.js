const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {

  const url = 'http://api.weatherstack.com/current?access_key=d9011a86ea1cf9d8d2264c1e3b4649eb&query=' + latitude + ',' + longitude + '&units=f'

  request({url, json: true}, (error, { body } = {}) => {
    if(error){
      callback('Unable to connect to weather service', undefined)
    } else if (body.error === 0) {
      callback('Unable to find the location!', undefined)
    } else {
      callback(undefined, 'In ' + body.location.name + ' at ' + body.current.observation_time + ', it is currently ' + body.current.temperature + ' degrees with a ' + body.current.precip + '% chance of rain. The humidity is ' + body.current.humidity + '.')
    }
  })
}

module.exports = forecast
