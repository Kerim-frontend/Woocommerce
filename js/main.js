$(function () {

 $('.review__sliders').slick({
  prevArrow: '<img class="slider-arrows slider-arrows__left"  src="img/arrowsright.png" alt=""></img>',
  nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrowsright.png" alt=""></img>',
  dots: false,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  infinite:false,
 })


  $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="images/Plus.svg" alt=""></div><div class="quantity-button quantity-down"><img src="images/-.svg" alt=""></div></div>').insertAfter('.quantity input');
  $('.quantity').each(function () {
      var spinner = $(this),
          input = spinner.find('input[type="number"]'),
          btnUp = spinner.find('.quantity-up'),
          btnDown = spinner.find('.quantity-down'),
          min = input.attr('min'),
          max = input.attr('max');

      btnUp.click(function () {
          var oldValue = parseFloat(input.val());
          if (oldValue >= max) {
              var newVal = oldValue;
          } else {
              var newVal = oldValue + 1;
          }
          spinner.find("input").val(newVal);
          spinner.find("input").trigger("change");
      });

      btnDown.click(function () {
          var oldValue = parseFloat(input.val());
          if (oldValue <= min) {
              var newVal = oldValue;
          } else {
              var newVal = oldValue - 1;
          }
          spinner.find("input").val(newVal);
          spinner.find("input").trigger("change");
      });

  });

  $(' .quantity-button').on('click', function () {
      let sumn = $('.guests').val() * $('.new-price').data('guests');
      $('.new-price').html('$' + sumn);
  });

});