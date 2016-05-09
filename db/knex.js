module.exports = {

  development: {
    client: 'postgresql',
    connection: 'postgresql://localhost/pirates_development',
    pool: {
      min: 2,
      max: 10
    }
  }

};
