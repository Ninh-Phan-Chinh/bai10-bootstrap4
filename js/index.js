$(document).ready(function () {
  $('.dot').click(function(){
    $('.dot').removeClass('.dot');
    $('.dot').removeClass('.style_dot');
    $(this).addClass('.style_dot')
})

$('.big_btn_new_item li a').click(function(){
  $('.big_btn_new_item li a').removeClass('color_btn_new_item');
  $(this).addClass('color_btn_new_item')
})
$('.menu_small_new_item a').click(function(){
  $('.menu_small_new_item a').removeClass('color_btn_new_item');
  $(this).addClass('color_btn_new_item')
})

  $('.slick_banner_left').slick({
    dots: true,
    customPaging : function(slider, i) {
    var thumb = $(slider.$slides[i]).data();
    return '<a type="button" class="dot"></a>';
            },
    responsive: [{ 
        breakpoint: 500,
        settings: {
            dots: false,
            arrows: false,
            infinite: false,
            slidesToShow: 2,
            slidesToScroll: 2
        } 
    }],
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          // dots: true
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          // dots: true
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
        }
      },
      // {
      //   breakpoint: 480,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1
      //   }
      // }
    ]
  });
  $('.slick_daily').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: '<button class="slide-arrow prev-arrow"><i class="fa fa-caret-left"></i></button>',
    nextArrow: '<button class="slide-arrow next-arrow"><i class="fa fa-caret-right"></i></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          // dots: true
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          // dots: true
        },
      },
      // {
      //   breakpoint: 600,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 2
      //   }
      // },
      // {
      //   breakpoint: 480,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1
      //   }
      // }
    ]
  });
  $('.slick_logo').slick({
    infinite: false,
    slidesToShow: 8,
    slidesToScroll: 5,
    autoplaySpeed: 2000,
    prevArrow: '<button class="slide-arrow prev-arrow_new_item"><i class="fa fa-caret-left"></i></button>',
    nextArrow: '<button class="slide-arrow next-arrow_new_item"><i class="fa fa-caret-right"></i></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: false,
          // dots: true
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: false,
          // dots: true
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
        }
      },
      // {
      //   breakpoint: 480,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1
      //   }
      // }
    ]
  });

  $('.slick_most_viewed').slick({
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 2,
    prevArrow: '<button class="slide-arrow prev-arrow"><i class="fa fa-caret-left"></i></button>',
    nextArrow: '<button class="slide-arrow next-arrow"><i class="fa fa-caret-right"></i></button>',
    // autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: false,
          // dots: true
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: false,
          // dots: true
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
        }
      },
      // {
      //   breakpoint: 480,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1
      //   }
      // }
    ]
  });
})

//   countdown


function disPlayCountDown(countDownDate) {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("date").innerHTML = "EXPIRED";
    return false;
  }
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  var result = [days, hours, minutes, seconds];
  return result;
}

var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

var countDownDate_2 = new Date("Jan 6, 2021 15:37:25").getTime();

var countDownDate_3 = new Date("Jan 7, 2023 15:37:25").getTime();

var countDownDate_4 = new Date("May 7, 2021 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

  var result = disPlayCountDown(countDownDate)
  // Output the result in an element with id="demo"
  document.getElementById("day").innerHTML = result[0];
  document.getElementById("hour").innerHTML = result[1];
  document.getElementById("min").innerHTML = result[2];
  document.getElementById("sec").innerHTML = result[3];

  var result_2 = disPlayCountDown(countDownDate_2)
  document.getElementById("day2").innerHTML = result_2[0];
  document.getElementById("hour2").innerHTML = result_2[1];
  document.getElementById("min2").innerHTML = result_2[2];
  document.getElementById("sec2").innerHTML = result_2[3];

  var result_3 = disPlayCountDown(countDownDate_3)
  document.getElementById("day3").innerHTML = result_3[0];
  document.getElementById("hour3").innerHTML = result_3[1];
  document.getElementById("min3").innerHTML = result_3[2];
  document.getElementById("sec3").innerHTML = result_3[3];

  var result_4 = disPlayCountDown(countDownDate_4)
  document.getElementById("day4").innerHTML = result_4[0];
  document.getElementById("hour4").innerHTML = result_4[1];
  document.getElementById("min4").innerHTML = result_4[2];
  document.getElementById("sec4").innerHTML = result_4[3];

  // If the count down is over, write some text 

}, 1000);