$(document).ready(function() {
  loadScores();
});

function loadScores() {
  $('#loader-wrapper').show();

  newTopics = $("#topics"),
  topics = [],
  totalScore = 0;

  // Json Parse Treehouse User Badges Info
  $.getJSON('https://teamtreehouse.com/taylorham.json', function (e) {

    var scores = e.points;
    var color = '#000';
    var colors = {};
    colors['Android'] = '#5cb860';
    colors['Business'] = '#f9845b';
    colors['CSS'] = '#3079ab';
    colors['Design'] = '#e59a13';
    colors['Development Tools'] = '#637a91';
    colors['HTML'] = '#39add1';
    colors['iOS'] = '#53bbb4';
    colors['Java'] = '#2c9676';
    colors['JavaScript'] = '#c25975';
    colors['PHP'] = '#7d669e';
    colors['Python'] = '#f092b0';
    colors['Ruby'] = '#e15258';
    colors['WordPress'] = '#838cc7';
    colors['Digital Literacy'] = '#c38cd4'

    // Construct Each badge's HTML
  	// $.each(t, function (e, t) {
    //   r += '<li><a href="' + t.url + '" target="_blank"><img src="' + t.icon_url + '" alt="' + t.name + '" title="' + t.name + '"/></a></li>';
  	// 	i++
  	// });

    var scoresArray = [];
  	$.each(scores, function (topic, score) {
      if (score !== 0) {
        if (topic.toLowerCase() === 'total') {
          $('strong.total').text(score);
        } else if (score >= 100) {
          scoresArray.push([topic, score]);
        }
      }
  	});

    // sort
    var sortedScores = [];
    if (scoresArray.length === 0) {
      sortedScores = scoresArray;
    } else {
      sortedScores = [scoresArray.shift()];
    }

    while (scoresArray.length > 0) {
      for (i = 0; i < sortedScores.length; i++) {
        if (scoresArray[0][1] > sortedScores[i][1]) {
          sortedScores.splice(i,0,scoresArray.shift());
          break;
        }
        if (i === sortedScores.length-1) {
          sortedScores.push(scoresArray.shift());
          break;
        }
      }
    }
    // make into html
    for (i = 0; i < sortedScores.length; i++) {
      var topic = sortedScores[i][0];
      var points = sortedScores[i][1];
      if (colors[topic]) {
        var color = colors[topic];
      }
      topics.push('<li class="' + topic.toLowerCase().replace(' ', '') + '" style="border-color:' + color + '"><em>' + topic + '</em><span>' + points  + '</span></li>');
    }

  	newTopics.append(topics);

    createPie(".legend");

    // Header Badges count generator
  	// $("#treehouse-count").append('I have earned ' + badgeCount + ' badges at Treehouse!');

    $('#loader-wrapper').fadeOut();
    $('.treehouse-widget').fadeIn();
  });
};

function createPie(legend) {
  var width = 280;
  var height = 280;
  var radius = Math.min(width, height) / 2;
  var colorArray = [];
  var legendArray = [];

  $(legend + ' li').each(function() {
    var legendObject = {};
    legendObject["topic"] = $(this).children('em').text();
    legendObject["color"] = $(this).css('border-color');
    colorArray.push($(this).css('border-color'));
    legendObject["points"] = $(this).children('span').text();
    legendArray.push(legendObject);
  });

  var color = d3.scale.ordinal().range(colorArray);

  var arc = d3.svg.arc()
      .outerRadius(radius - 20)
      .innerRadius(radius - 70);

  var pie = d3.layout.pie()
      .value(function(d) { return d.points; });

  var svg = d3.select(".pie").append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  var g = svg.selectAll(".arc")
      .data(pie(legendArray))
      .enter().append("g")
      .attr("class", "arc");

  g.append("path")
      .attr("d", arc)
      // .style("fill", function(d) { return color(d.data.topic); });

  g.append("title")
      .text(function(d) { return d.data.topic; });

  g.attr('id', function(d) { return ('pie-' + d.data.topic.toLowerCase().replace(' ', '')); });

  // var timeout;
  // svg.selectAll(".arc").on('mouseover', function(d) {
  //   var context = this;
  //   var args = [].slice.call(arguments);
  //   args.push(this);
  //   clearTimeout(timeout);
  //   timeout = setTimeout(function() {
  //     tooltip.show.apply(context, args);
  //   }, 0);
  // });
}
