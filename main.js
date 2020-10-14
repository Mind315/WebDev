jQuery(document).ready(function() {
   jQuery("a.down-link").click(function () {
   elementClick = jQuery(this).attr("href")
   destination = jQuery(elementClick).offset().top + 70;
   jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 2000);
   return false;
   });
   });

   $('.card-member-team').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: true,
      responsive: [
      {
         breakpoint: 1024,
         settings: {
         slidesToShow: 2,
         slidesToScroll: 1,
         infinite: true,
         dots: true
         }
      },
      {
         breakpoint: 750,
         settings: {
         slidesToShow: 1,
         slidesToScroll: 1
         }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
   ]
   });