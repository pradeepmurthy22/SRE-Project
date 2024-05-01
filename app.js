var express = require('express');
var promClient = require('prom-client');
var routes = require('./routes/route.js');

var app = express();

// Set view engine
app.set('view engine', 'ejs');

// Serve static files
app.use(express.static(__dirname + '/public'));

// Define your routes
app.get('/', routes.home);

// Define custom metrics
const customMetric = new promClient.Counter({
  name: 'custom_metric',
  help: 'Description of custom metric'
});

// Expose a /metrics endpoint to expose metrics
app.get('/metrics', (req, res) => {
  res.set('Content-Type', promClient.register.contentType);
  res.end(promClient.register.metrics());
});

// Start the server
var port = process.env.PORT || 3000;
var server = app.listen(port, function(req, res) {
  console.log("Catch the action at http://localhost:" + port);
});
