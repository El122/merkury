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
