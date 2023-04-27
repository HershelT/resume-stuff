//Sidebar hover feature

$(document).on('mouseenter', '.setting', function() {
  // Show the show-more element
  $(this).find('.show-more').show();
});

$(document).on('mouseleave', '.setting', function() {
  // Hide the show-more element
  $(this).find('.show-more').hide();
});




