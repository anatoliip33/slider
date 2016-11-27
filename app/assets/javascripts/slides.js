$(function() {
  var $container = $('#slides');
      $slides = $container.find('img');
      slides_length = $slides.length;
      current_slide = 1;
      slide_width = $slides.width();
      slide_height = $slides.height();

  $('.container, #slides, gallery_image').css({
    width: (slide_width > 0) ? function() {return slide_width;} : 900,
    height: function() {
      return slide_height;
    }
  });

  $('a.gallery_bullet' + current_slide).addClass("active");

  $('a.previous').click(function() {
    $('img.preview_image' + current_slide).hide();
    $('a.gallery_bullet' + current_slide).removeClass("active");

    current_slide--;

    if (current_slide == 0) {
      current_slide = slides_length;
    }

    $('a.gallery_bullet' + current_slide).addClass("active");
    $('img.preview_image' + current_slide).show();

    return false;
  });

  $('a.next').click(function() {
    $('img.preview_image' + current_slide).hide();
    $('a.gallery_bullet' + current_slide).removeClass("active");

    current_slide++;

    if (current_slide == slides_length + 1) {
      current_slide = 1;
    }

    $('a.gallery_bullet' + current_slide).addClass("active");
    $('img.preview_image' + current_slide).show();

    return false;
  });

  $('.bullets a').click(change_slide(current_slide));
});

function change_slide(image_number) {
  $('img.preview_image' + current_slide).hide();
  current_slide = image_number;
  $('img.preview_image' + image_number).show();
  $('.bullets a').removeClass("active");
  $('a.gallery_bullet' + image_number).addClass("active");
}
