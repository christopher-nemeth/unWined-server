
  module.exports = {
    development: {
      client: 'pg',
      connection: 'postgres://localhost/wine_tracker'
    },

    production: {
      client: 'pg',
      connection: process.env.DATABASE_URL
    }
  }