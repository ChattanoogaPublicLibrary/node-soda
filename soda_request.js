var request = require('request')
, Q = require('q');

function SodaRequest(url, username, password, token) {
  this.url = url;
  this.username = username; 
  this.password = password;
  this.token = token;
}

SodaRequest.prototype.get = function(resource, params) {
  var deferred = Q.defer()
  , options = {
    url: this.url + resource,
    qs: params,
    auth: {
     user: this.username,
     pass: this.password
    },
    headers: {
      'X-App-Token': this.token,
    },
    json: true
  };

  request.get(options, function(error, response, body) {
    if (error) {
      deferred.reject(new Error(error));
    } else {
      deferred.resolve(body);
    }
  });

  return deferred.promise;

}

SodaRequest.prototype.put = function(resource, params, payload) {
  var deferred = Q.defer()
  , options = {
    url: this.url + resource,
    body: payload,
    qs: params,
    auth: {
     user: this.username,
     pass: this.password
    },
    headers: {
      'X-App-Token': this.token,
    },
    json: true
  };

  request.put(options, function(error, response, body) {
    if (error) {
      deferred.reject(new Error(error));
    } else {
      deferred.resolve(body);
    }
  });

  return deferred.promise;

}

module.exports = SodaRequest;
