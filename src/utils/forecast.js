const request = require('request')

const forcast = (lat , long, callback) => {
   const url = 'http://api.weatherstack.com/current?access_key=6847f79f6a30e76fd5487a90c88b87f0&query=' + lat + ',' + long + ''

   request ({ url, json: true },(error, { body }) => {
       if (error) {
           callback('Unable to connect to weather service!', undefined)
       } else if (body.error) {
           callback('Unable to find location!', undefined)
       } else {
           callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature +  ' degress out. It feels like ' + body.current.feelslike + ' degress out. The humidity is ' + body.current.humidity + '%.')
       }
   })
}

module.exports = forcast