$(window).scroll(function() {
    $(".content").css("opacity", 1 - $(window).scrollTop() / 550);
});

$(window).scroll(function() {
    $(".content1").css("opacity", 1 - $(window).scrollTop() / 550);
});

var frame = 0;
var speed = 500;
var setHeight = document.getElementById("set-height")
const vid = document.getElementById('video1'); 

vid.addEventListener('loadedmetadata', function() {
    setHeight.style.height = Math.floor(vid.duration) * speed + "px";
});

function animate(){  
    var frame  = window.pageYOffset/speed;
    if(vid.currentTime != frame) {
        vid.currentTime  = frame;
    }
    
    window.requestAnimationFrame(animate);
}

window.requestAnimationFrame(animate);