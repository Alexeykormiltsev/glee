$(function(){
    $('.top-slider__inner').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000
       });
});

$('.product-slide__thumb').slick({
  asNavFor: '.product-slide__big',
  focusOnSelect: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  vertical: true,
  draggable: false
});
$('.product-slide__big').slick({
  asNavFor: '.product-slide__thumb',
  draggable: false,
  arrows: false,
  fade: true
});
$('.select-style, .product-one__item-num').styler();

$('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
  },
  });
  $('.filter-product__star ')
  .rateYo({
    starWidth: "17px",
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
    readOnly: true,
    spacing: "5px"
  });
  $('.product-item__star')
  .rateYo({
    starWidth: "22px",
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
    readOnly: true,
    spacing: "5px"
  });
 