require('dotenv').config()
// Connect to the database
require('./config/database');
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
// favicon is NEW - for server routing
const logger = require('morgan');
const checkToken = require('./config/checkToken')

const app = express();

app.use(logger('dev'));
app.use(express.json());

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
// Configure both serve-favicon & static middleware to serve from the production 'build' folder
app.use(express.static(path.join(__dirname, 'build')));
app.use(checkToken)


//! Put API routes here, before the "catch all" route
app.use('/api/users', require('./routes/api/users'))
    // The following "catch all" route (note the *) is necessary to return the index.html on all non-AJAX requests
    //? https://create-react-app.dev/docs/deployment/
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

//! Configure to use port 3001 instead of 3000 during development to avoid collision with React's dev server
const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});
