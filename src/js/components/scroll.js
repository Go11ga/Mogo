/* Smooth scroll */
(function(){

    $("[data-scroll]").on("click", function(event){
        event.preventDefault();

        var $this = $(this);
        var blockId = $this.data("scroll");
        var blockOffset = $(blockId).offset().top - $("#header").outerHeight();

        $("#nav a").removeClass("nav__link--active");
        $this.addClass("nav__link--active");

        $("html,body").animate({
            scrollTop: blockOffset
        },1000);
    });

}());
