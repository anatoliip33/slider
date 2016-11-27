$(function() {
  var $container = $('#slides');
      $slides = $container.find('img');
      slides_length = $slides.length;
      current_slide = 1;
      slide_width = $slides.width();
      // slide_height = $slide.height();
      // slide_length = $slide.length;
      // total_width = slide_length * slide_width;
  $('.container').css({
    width: function() {
      return slide_width;
    }
  });

  $('a.previous').click(function() {
    $('img.preview_image' + current_slide).hide();
    // $('a.galleryBullet' + currentImage).removeClass("active");

    current_slide--;

    if (current_slide == 0) {
      current_slide = slides_length;
    }

    // $('a.galleryBullet' + currentImage).addClass("active");
    $('img.preview_image' + current_slide).show();

    return false;
  });

  $('a.next').click(function() {
    $('img.preview_image' + current_slide).hide();
    // $('a.galleryBullet' + current_slide).removeClass("active");

    current_slide++;

    if (current_slide == slides_length + 1) {
      current_slide = 1;
    }

    // $('a.galleryBullet' + current_slide).addClass("active");
    $('img.preview_image' + current_slide).show();

    return false;
  });



});
