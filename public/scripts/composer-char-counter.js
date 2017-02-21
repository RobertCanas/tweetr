// document.getElementsByClassName("new-tweet")[0].getElementsByTagName("textarea")[0].addEventListener("keypress", function(event) {
//   console.log(event);
// });

$(document).ready(function() {
  const TWEET_LENGTH_MAX = 140;
 $('.new-tweet').on('keyup', 'textarea', function() {
  let charactersRemaining = TWEET_LENGTH_MAX - $(this).val().length;
  let counter = $(this).parent().children('.counter');
  let button = $(this).parent().children('input');
  counter.text(charactersRemaining);
  if (charactersRemaining < 0) {
    counter.addClass('error');
    button.attr('disabled', true);
  }
  else
  {
    counter.removeClass('error');
    button.attr('disabled', false);
  }
 });
});