var screenWid = document.body.clientWidth;

    if (screenWid >= 800) {
        document.logoImg.src = "img/Logo.png";
        document.screenImg.src = "img/screenText.png";
    } else {
        document.logoImg.src = "img/LogoMini.png";
        document.screenImg.src = "img/Screen.png";
    }

    if (screenWid >= 1100) {
        document.browserImg.src = "img/browser.png";
    } else {
        document.browserImg.src = "img/browserMini.png";
    }

window.addEventListener("resize", event => {
    var screenWid = document.body.clientWidth;

    if (screenWid >= 800) {
        document.logoImg.src = "img/Logo.png";
        document.screenImg.src = "img/screenText.png";
    } else {
        document.logoImg.src = "img/LogoMini.png";
        document.screenImg.src = "img/Screen.png";
    }

    if (screenWid >= 1100) {
        document.browserImg.src = "img/browser.png";
    } else {
        document.browserImg.src = "img/browserMini.png";
    }
})

$(document).ready(function() {
    $("#loginLink").click(function( event ){
        event.preventDefault();
        $(".overlay").fadeToggle("fast");
      });

    $(".logClose").click(function(){
        $(".overlay").fadeToggle("fast");
    });

    $(document).keyup(function(e) {
        if(e.keyCode == 27 && $(".overlay").css("display") != "none" ) { 
            event.preventDefault();
            $(".overlay").fadeToggle("fast");
        }
    });
});

$(document).ready(function() {
    $("#regLink").click(function( event ){
        event.preventDefault();
        $(".regOverlay").fadeToggle("fast");
      });

    $(".regClose").click(function(){
        $(".regOverlay").fadeToggle("fast");
    });

    $(document).keyup(function(e) {
        if(e.keyCode == 27 && $(".regOverlay").css("display") != "none" ) { 
            event.preventDefault();
            $(".regOverlay").fadeToggle("fast");
        }
    });
});

$(document).ready(function() {
    $("#manageLink").click(function( event ){
        event.preventDefault();
        $(".manageOverlay").fadeToggle("fast");
      });

    $(".manageClose").click(function(){
        $(".manageOverlay").fadeToggle("fast");
    });

    $(document).keyup(function(e) {
        if(e.keyCode == 27 && $(".manageOverlay").css("display") != "none" ) { 
            event.preventDefault();
            $(".manageOverlay").fadeToggle("fast");
        }
    });

    $(".manageOverlay").click(function(){
        $(".manageOverlay").fadeToggle("fast");
    });
});


$(document).ready(function() {
    $("#analyticsLink").click(function( event ){
        event.preventDefault();
        $(".analyticsOverlay").fadeToggle("fast");
      });

    $(".analyticsClose").click(function(){
        $(".analyticsOverlay").fadeToggle("fast");
    });

    $(document).keyup(function(e) {
        if(e.keyCode == 27 && $(".analyticsOverlay").css("display") != "none" ) { 
            event.preventDefault();
            $(".analyticsOverlay").fadeToggle("fast");
        }
    });

    $(".analyticsOverlay").click(function(){
        $(".analyticsOverlay").fadeToggle("fast");
    });
});


$(document).ready(function() {
    $("#organizeLink").click(function( event ){
        event.preventDefault();
        $(".organizeOverlay").fadeToggle("fast");
      });

    $(".organizeClose").click(function(){
        $(".organizeOverlay").fadeToggle("fast");
    });

    $(document).keyup(function(e) {
        if(e.keyCode == 27 && $(".organizeOverlay").css("display") != "none" ) { 
            event.preventDefault();
            $(".organizeOverlay").fadeToggle("fast");
        }
    });

    $(".organizeOverlay").click(function(){
        $(".organizeOverlay").fadeToggle("fast");
    });
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
    showSlides(slideIndex += 1);
}

function minusSlide() {
    showSlides(slideIndex -= 1);  
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}
