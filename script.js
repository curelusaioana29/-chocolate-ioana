$(document).ready(function(){
    $('.swiper-wrapper').slick({
            dots: true,
            infinite: true,
            arrows:true,
            speed: 500,
            
            cssEase: 'linear',
            slidesToShow: 1,
           
            responsive: [
              {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    
                  infinite: true,
                  dots: true,
                  infinite: true,
                  arrows:true,
                  speed: 500
            
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  arrows:true,
                  speed: 500
                  
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  arrows:true,
                  speed: 500,
                  
                }
              }
              // You can unslick at a given breakpoint now by adding:
              // settings: "unslick"
              // instead of a settings object
            ]
          });


  });

