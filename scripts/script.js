$(window).scroll(function() {
  if ($(this).scrollTop() > 250){  
      $('header').addClass("small-header");
      $('header').addClass("small-nav");
  }
  else{
      $('header').removeClass("small-header");
      $('header').removeClass("small-nav");
  }
});