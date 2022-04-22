<document.addEventListener("DOMContentLoaded", function () {
    let icon_bars = document.querySelectorAll('.icon-bars');
    let menu_mobile = document.querySelector('.header-menu--list_item');
    // icon-bars add/close
    icon_bars.forEach(element => {
        element.addEventListener("click", () => {
            menu_mobile.classList.toggle("active");
            if ($(menu_mobile).hasClass("active")) {
                $(".icon-bars").addClass("opened")
                $("body").addClass("overflow");
            } else {
                $("body").removeClass("overflow");
                $(".icon-bars").removeClass("opened")
            }
        })
    });

    $(".header-mobile li").on("click", function (e) {
        e.stopPropagation();
        var element = $(this);
        if (element.hasClass("open")) {
            element.removeClass("open");
            element.find("li").removeClass("open");
            element.find("ul").slideUp(400,
                "swing");
        } else {
            element.addClass("open");
            element.children("ul").slideDown(400, "swing");
            element.siblings("li").children("ul").slideUp(400, "swing");
            element.siblings("li").removeClass("open");
            element.siblings("li").find("li").removeClass("open");
            element.siblings("li").find("ul").slideUp(400, "swing");
        }
    });

});
// SLIDER
var interleaveOffset = 0.5;
var swiperOptions = {
    loop: true,
    speed: 500,
    parallax: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
    },
    grabCursor: true,
    watchSlidesProgress: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><circle r="13" cy="15" cx="15"></circle></svg></span>';
        },
    },
    on: {
        progress: function () {
            var swiper = this;
            for (var i = 0; i < swiper.slides.length; i++) {
                var slideProgress = swiper.slides[i].progress;
                var innerOffset = swiper.width * interleaveOffset;
                var innerTranslate = slideProgress * innerOffset;
                swiper.slides[i].querySelector(".slide-inner").style.transform =
                    "translate3d(" + innerTranslate + "px, 0, 0)";
            }
        },
        touchStart: function () {
            var swiper = this;
            for (var i = 0; i < swiper.slides.length; i++) {
                swiper.slides[i].style.transition = "";
            }
        },
        setTransition: function (speed) {
            var swiper = this;
            for (var i = 0; i < swiper.slides.length; i++) {
                swiper.slides[i].style.transition = speed + "ms";
                swiper.slides[i].querySelector(".slide-inner").style.transition =
                    speed + "ms";
            }
        }
    }
};

// var swiper = new Swiper(".main-slider", swiperOptions);


// DATA BACKGROUND IMAGE
var pageSection = $("*");
pageSection.each(function (indx) {
    if ($(this).attr("data-background")) {
        $(this).css("background", "url(" + $(this).data("background") + ")");
    }
});

// DATA BACKGROUND COLOR
var pageSection = $("*");
pageSection.each(function (indx) {
    if ($(this).attr("data-background")) {
        $(this).css("background", $(this).data("background"));
    }
});
// scroll header
window.onscroll = () => { myFunction() };

var header = document.querySelector('.header');

var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        console.log(sticky);
        $(".header-menu ").addClass("active");
    } else {
        $(".header-menu ").removeClass("active");
    }
}