
$( document ).ready(function () {

    // Hide the displayed menu by using Bootstrap Collapse
    $(window).scroll(function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Floating label headings for the contact form
    $("body")
        .on("input", ".form-item", function (event) {
            if ($(event.target).val() != "") {
                $(this).addClass("form-item-filled");
            }else{
                $(this).removeClass("form-item-filled");
            }
        })
        .on("focus", ".form-item", function () {
            $(this).addClass("form-item-focused");
        })
        .on("blur", ".form-item", function () {
            $(this).removeClass("form-item-focused");
        });

    // Control the behavior of the little bug - requires Animate.css
    $("#littleBug").mouseover(function() {
        $("#littleBug").addClass("animated zoomOutDown");
    });

    // Highlight the top nav as scrolling occurs using Bootstrap ScrollSpy
    $('body').scrollspy({
        target: '.navbar-fixed-top'
    });

    // jQuery for page scrolling feature - requires jQuery Easing plugin in an animate() call
    $('body').on('click', 'a.scrollable', function (event) {

        // $(this).attr('href') gets the value of href, for example, #portfolio
        // $("#portfolio").offset().top gets the top property of the section
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1500, 'easeInOutExpo');

        // prevent the link event from being triggered
        event.preventDefault();
    });

});
	