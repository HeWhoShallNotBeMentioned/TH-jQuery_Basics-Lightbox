//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

// Add an image to overlay
$overlay.append($image);

// Add a caption
$overlay.append($caption);

// Add an overlay to page
$('body').append($overlay);



// Capture the click event on a link to an image
$('#imageGallery a').click(function(event) {
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  // Update the overlay with the image linked in the link
  $image.attr("src", imageLocation);

  // Get child alt attribute
  var imageCaption = $(this).children("img").attr("alt");

  //Set Caption
  $caption.text(imageCaption);

  // Show the overlay
  $overlay.show();



});


// When overlay is clicked
$overlay.click(function() {
  // Hide the overlay
    $overlay.hide();
});
