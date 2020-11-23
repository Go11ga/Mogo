/* Nav-toggle */
(function(){

    $("#nav-toggle").on("click",function(event){
        event.preventDefault();

        $(this).toggleClass("nav-toggle--active");
        $("#nav").toggleClass("nav--active");

    });

}());
