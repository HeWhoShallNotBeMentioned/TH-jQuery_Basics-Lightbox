//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");

// Add an image to overlay
$overlay.append($image);

// Add an overlay to page
$('body').append($overlay);

// Add a caption

// Capture the click event on a link to an image
$('#imageGallery a').click(function(event) {
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  // Update the overlay with the image linked in the link
  $image.attr("src", imageLocation);
  // Show the overlay
  $overlay.show();


  // Get child alt attribute and set caption
});


// When overlay is clicked
$overlay.click(function() {
  // Hide the overlay
    $overlay.hide();
});
