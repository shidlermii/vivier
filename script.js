$(document).ready(function(){
  $('.responsive').slick({
    dots: false, // Disable dots
    arrows: false, // Disable arrows
    infinite: true, // Enable infinite scrolling
    speed: 300,
    slidesToShow: 2, // Show 2 full photos on larger screens
    slidesToScroll: 1, // Scroll 1 at a time
    centerMode: true, // Enable center mode to show part of the next image
    centerPadding: '0px', // No padding for the center image
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Show 2 images on medium screens
          slidesToScroll: 1,
          centerPadding: '0px' // No padding for medium screens
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1, // Show 1 image on smaller screens
          slidesToScroll: 1,
          centerPadding: '0px' // No padding for smaller screens
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, // Show 1 image on extra small devices
          slidesToScroll: 1,
          centerPadding: '0px' // No padding for smallest screens
        }
      }
    ]
  });
});