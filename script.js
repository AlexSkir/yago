jQuery(document).ready(function () {
  let isLast = false;

  $('.btn-next').on('click', function () {
    // check on click if there is next slide, if true - slide to next
    if ($('.slides').find('.slide_active').next().hasClass('slide')) {
      $('.slides').find('.slide_active').removeClass('slide_active').next().addClass('slide_active');

      // make prev-btn active after slide forward
      if (!$('.btn-prev').hasClass('btn_active')) {
        $('.btn-prev').addClass('btn_active')
      }
      // check after slide if more next slides exist
      if (!$('.slides').find('.slide_active').next().hasClass('slide')) {
        $('.btn-next').removeClass('btn_active')
        console.log('that was the last slide')
      }
    }
  });

  $('.btn-prev').on('click', function () {
    //check on click if there is prev slide, if true - slide to prev
    if ($('.slides').find('.slide_active').prev().hasClass('slide')) {
      $('.slides').find('.slide_active').removeClass('slide_active').prev().addClass('slide_active');

      // make next-btn active after slide back
      if (!$('.btn-next').hasClass('btn_active')) {
        $('.btn-next').addClass('btn_active')
      }
      // check after slide if more prev slides exist
      if (!$('.slides').find('.slide_active').prev().hasClass('slide')) {
        $('.btn-prev').removeClass('btn_active')
        console.log('that was the first slide')
      }
    }
  });

  if (window.CSS) {
    if (!CSS.supports("display", "grid")) {
      console.log('support grid: ', CSS.supports("display", "grid"));
      if (!CSS.supports("display", "-ms-grid")) {
        console.log('support -ms-grid: ', CSS.supports("display", "-ms-grid"));
        $('.events-section-wrapper').css({
          'display': 'flex',
          'flex-wrap': 'wrap',
          'flex-direction': 'column',
          'max-width': '950px',
          'max-height': '1215px',
          'gap': '10px',
        });
        $('.events-section__paragraph').css({ 'margin-bottom': '73px' });
        $('.events-section__item.block__forth').css({ 'margin-bottom': '0' });
      }
    } else {
      console.log('support')
    }
  }
})
