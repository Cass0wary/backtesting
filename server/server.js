const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors");
require('dotenv').config();

const backtestRanges = require('./routes/backtestRanges');
const backtestStrategyRouter = require('./routes/backtestStrategy');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Middleware
app.use(express.json());

// Routes
app.use('/api/backtestRange', backtestRanges);
app.use('/api/backtestStrategy', backtestStrategyRouter);

app.listen(process.env.PORT, () => {
  console.log("Server running on port "+process.env.PORT);
});