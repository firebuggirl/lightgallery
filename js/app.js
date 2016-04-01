


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
 $(".arrows").hide();//hide arrows div on page load
 $("iframe").hide();//hide iframe on page load
});
//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");
//var $arrows = $(".arrows");
var $iframe = $("<iframe></iframe>");





//Keep track of image index for prev/next, we will use a list index
//position to determine where we are and what it means to move forward
//and backwards by 1.

var $index = 0;


//An image to overlay
$overlay.append($image);


//A caption to overlay
$overlay.append($caption);

//$overlay.append($arrows);

//add video to overlay
$overlay.append($iframe);




//Add overlay
$("body").append($overlay);

//Capture the click event on a link to an image
$("#imageGallery a").click(function(event){
  event.preventDefault();
  //get the href of the image we will display in the lightbox from the link that was clicked
  var imageLocation = $(this).addClass("selected").attr("href");

  var videoLocation = $(this).addClass("selected").attr("href");
  //Update overlay with the image linked in the link
  $image.attr("src", imageLocation);

  $iframe.attr("src", videoLocation);


  //Show the overlay.
  $overlay.show();

  //show arrows div
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

$("#top").click(function(){

  $overlay.hide();
});




$( "body" ).on( "click",'#rightArrow', function() {

  var $activeImg = $(".selected");
  var $captionText = $(".selected").children("img").attr("alt");
  var $imageNext = $activeImg.closest('li').next('li').find('a').addClass('selected').attr("href");

  $activeImg.removeClass('selected');



  $image.attr("src", $imageNext);
  $captionNext = $captionText;
  $caption.text($captionNext);

  console.log($imageNext);
  console.log($activeImg);
  console.log($captionText);
  console.log($captionNext);

});

$( "body" ).on( "click",'#leftArrow', function() {

  var $activeImg = $(".selected");
  var $captionText = $(".selected").children("img").attr("alt");
  var $imagePrev = $activeImg.closest('li').prev('li').find('a').addClass('selected').attr("href");
  $activeImg.removeClass('selected');

  $image.attr("src", $imagePrev);
  $captionPrev = $captionText;
  $caption.text($captionPrev);

  console.log($imagePrev);
  console.log($activeImg);
  console.log($imagePrev);
  console.log($captionPrev);

});



//Keybaord navigation
$(document).ready(function() {
    $(document).keydown(function(key) {
      var $activeImg = $(".selected");
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
