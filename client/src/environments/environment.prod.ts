export const environment = {
  production: true,
  apis: {
    owm: {
      urlBase: 'api.openweathermap.org/data/2.5/weather',
      key: 'bf24d4ebdd1fd36ff8a1a73369906a37'
    },
    server: {
      urlBase: 'http://localhost:3000' // to change to deploy
    }
  }
};
