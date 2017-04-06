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

    var deviceAnimationInterval;
    var $tagline = $('h2.tagline');
    var $mainCTA = $('.hero .button-primary');
    var $navLinks = $('.navbar ul a');
    typewriter.prepare('.typewriter');

    if (getParameterByName('ref') === 'producthunt') {
      // TODO: Show product hunt banner
      $('.product-hunt').velocity('transition.slideDownIn');
    }

    var animateDevices = function() {
      var $user1 = $('svg .user-1');
      var $user2 = $('svg .user-2');
      var $user3 = $('svg .user-3');

      var $message1 = $('svg .message-1');
      var $message2 = $('svg .message-2');
      var $message3 = $('svg .message-3');
      var $message4 = $('svg .message-4');

      var DURATION = 300;
      var DELAY = 500;

      $user1.velocity('transition.fadeIn', {
        loop: true,
        duration: DURATION,
      });

      $user2.velocity('transition.fadeIn', {
        loop: true,
        delay: DELAY,
        duration: DURATION
      });

      $user3.velocity('transition.fadeIn', {
        loop: true,
        delay: DELAY * 2,
        duration: DURATION,
      });

      $message1.velocity('transition.slideLeftIn', {
        loop: true,
        duration: DURATION
      });

      $message2.velocity('transition.slideRightIn', {
        loop: true,
        delay: DELAY,
        duration: DURATION
      });

      $message3.velocity('transition.slideLeftIn', {
        loop: true,
        delay: DELAY * 2,
        duration: DURATION
      });

      $message4.velocity('transition.slideLeftIn', {
        loop: true,
        delay: DELAY * 3,
        duration: DURATION
      });

      // Hide all the animated items
      setTimeout(function() {
        $user1.velocity('transition.fadeOut', { duration: 200 });
        $user2.velocity('transition.fadeOut', { duration: 200 });
        $user3.velocity('transition.fadeOut', { duration: 200 });
        $message1.velocity('transition.fadeOut', { duration: 200 });
        $message2.velocity('transition.fadeOut', { duration: 200 });
        $message3.velocity('transition.fadeOut', { duration: 200 });
        $message4.velocity('transition.fadeOut', { duration: 200 });
      }, 3500);
    };

    // Animate the hero items and nav bar
    $navLinks.velocity('transition.slideDownIn', {
      stagger: 150,
      visibility: 'visible'
    });

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

    var exampleWaypoint = new Waypoint({
      element: $('section.example')[0],
      offset: 150,
      handler: function(direction) {
        if (direction === 'down') {
          var gistId = $('.example .side-nav li.active button').data('target');
          $('#' + gistId).addClass('active').velocity('transition.expandIn', { duration: 300 });

          if (exampleWaypoint) {
            exampleWaypoint.disable();
          }
        }
      }
    });

    var featuresWaypoint = new Waypoint({
      element: $('section.features')[0],
      offset: 150,
      handler: function(direction) {
        var $features = $('.feature');

        if (direction === 'down') {
          // Animate features
          $features.velocity('transition.swoopIn', {
            duration: 300,
            stagger: 200,
            visibility: 'visible'
          });

          if (featuresWaypoint) {
            featuresWaypoint.disable();
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

    $('.example .side-nav button').on('touchstart mousedown', function(ev){
      ev.preventDefault();

      var $el = $(ev.currentTarget);
      
      // If we clicked the same button just ignore it.
      if ($el.parent('li').hasClass('active')) {
        return;
      }

      $el.parent('li').siblings('li').removeClass('active');
      $el.parent('li').addClass('active');

      var id = $el.data('target');
      $gist = $('#' + id);

      $('.gist.active').removeClass('active').velocity('transition.fadeOut', {
        duration: 100,
        complete: function(){
          $gist.addClass('active').velocity('transition.expandIn', { duration: 400 });
        }
      });
    });

    // Kick off the device animation loop
    animateDevices();
    // TODO (EK): cancel timeout when not in view
    deviceAnimationInterval = setInterval(animateDevices, 5000);


    // var twttr = window.twttr;

    // twttr.ready(function (twttr) {
    //   var ga = window.ga;
    //   twttr.events.bind('click', function(ev){
    //     if (!ev){
    //       return;
    //     }

    //     if (ev.type === 'click' && $(ev.target).hasClass('twitter-follow-button')) {
    //       ga('send', 'event', 'button', 'click', 'feathers follow button');
    //     }
    //   });

    //   twttr.events.bind('follow', function(ev){
    //     if (!ev){
    //       return;
    //     }
    //     ga('send', 'event', 'button', 'click', 'twitter follow button');
    //   });
    // });
  });
};

module.exports = App();