/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.
var data = [{
  "user": {
    "name": "Newton",
    "avatars": {
      "small": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
      "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
      "large": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
    },
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}, {
  "user": {
    "name": "Descartes",
    "avatars": {
      "small": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
      "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
      "large": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
    },
    "handle": "@rd"
  },
  "content": {
    "text": "Je pense , donc je suis"
  },
  "created_at": 1461113959088
}, {
  "user": {
    "name": "Johann von Goethe",
    "avatars": {
      "small": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
      "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
      "large": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
    },
    "handle": "@johann49"
  },
  "content": {
    "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
  },
  "created_at": 1461113796368
}];
$(document).ready(function() {

  function timeSince(date) {

    var seconds = Math.floor((new Date() - date) / 1000);

    var interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
        return interval + " years";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
        return interval + " months";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
        return interval + " days";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
        return interval + " hours";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
        return interval + " minutes";
    }
    return Math.floor(seconds) + " seconds";
}

  function createTweetElement(database) {

    const $tweet = $("<article>").addClass("content-tweet");

    const $header = $('<header>').addClass("header-tweet");
    const $username = $('<h3>').text(database.user.name).addClass("nameuser-tweet");
    const $avatar = $('<img>').attr('src', database.user.avatars.small).addClass("photo-tweet");
    const $handle = $('<p>').text(database.user.handle).addClass("handle-tweet");

    const $footer = $('<footer>').addClass("footer-tweet");
    const $date = $('<span>').text(timeSince(database.created_at));
    const $icons = $('<div>').html('</i><i class="fa fa-flag"><i class="fa fa-retweet"></i><i class="fa fa-heart"></i>').addClass("icons");

    const $content = $('<p>').text(database.content.text).addClass("info-tweet");

    $footer.append($date, $icons);
    $header.append($handle, $avatar, $username);
    $tweet.append($header, $content, $footer);

    return $tweet;

  }


  // Test / driver code (temporary)
  //console.log($tweet); // to see what it looks like

  function renderTweets(tweets) {
    for (key of tweets) {
      $('.displayed-tweet').append(createTweetElement(key));
    }
  }
  renderTweets(data);

  //$('.displayed-tweet').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
});