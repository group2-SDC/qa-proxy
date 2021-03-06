const express = require('express');
const morgan = require('morgan');
const path = require('path');
const router = require('./router');

const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');
const app = express();

app.use(morgan('dev'));
app.use('/:listingid', express.static(PUBLIC_DIR));
// Should be something like /listing/:listingid
// Josh said may have to make a minor tweak to express.static


// Handling asset requests for webpack bundles by passing off requests to the bundles router
app.use('/:listing_id/bundles', router.bundles);
// Handling AJAX requests to the API by passing off requests to the api router
app.use('/api', router.api);

module.exports = app;