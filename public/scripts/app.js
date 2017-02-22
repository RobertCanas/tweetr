/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.

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

  function createTweetElement(tweets) {

    const $tweet = $("<article>").addClass("content-tweet");

    const $header = $('<header>').addClass("header-tweet");
    const $username = $('<h3>').text(tweets.user.name).addClass("nameuser-tweet");
    const $avatar = $('<img>').attr('src', tweets.user.avatars.small).addClass("photo-tweet");
    const $handle = $('<p>').text(tweets.user.handle).addClass("handle-tweet");

    const $content = $('<p>').text(tweets.content.text).addClass("info-tweet");

    const $footer = $('<footer>').addClass("footer-tweet");
    const $date = $('<span>').text(timeSince(tweets.created_at));
    const $icons = $('<div>').html('</i><i class="fa fa-flag"><i class="fa fa-retweet"></i><i class="fa fa-heart"></i>').addClass("icons");

    $header.append($handle, $avatar, $username);
    $footer.append($date, $icons);
    $tweet.append($header, $content, $footer);

    return $tweet;
  }

  // Test / driver code (temporary)
  //console.log($tweet); // to see what it looks like

  function renderTweets(tweets) {
    $('.displayed-tweet').empty();
    for (key of tweets) {
      $('.displayed-tweet').prepend(createTweetElement(key));
    }
  }

  function loadTweets() {
    $.ajax({
      method: 'GET',
      url: '/tweets',
      success: function(data) {
        renderTweets(data);
      }
    });
  }

  loadTweets();


  $('form').find('input').on('click', function(event) {
    event.preventDefault();
    const TWEET_LENGTH_MAX = 140;
    let $text = $('form').find('textarea').val().length;
    if ($text && $text <= TWEET_LENGTH_MAX) {
      $.ajax({
        method: 'POST',
        url: '/tweets',
        data: $(this).closest('form').serialize(),
        success: function() {
          loadTweets();
          $('form')[0].reset();
        }
      });
      return;
    } else if (!$text) {
      alert('nothing typed');
      return;
    } else if ($text > TWEET_LENGTH_MAX) {
      alert('Exceeding Limit');
      return;
    }



  });

});