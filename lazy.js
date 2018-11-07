// (function lazy(){

//     function isInViewport(el){
//         var rect = el.getBoundingClientRect();
        
//         return (
//             rect.bottom >= 0 && 
//             rect.right >= 0 && 
//             rect.top <= (window.innerHeight || document.documentElement.clientHeight) && 
//             rect.left <= (window.innerWidth || document.documentElement.clientWidth)
//          );
//     }

//     var images = document.getElementsByClassName("tooManyImages");
//     for(var i = 0; i < images.length; i++){
//         if(isInViewport(images[i])) {
//             var img = images[i].getAttribute('data-src');
//             images[i].setAttribute('src', img);
//             images[i].removeAttribute('data-src');
//             console.log("final images!!!! ",images[i]);
//         };
//     }
// })();

(function lazy() {
    document.addEventListener("DOMContentLoaded", function() {
        var lazyImages = [].slice.call(document.querySelectorAll("img.tooManyImages"));
        console.log("tooManyImages ? ",lazyImages);
        if ("IntersectionObserver" in window) {
          let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
              if (entry.isIntersecting) {
                let lazyImage = entry.target;
                lazyImage.src = lazyImage.dataset.src;
                lazyImage.removeAttribute('data-src');
                lazyImageObserver.unobserve(lazyImage);
              }
            });
          });
      
          lazyImages.forEach(function(lazyImage) {
            lazyImageObserver.observe(lazyImage);
          });
        } else {
          // Possibly fall back to a more compatible method here
        }
      });
})();