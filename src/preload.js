window.onload = function() {
    document.getElementById("preloader").classList.add("opacity-0")
    document.getElementById("preloader").classList.remove("opacity-100")
    setTimeout(() => {
        document.getElementById('preloader').remove()
    }, '500');
};


function changeImage() {
    console.log("da");
    var play = document.getElementById('play');
    var stop = document.getElementById('stopplay');
    var video = document.getElementById('bgvideo');

    if (play.style.display !== 'none') {
        video.muted = !video.muted;
        play.style.display = 'none'
        stop.style.display = 'block';
    }
    else {
        video.muted = "true";
        play.style.display = 'block';
        stop.style.display = 'none';
    }
};