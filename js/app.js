


$("#search").keyup(function() {
    var search = $(this).val();
    console.log(search);
    $(".galleryDiv img").each(function() {
    console.log($(this).attr("alt").search);
        var searchAttr = $(this).attr("alt");
        if(searchAttr.toLowerCase().search(search.toLowerCase()) > -1) {
            $(this).show();
        } else {
            $(this).fadeOut();
        }
    });
});

//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");


//Keep track of image index for prev/next, we will use a list index
//position to determine where we are and what it means to move forward
//and backwards by 1.

var $index = 0;


//An image to overlay
$overlay.append($image);


//A caption to overlay
$overlay.append($caption);



//Add overlay
$("body").append($overlay);

//Capture the click event on a link to an image
$("#imageGallery a").click(function(event){
  event.preventDefault();
  //get the href of the image we will display in the lightbox from the link that was clicked
  var imageLocation = $(this).attr("href");
  //Update overlay with the image linked in the link
  $image.attr("src", imageLocation);


  //Show the overlay.
  $overlay.show();



  //Get child's alt attribute and set caption
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
});

//When overlay is clicked
$overlay.click(function(){
  //Hide the overlay
  $overlay.hide();
});

//Next and previous arrow images
var $leftArrow = $("<div id='leftArrow'></div>");
var $rightArrow = $("<div id='rightArrow'></div><div style='clear:left'></div>");
var $closeLightbox = $("<div id='closeLightbox'></div><div style='clear:both'></div>");

$image.before($closeLightbox);
$image.before($leftArrow);
$image.after($rightArrow);

$('#rightArrow').click(function(){
  var imageNext = $("#imageGallery a").attr("href").next("href");
  var imagePrev = $("#imageGallery a").attr("href").prev("href");
$(this).append(imageNext);
});
$('#leftArrow').click(function(){
  var imageNext = $("#imageGallery a").attr("href").prev("href");
$(this).append(imagePrev);
});

//Keybaord navigation
$(document).ready(function() {
    $(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
			// Left arrow key pressed
			case 37:
				$('imageGallery a').attr('href').prev();
				break;
			// Up Arrow Pressed
			case 38:
				$('imageGallery a').attr('href').prev();
				break;
			// Right Arrow Pressed
			case 39:
				$('imageGallery a').attr('href').next();
				break;
			// Down Arrow Pressed
			case 40:
				$('imageGallery a').attr('href').next();
				break;
      	}
	});
});
