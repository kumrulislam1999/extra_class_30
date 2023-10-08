$(function () {
    $(".bannar_sliding_box").slick({
        accessibility: true,
        autoplay: true,
        autoplaySpeed: 1000,
        dots: true,
        arrows: true,
        appendArrows: $('.arrow_items'),
        prevArrow: "<i class='bx bxs-left-arrow-circle prev_arrow' ></i>",
        nextArrow: "<i class='bx bxs-right-arrow-circle next_arrow' ></i>",
        appendDots: $(".dot_items"),
    })
})