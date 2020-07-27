$(document).ready(function() {
    $('.card-header h3').click(function() {
        $(this).next('.card-block').slideToggle();
        $(this).parent().toggleClass('active');
        $(this).parent().siblings().children('.card-block').slideUp();
        $(this).parent().siblings().removeClass('active');
    });
});
