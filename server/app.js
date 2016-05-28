"use strict";

var express = require('express'),
    http = require('http'),
    https = require('https'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    request = require('request'),
    ErrorHandlerMiddleware = require('./middlewares/error-handler'),
    twitterPrecioCtrl = require('./twitter-precio/twitter-precio.controller'),
    app = express(),
    config = require('./config'),
    twitterTokens = require('./middlewares/twitter-tokens'),
    port = 3000,
    server;

app.use('/', bodyParser.urlencoded({extended: true}));
app.use('/', bodyParser.json());
app.use('/', cors({ origin: true }));
app.use(express.static('public'));
app.use('/twitter-precio', twitterPrecioCtrl(twitterTokens));

server = http.createServer(app).listen(port,function(){
	twitterTokens.twitterApiToken();
	console.log('Server iniciado en el puerto: ' + port)
});
app.use('/', ErrorHandlerMiddleware);