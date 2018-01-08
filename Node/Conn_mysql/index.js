const express = require('express');
const path = require('path');
const app = express();

// view
let swig = require('swig');
const swig = new swig.Swig();

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
