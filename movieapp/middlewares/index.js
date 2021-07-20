const morgan = require('morgan');
const { logger } = require('../configuration');
const express = require('express');

module.exports = {
    middleware: (app) => {
    //app.use(morgan('dev', {stream: logger.stream}));
    app.use(morgan('combined', {stream: logger.stream}));

    app.use(express.json()); // parse json post successfuly
    },

    auth: require('./auth') // once the user has token, the middleware will check it
}
