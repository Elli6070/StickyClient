'use strict';

var fs = require("fs");
var path = require("path");
var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);
var socket = require("socket.io-client")("http://land-it-prototype.herokuapp.com/");

socket.on("connect", () => {
	console.log("Connected to web app");
	socket.on("print message", (msg) => {
		console.log("printing " + msg);
	});
});

