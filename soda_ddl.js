var SodaRequest = require('./soda_request');

function SodaDdl(url, username, password, token) {
  this.url = url;
  this.username = username;
  this.password = password;
  this.token = token;
}

SodaDdl.prototype.loadDatasetInfo = function(id) {
 var sr = new SodaRequest(this.url, this.username, this.password, this.token);
 return sr.get('/api/views/' + id, {'$$version': '2.0'});
}



module.exports = SodaDdl;
