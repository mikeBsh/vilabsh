




//Main carousel slide navigation
(function($) {
    "use strict";

    // manual carousel controls
    $('.next').click(function(){ $('.carousel').carousel('next');return false; });
    $('.prev').click(function(){ $('.carousel').carousel('prev');return false; });
    
})(jQuery);
//JQUERY SNIPPET FOR SMOOTH SCROLLING

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .not('[href="#mycarousel"]')
  .not('[href="#cardCarousel"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });










/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("smallNav");
    if (x.className === "mySmallnav") {
        x.className += " responsive";
    } else {
        x.className = "mySmallnav";
        carousel.classList.remove("hov");
    }
}


// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myOtherFunction()};

// Get the navbar
var navbar = document.getElementById("nav-bar");
var carousel = document.getElementById("mycarousel");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myOtherFunction() {
	
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
    carousel.classList.add("hov");
  } else {
    navbar.classList.remove("sticky");
    carousel.classList.remove("hov");
  }
}

function myOtherFunctionTwo() {
   carousel.classList.remove("hov");
}