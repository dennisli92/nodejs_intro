var request = require('request');
var express = require('express');

var urlBuilder = function(zipcode, radius) {
  return 'http://www.walmart.com/store/ajax/finder?location=' + zipcode + '&distance=' + radius + '&is_search=true';
};
var app = express();

app.get('/:zipcode/:radius', function(req, res) {
  var zipcode = req.params.zipcode;
  var radius = req.params.radius;

  request(urlBuilder(zipcode, radius), function(error, response, body) {
    res.send(body);
    console.log(body);
  });

});

app.listen('8080');
