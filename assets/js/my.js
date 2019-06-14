//wait for the document to be complity loaded
$('document').ready(function() {
    //what we do mobile right Slide open
    $(".one").click(function() {
        $(".green").addClass("sideslide");
        $(".grey").removeClass("sideslide");
        $(".yellow").removeClass("sideslide");
        $(".rosa").removeClass("sideslide");
        $(".featclose").hide()
        $(".o-one").show();
        $(".one").hide();
    });
    $(".about-fixed").hide()
    $(".two").click(function() {
        $(".grey").addClass("sideslide");
        $(".green").removeClass("sideslide");
        $(".yellow").removeClass("sideslide");
        $(".rosa").removeClass("sideslide");
        $(".featclose").hide()
        $(".o-two").show();
        $(".two").hide();
    });
    $(".tree").click(function() {
        $(".yellow").addClass("sideslide");
        $(".green").removeClass("sideslide");
        $(".grey").removeClass("sideslide");
        $(".rosa").removeClass("sideslide");
        $(".featclose").hide()
        $(".o-tree").show();
        $(".tree").hide();
    });
    $(".four").click(function() {
        $(".rosa").addClass("sideslide");
        $(".green").removeClass("sideslide");
        $(".grey").removeClass("sideslide");
        $(".yellow").removeClass("sideslide");
        $(".featclose").hide()
        $(".o-four").show();
        $(".four").hide();
    });
    //what we do mobile close the slide
    $(".featclose").click(function() {
        $(".sideslide").removeClass("sideslide");
        $(".fa-angle-double-right").show();
        $(".featclose").hide();
    });
    //open the menu
    $("#bgm-btn").click(function() {
        $("#brg-menu").removeClass("menu-close");
        $("#brg-menu").addClass("menu-open");
        $(".fas").addClass("closeslide");
        $(".bgm-txt").addClass("textslide");
        $(".wrapper").addClass("click-tr");
        $(".social-icons").addClass("social-slide");
        $("#bgm-btn").removeClass("show");
    });
    //close the menu if u click text in the menu
    $(".textslide").click(function() {
        $("#brg-menu").addClass("menu-close");
        $(".fas").removeClass("closeslide");
        $(".bgm-txt").removeClass("textslide");
        console.log("hallo")
    });
    //close the menu on the X
    $(".close-trigger").click(function() {
        $("#brg-menu").addClass("menu-close");
        $(".fas").removeClass("closeslide");
        $(".bgm-txt").removeClass("textslide");
        $(".wrapper").removeClass("click-tr");
        $(".social-icons").removeClass("social-slide");
        $("#bgm-btn").addClass("show");
    });
    //work more button
    $(".more").click(function() {
        $(".work-cont").height("auto")
        $(".more").hide()
        $(".less").show()
    });
    //work close the work more
    $(".less").click(function() {
        //check the screen size and give the right height to the closed container
        if (window.screen.width > 450) {
            $(".work-cont").height("60vw")
        } else {
            $(".work-cont").height("360vw")
        }
        $(".less").hide()
        $(".more").show()
            //scrolls to the begin of the work container
        $('html, body').animate({
            scrollTop: $("#work").offset().top
        }, 100)
    });
    //cases more button
    $(".case-more").click(function() {
        $(".cases-cont").height("auto")
        $(".case-more").hide()
        $(".case-less").show()
    });
    //cases close the cases more
    $(".case-less").click(function() {
        if (window.screen.width > 450) {
            $(".cases-cont").height("60vw")
        } else {
            $(".cases-cont").height("360vw")
        }
        $(".case-less").hide()
        $(".case-more").show()
            //scrolls to the begin of the cases container
        $('html, body').animate({
            scrollTop: $("#cases").offset().top
        }, 100)
    });
    //opens press more
    $(".press-more").click(function() {
        $(".press-box").height("auto")
        $(".press-more").hide()
        $(".press-less").show()
    });
    // closes press more
    $(".press-less").click(function() {
        $(".press-box").height("30vw")
        $(".press-less").hide()
        $(".press-more").show()
            //scroll to press top
        $('html, body').animate({
            scrollTop: $("#press").offset().top
        }, 100)
    });
    //variablen for the burgermenu button 
    var $nav = $('#bgm-btn');
    var $win = $(window);
    var winH = $win.height(); // Get the window height.
    //makes the burgermenubutton visible after scrolling on screen
    $win.on("scroll", function() {
        if ($(this).scrollTop() > winH) {
            $nav.addClass("show");
        } else {
            $nav.removeClass("show");
        }
    }).on("resize", function() { // If the user resizes the window
        winH = $(this).height(); // you'll need the new height value
    });
    // variablen for the about parallax
    var $v = $('.about-fixed');
    var $w = $(window);
    var wH = $w.height(); // Get the window height.
    // shows the about cont after scrolling 4 screens to prevent seeing the about in the loading time
    $w.on("scroll", function() {
        if ($(this).scrollTop() > wH * 4) {
            $v.show();
            $("#mobile-eye").hide()
            $("#landingpage").hide()
        } else {
            $v.hide();
            $("#mobile-eye").show()
            $("#landingpage").show()
        }
    }).on("resize", function() { // If the user resizes the window
        wH = $(this).height(); // you'll need the new height value
    });
    var achor = $('#plattforms').offsetTop;
    var fixed = $('#selma');
    console.log(achor);
});
//backbutton from the detail screen
var domain = "https://" + window.location.hostname;

function close_view() {
    if (document.referrer == domain + "/index.html") {
        history.back();
    } else {
        if (window.location.hostname == "localhost") {
            history.back();
        } else {
            location.href = domain + "/index.html";
        }

    }
};