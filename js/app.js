


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

//hide arrows on page load
$(document).ready(function(){
 $(".arrows").hide();
});
//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");
//var $arrows = $(".arrows");





//Keep track of image index for prev/next, we will use a list index
//position to determine where we are and what it means to move forward
//and backwards by 1.

var $index = 0;


//An image to overlay
$overlay.append($image);


//A caption to overlay
$overlay.append($caption);

//$overlay.append($arrows);


//Add overlay
$("body").append($overlay);

//Capture the click event on a link to an image
$("#imageGallery a").click(function(event){
  event.preventDefault();
  //get the href of the image we will display in the lightbox from the link that was clicked
  var imageLocation = $(this).attr("href").addClass("selected");
  //Update overlay with the image linked in the link
  $image.attr("src", imageLocation);


  //Show the overlay.
  $overlay.show();

  //show arrows
  $(".arrows").show();


  //Hide fixed scroll bar with z-index that was previously getting in the way of te close button
  $("#top").hide();

  $("#leftArrow").show();

  $("#rightArrow").show();

  //Get child's alt attribute and set caption
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
});



//When overlay is clicked
$overlay.click(function(){
  //Hide the overlay
  $overlay.hide();

//Show fixed scroll bar with z-index
  $("#top").show();

  $(".arrows").hide();

  //$("#leftArrow").hide();

//  $("#rightArrow").hide();
});

//Next and previous arrow images
//var $leftArrow = $("#leftArrow");
//var $rightArrow = $("#rightArrow");
var $closeLightbox = $("<div id='closeLightbox'></div>");

$image.before($closeLightbox);
//$image.after($leftArrow);
//$image.after($rightArrow);

var $activeImg = $(".selected"); //global variable for current img
var $captionText; //new code

$('#rightArrow').click(function(){
  //.next() can only select elements, no attributes
  var $imageNext = $activeImg.parent().next().children().attr("href");
  $image.attr("src", $newPhoto);
  $captionText = $activeImg.parent().next().children("img").attr("alt");
  $caption.text($captionText);
  $activePhoto = $activeImg.next();
  console.log(imageNext);
  console.log(activeImg);
  $(this).append(imageNext);
});

$('#leftArrow').click(function(){
    //.prev() can only select elements, no attributes
  var $imagePrev = $activeImg.parent().prev().children().attr("href");
  $image.attr("src", $newPhoto);
  $captionText = $activeImg.parent().prev().children("img").attr("alt");
  $caption.text($captionText);
  $activePhoto = $activeImg.prev();
  console.log(imagePrev);
  console.log(activeImg);
  $(this).append(imagePrev);
});

//Keybaord navigation
$(document).ready(function() {
    $(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
			// Left arrow key pressed
			case 37:
				 $activeImg.parent().prev().children().attr("href");
				break;
			// Up Arrow Pressed
			case 38:
				 $activeImg.parent().prev().children().attr("href");
				break;
			// Right Arrow Pressed
			case 39:
				 $activeImg.parent().next().children().attr("href");
				break;
			// Down Arrow Pressed
			case 40:
				 $activeImg.parent().prev().children().attr("href");
				break;
      	}
	});
});
