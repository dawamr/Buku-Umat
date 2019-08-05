const express = require('express');

const router = require('./routes/router.js');

import models, { sequelize } from './models';

const app = express();

app.use(router);



module.exports = app;