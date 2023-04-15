// Please use Safari browser for a smooth experience


$(window).scroll(function() {
    $(".content").css("opacity", 1 - $(window).scrollTop() / 550);
});

$(window).scroll(function() {
    $(".content1").css("opacity", 1 - $(window).scrollTop() / 550);
});


$(function() {
    var setHeight = document.getElementById("set-height");
    const vid = document.getElementById('video1');
    var speed = 500;
  
    function update() {
      setHeight.style.height = Math.floor(vid.duration) * speed + "px";
      var frame = window.pageYOffset / speed;
      if (vid.currentTime != frame) {
        vid.currentTime = frame;
      }
      window.requestAnimationFrame(update);
    }
  
    window.requestAnimationFrame(update);
});