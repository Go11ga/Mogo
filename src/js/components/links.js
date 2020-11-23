/* Links shutdown */
(function(){

    let links = document.querySelectorAll("a");


    for (let i = 5; i <= 7; i++) {
        links[i].addEventListener("click",function(event){
            event.preventDefault();
        })
    }

    for (let i = 20; i <= 25; i++) {
        links[i].addEventListener("click",function(event){
            event.preventDefault();
        })
    }

    for (let i = 30; i <= 41; i++) {
        links[i].addEventListener("click",function(event){
            event.preventDefault();
        })
    }

}());
