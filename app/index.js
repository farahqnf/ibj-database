const express = require("express");
const morgan = require("morgan");
const router = require("../config/routes");
const cors = require('cors');
require('dotenv').config();

// const publicDir = path.join(__dirname, "../public");
// const viewsDir = path.join(__dirname, "./views");
const app = express();

/** Install request logger */
app.use(morgan("dev"));

app.use(cors());

/** Install View Engine */
const path = require("path");

// app.set("views", viewsDir);
app.set("view engine", "ejs");
app.use(express.static('assets'));
app.set('views', path.join(__dirname, './views'))

/** Install JSON request parser */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/** Install Router */
app.use(router);

module.exports = app;
