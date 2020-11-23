/* Accordion */
(function(){

    $(".accordion__item").on("click", function(event){
        event.preventDefault();
        var $this = $(this);

        $(".accordion__item").removeClass("accordion__item--active");
        $this.addClass("accordion__item--active");
    });

}());
