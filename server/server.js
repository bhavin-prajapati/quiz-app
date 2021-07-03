const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const routes = require('./routes/index.route');
const cors = require('cors');
 
const app = express();
 
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
 
app.use('/api', routes);
 
const port = process.env.PORT || '8000';
app.set('port', port);
 
const server = http.createServer(app);
 
server.listen(port, function () {
  console.info(`Server is up and running on port ${port}`)
});