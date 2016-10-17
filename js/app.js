//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox

// 1. Capture the click event on a link to an image
$('#imageGallery a').click(function(event) {
  event.preventDefault();
  var melanie = $(this).attr("href");
  console.log(melanie);
  // 1.1 Show the overlay
  // 1.2 Update the overlay with the image linked in the link
  // 1.3 Get child alt attribute and set caption
});

// 2. Add on overlay
  // 2.1 And an image
  // 2.2 Add a caption
// 3. When overlay is clicked hide the overlay
