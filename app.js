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
app.get('/metrics', async (req, res) => {
  try {
    const metrics = await promClient.register.metrics();
    res.set('Content-Type', promClient.register.contentType);
    res.end(metrics);
  } catch (error) {
    console.error('Error generating metrics:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Start the server
var port = process.env.PORT || 3001;
var server = app.listen(port, function(req, res) {
  console.log("Catch the action at http://localhost:" + port);
});
