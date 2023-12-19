require('dotenv').config()

const express = require('express')
const morgan = require('morgan');
const methodOverride = require('method-override');

const route = require('./routes');
const db = require('./config/db');

const app = express()
const port = process.env.PORT || 9000

// connect to DB
db.connect();

// body-parser
app.use(
  express.urlencoded({
      extended: true,
  }),
);
app.use(express.json());

app.use(methodOverride('_method'));

// HTTP logger
app.use(morgan('dev'));

// Route init
route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});