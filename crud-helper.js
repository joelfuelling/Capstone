// Connect to the database
require('dotenv').config();
require('./config/database');

//*It's worth the short amount of time it takes to create a module we can load in a Node REPL any time we need to perform CRUD outside of our application.
//* The module is not run as part of the Express app - it's "external" to it.

//? There's no models to require at this time (Thurs @ lunchbreak), but we'll add them as we build out SEI CAFE:
// Require the Mongoose models
const User = require('./models/user');
// const Item = require('./models/item');
// const Category = require('./models/category');
// const Order = require('./models/order');

// Local variables will come in handy for holding retrieved documents
let user, item, category, order;
let users, items, categories, orders;