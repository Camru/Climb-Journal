/*******************
  UTILITY FUNCTIONS
********************/


(function() {

  // GOOGLE PLACES AUTOCOMPLETE API

  function initialize() {

    var input = document.getElementById('Location');
    var autocomplete = new google.maps.places.Autocomplete(input);
  }

  google.maps.event.addDomListener(window, 'load', initialize);

  // TYPE BUTTON SELECTOR

  $('.type-button').click(function(e) {
    e.preventDefault();
    $(this).siblings().removeAttr('id');
    $(this).attr('id', 'selected');

  });

}());