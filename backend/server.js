const express = require('express'),

	mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	cookieParser = require('cookie-parser'),
    methodOverride = require('method-override'),
	cors = require('cors'),
	app = express();



const env = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
	envConfig = require('./server/env')[env];

require('./database');

// hack to use async-await in controllers
require('express-async-errors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(methodOverride());
app.use(cookieParser());
app.use(express.static(__dirname + '/public'));

require('./server/routes')(app);

// Handling CORS
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
	if (req.method === "OPTIONS") {
		// Set allowed HTTP Methods
		res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
		return res.status(204);
	}
	next();
});

app.listen(envConfig.port, function(){
  console.log('Server listening on port ' + envConfig.port)
});

