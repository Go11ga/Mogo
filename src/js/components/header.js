/* Header */
(function(){

    let header = $("#header");
    let scrollOffset = $(window).scrollTop();

    $(window).on("scroll",function(){

        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);

    });

    function checkScroll(scrollOffset){
        if(scrollOffset >= 300){
            header.addClass("header--fixed");
        } else {
            header.removeClass("header--fixed");
        }
    }

}());
