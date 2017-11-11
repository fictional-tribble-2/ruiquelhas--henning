'use strict';

const Thurston = require('thurston');
const Supervizor = require('supervizor');

const internals = {};

internals.register = async function (server, options) {

    return await server.register({
        plugin: Supervizor,
        options: {
            validator: Thurston.validate,
            whitelist: options.whitelist
        }
    });
};

module.exports = {
    pkg: require('../package.json'),
    register: internals.register
};
