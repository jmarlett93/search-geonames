/**
 * [Doc Geonames API](http://www.geonames.org/export/webservice-exception.html)
 *
 * Error Code Description
 *  10 Authorization Exception
 *  11 record does not exist
 *  12 other error
 *  13 database timeout
 *  14 invalid parameter
 *  15 no result found
 *  16 duplicate exception
 *  17 postal code not found
 *  18 daily limit of credits exceeded
 *  19 hourly limit of credits exceeded
 *  20 weekly limit of credits exceeded
 *  21 invalid input
 *  22 server overloaded exception
 *  23 service not implemented
 *
 * Example :
 *   {"status": {
 *      "message": "we are afraid we could not find a administrative country subdivision for latitude and longitude :51.03,-20.0",
 *      "value": 15
 *   }}
 */

//var util = require('util');
var _ = require('underscore');

module.exports.parseData = function (data) {
  return data;
};

module.exports.parseError = function (error) {
  if (error && _.isObject(error)) {
    switch (error.code) {
      case 'ENOTFOUND':
        error.message = 'Connection refused.';
        break;
    }
  }
}