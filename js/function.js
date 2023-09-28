
$(document).ready(function () {
  /*Slider start*/
  $(".case_study_slider").slick({
    dots: false,
    arrows: true,
    infinite: true,
    centerMode: true,
    variableWidth: true,
    slidesToShow: 1,
    focusOnSelect: true
  });
  /*Slider End*/

  /*Slider start*/
  $(".hero__slider").slick({
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    focusOnSelect: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          fade: false,
          dots: true
        }
      }
    ]
  });
  /*Slider End*/

  /* case_logo_slider Slider start*/ 
$(".case_logo_slider").slick({
  dots: false,
  arrows:true,
  infinite: true,
  slidesToShow: 6,   
  slidesToScroll: 1,
  autoplay: true,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2,   
        slidesToScroll: 1,
        dots:true
      }
    }
  ]
}); 
/*case_logo_slider Slider End*/


  $('.testi-text').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    asNavFor: '.testi-thumb'
  });
  $('.testi-thumb').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.testi-text',
    dots: false,
    arrows: false,
    autoplay: true,
    centerMode: true,
    centerPadding: '0px',
    focusOnSelect: true
  });


  /* Menu icon click for mobile*/
  /* ------------------------------*/
  $(document).on('click', '.menu-icon', function () {
    $(this).toggleClass('active');
    if (!$('body').hasClass('menu-in')) {
      $('body').addClass('menu-in');
    }
    else {
      $('body').removeClass('menu-in');
    }
  });

  /* submenu arrows */
  $('.menu > li > a').click(function (e) {
    $(this).parent().addClass('MenuOpen');
  });
  $('.menu > li > .submenu ul li a').click(function (e) {
    $(this).parent().addClass('MenuOpen');
  });
  $('.back__menu').click(function (e) {
    $(this).parent().parent().removeClass('MenuOpen');
  });
  $('.btn-primary').hover(function (e) {
    $(this).children('.fa-angle-right').toggleClass('icon-Long-Arrow-Right');
  });

  $('.nav-pills a.nav-link , .scroll__page').click(function (e) {
    e.preventDefault();
    var target = $($(this).attr('href'));
    if (target.length) {
      var scrollTo = target.offset().top - 120;
      $('body, html').animate({
        scrollTop: scrollTo + 'px'
      }, 600);
    }
  });

  $('body').scrollspy({ target: '#navbar-example3', offset: 140 });

});


/*fix header on scroll*/
function stickyHeader() {
  //Check to see if the window is top if not then display button  
  $(window).scroll(function () {
    if ($(this).scrollTop() > 150) {
      $('.main-header').addClass('fix-header');
    } else {
      $('.main-header').removeClass('fix-header');
    }
  });
}
/*Funcations call*/
$(document).ready(function () {
  stickyHeader();
});
$(window).on('resize', function () {
  stickyHeader();
});

/*
const bg = document.querySelector('.title__section');
const bg2 = document.querySelector('.title__section__bg');
const windowWidth = window.innerWidth / 5;
const windowHeight = window.innerHeight / 5;
bg.addEventListener('mousemove', e => {
  if ($(window).width() > 1100)
    {
      const mouseX = e.clientX / windowWidth;
      const mouseY = e.clientY / windowHeight;
      bg2.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
    }
}); */

$(document).ready(function () {
  list_size = $("#all__resources .col-md-6").length;
  x = 6;
  $('#all__resources .col-md-6:lt(' + x + ')').show();

  $('#loadMore').click(function () {
    x = (x + 3 <= list_size) ? x + 3 : list_size;
    $('#all__resources .col-md-6:lt(' + x + ')').show();
    //hide loadmore when all items displayed  
    $(this).toggle(x < list_size);
  });
}); 