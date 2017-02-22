/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.
var tweetData = {
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
}


  function createTweetElement(database) {

    const $tweet = $("<article>").addClass("content-tweet");

    const $header = $('<header>').addClass("header-tweet");
    const $username = $('<h3>').text(database.user.name).addClass("nameuser-tweet");
    const $avatar = $('<img>').attr('src', database.user.avatars.small).addClass("photo-tweet");
    const $handle = $('<p>').text(database.user.handle).addClass("handle-tweet");

    const $footer = $('<footer>').addClass("footer-tweet");
    const $date = $('<span>').text("N/A");
    const $icons = $('<div>').html('<i class="fa fa-heart"></i><i class="fa fa-retweet"></i><i class="fa fa-flag"></i>').addClass("icons");

    const $content = $('<p>').text(database.content.text).addClass("info-tweet");

    $footer.append($date, $icons);
    $header.append($handle, $avatar, $username);
    $tweet.append($header, $content, $footer);

    return $tweet;

  }

  var $tweet = createTweetElement(tweetData);

  // Test / driver code (temporary)
  console.log($tweet); // to see what it looks like

$(document).ready(function() {
  $('.displayed-tweet').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
});