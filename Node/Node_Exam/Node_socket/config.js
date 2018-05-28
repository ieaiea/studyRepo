module.exports = {
  port : 3000,
  secret : 'secret',
  redisPort : 6379,
  redisHost: 'localhost',
  reouts : {
    login : '/account/login',
    logout : '/account/logout'
  }
};