require('jquery');
require('velocity-animate');
require('velocity-animate/velocity.ui');
require('./jquery.waypoints.min.js');

var typewriter = require('typewriter-js');

jQuery.fn.reverse = [].reverse;

var App = function() {
  $('document').ready(function(){

    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        url = url.toLowerCase(); // This is just to avoid case sensitiveness  
        name = name.replace(/[\[\]]/g, "\\$&").toLowerCase();// This is just to avoid case sensitiveness for query parameter name
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    var $mainCTA = $('.hero .button-primary');
    typewriter.prepare('.typewriter');

    if (getParameterByName('ref') === 'producthunt') {
      // TODO: Show product hunt banner
      $('.product-hunt').velocity('transition.slideDownIn');
    }

    var quickStartWaypoint = new Waypoint({
      element: $('section.quick-start')[0],
      offset: 200,
      handler: function(direction) {
        if (direction === 'down') {
          typewriter.type('.typewriter', { delay: 25});

          if (quickStartWaypoint) {
            quickStartWaypoint.disable();
          }
        }
      }
    });
    
    $mainCTA.on('touchstart mousedown', function(ev){
      ev.preventDefault();
      ga('send', 'event', 'button', 'click', 'top_get_started_button');

      $('.quick-start').velocity("scroll", {
        container: $('body'),
        duration: 1000,
        easing: "easeInBack",
        offset: 1
      });
    });

    $('footer a').on('touchstart mousedown', function(ev) {
      var $el = $(ev.target);
      var text = $el.text();
      ga('send', 'event', 'link', 'click', text);
    });

    $('.callout button-primary').on('touchstart mousedown', function(ev) {
      ga('send', 'event', 'link', 'click', 'bottom_get_started_button');
    });

    $('.product-hunt .twitter-link').on('touchstart mousedown', function(ev) {
      ga('send', 'event', 'link', 'click', 'ph_twitter_share_link');
    });

    $('.product-hunt .github-link').on('touchstart mousedown', function(ev) {
      ga('send', 'event', 'link', 'click', 'ph_github_star_link');
    });

    $('.github-button').on('touchstart mousedown', function(ev) {
      ga('send', 'event', 'link', 'click', 'github_button');
    });

    // Kick off the device animation loop
    animateDevices();
    // TODO (EK): cancel timeout when not in view
    deviceAnimationInterval = setInterval(animateDevices, 5000);
  });
};

module.exports = App();