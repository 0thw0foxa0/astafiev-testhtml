window.onload = function() {
    
    document.getElementById("preloader").classList.add("opacity-0")
    document.getElementById("preloader").classList.remove("opacity-100")
    setTimeout(() => {
        document.getElementById('preloader').remove()
    }, '500');
   
};