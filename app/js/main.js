$(function(){
    $('.top-slider__inner').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000
       });
});

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
 