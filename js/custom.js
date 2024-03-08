(function ($) {
  "use strict";

  //sticky menu
  $(window).on("scroll", function () {
    var window_top = $(window).scrollTop() + 1;
    if (window_top > 50) {
      $(".header").addClass("menu_fixed animated fadeInDown");
    } else {
      $(".header").removeClass("menu_fixed animated fadeInDown");
    }
  });

  //counter js
  var time = $(".class");
  if (time.length > 0) {
    time.counterUp();
  }

  //parallax js
  $(function () {
    var $el = $(".parallax_bg");
    $(window).on("scroll", function () {
      var scroll = $(document).scrollTop();
      $el.css({
        "background-position": "50% " + +0.4 * scroll + "px",
      });
    });
  });

  // Preloader js
  $(window).on("load", function () {
    $(".preloder").hide();
    $(".loader").delay(3000).hide("slow");
  });

  //wow js
  var wow = new WOW({
    animateClass: "animated",
    offset: 100,
    mobile: false,
    duration: 1000,
  });
  wow.init();

  //scorll animation js
  var $title_overlay_effect = $(".title_overlay_effect");
  var $window = $(window);

  function scroll_addclass() {
    var window_height = $(window).height() - 200;
    var window_top_position = $window.scrollTop();
    var window_bottom_position = window_top_position + window_height;

    $.each($title_overlay_effect, function () {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = element_top_position + element_height;
      if (
        element_bottom_position >= window_top_position &&
        element_top_position <= window_bottom_position
      ) {
        $element.addClass("is_show");
      }
    });
  }

  $window.on("scroll resize", scroll_addclass);
  $window.trigger("scroll");

  $window.on("scroll resize", scroll_addclass);
  $window.trigger("scroll");

  function kidjo_rect_wrap(svg) {
    var width = svg.outerWidth(),
      height = svg.outerHeight(),
      svgRect = svg.find("rect"),
      x_pos_rect = svgRect.attr("x"),
      y_pos_rect = svgRect.attr("y");
    if (x_pos_rect) width = width - parseInt(x_pos_rect) * 2;
    if (y_pos_rect) height = height - parseInt(y_pos_rect) * 2;
    if (width * height > 0) {
      svgRect.attr("width", width);
      svgRect.attr("height", height);
    }
  }

  function kidjoHover() {
    jQuery("svg.pc-dashes").each(function () {
      var svg = jQuery(this);
      kidjo_rect_wrap(svg);
    });
  }
  $(document).ready(function () {
    kidjoHover();
  });
})(jQuery);
