var request = require('request');
var cheerio = require('cheerio');

var url = 'https://news.ycombinator.com/';

request(url, function(error, response, body) {
  var data = {};

  var $ = cheerio.load(body);
  var rows = $('table table tr');

  console.log(rows.text())
})
