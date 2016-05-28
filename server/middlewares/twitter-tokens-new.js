"use strict";
var request = require('request');

var OAuth2 = require('oauth').OAuth2; 

var config = {
  consumerKey : "PJLlEtznTEuBkuV43tWa0bJ0D",
  consumerSecret : "jGgbEeqVa0P1yKLMnljXt0gkynNgXjqq9O9hc1X5G9JU9FVeYV",
  keysToBase64: "",
  twitterApiToken: twitterApiToken,
  accessToken: "",
  tokenType: "",
  tokenTypeEncoded: ""
};
var concatenated = config.consumerKey + ":" + config.consumerSecret;
config.keysToBase64 = new Buffer(concatenated).toString('base64');

function twitterApiToken(){
  var options = {
    uri: "https://api.twitter.com/oauth2/token",
    method: "POST",
    headers: {
     "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
     "Authorization": "Basic "+ config.keysToBase64
   },
   body: "grant_type=client_credentials"
  };
  request(options, function(error, response, body){
    body = eval("("+body+")");
    config.accessToken = body.access_token;
    config.tokenType = body.token_type;
    config.tokenTypeEncoded = new Buffer(body.access_token).toString('base64');
    console.log(config);
  })
}

module.exports = config;
