var request = require('request');
var cheerio = require('cheerio');

var url = 'https://news.ycombinator.com/';

request(url, function(error, response, body) {
  var $ = cheerio.load(body);
  var titleContainers = $('td.title').has('.sitebit.comhead');

  var data = [];

  // equivalent to a for loop
  titleContainers.each(function(index, titleContainer) {
    var titleLink = $(titleContainer).find('a');

    var comments = $(titleContainer).parent().next().find('.subtext');

    data[index] = {
      title: titleLink.text(),
      link: titleLink.attr('href'),
      source: $(titleContainer).find('.sitebit.comhead').text(),
      score: comments.find('.score').text(),
      submitter: $(comments.find('a').get(0)).text(),
      numberComments: $(comments.find('a').get(1)).text(),
    };
  });

  console.log(data);
});
