(function lazy(){

    function isInViewport(el){
        var rect = el.getBoundingClientRect();
        
        return (
            rect.bottom >= 0 && 
            rect.right >= 0 && 
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) && 
            rect.left <= (window.innerWidth || document.documentElement.clientWidth)
         );
    }

    var images = document.getElementsByClassName("tooManyImages");
    for(var i = 0; i < images.length; i++){
        if(isInViewport(images[i])) {
            var img = images[i].getAttribute('data-src');
            images[i].setAttribute('src', img);
            images[i].removeAttribute('data-src');
            console.log("final images!!!! ",images[i]);
        };
    }
})();