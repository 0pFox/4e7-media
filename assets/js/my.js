//wait for the document to be complity loaded
$('document').ready(function() {
    $(window).on("load", function() {
        $.each($(".gridimg"), function(k, v) {
            if ($(this).width() > 200) { $(this).parent().addClass("big"); }
        });
    });
    $(window).on("load", function() {
        $.each($(".press-img"), function(k, v) {
            if ($(this).width() > 200) { $(this).parent().addClass("big"); }
        });
    });


    $(window).on('load', function() {
        var $th = $(".ab-txt").height() + 5
        console.log($th)
        $('.main-img').css('margin-top', $th)
    });
    var $os = $('#campaigns').offset()
    var $fos = $('#features').offset()

    $(window).on("scroll", function() {
        var $os = $('#campaigns').offset()
        var $fos = $('#features').offset()
        var $eh = $('#eye').height()
        if ($(this).scrollTop() > $os.top + $wb + 80 && $(this).scrollTop() < $fos.top - 800) {
            $("#eye").css("z-index", "10000")
        } else {
            $('#eye').css("z-index", "-2")
        }
    });
    var $wp = $(window).width() * 0.7
    var $hp = $(window).height()

    $(window).on('load', function() {
        if ($hp >= $wp) {
            $('.bgvideo').css({ 'height': '100vh', 'width': 'auto' })
        } else {
            $('.bgvideo').css({ 'height': 'auto', 'width': '100vw' })
        }
    })
    var $wb = $(window).height()
    var $first = $('#features').offset()
    var $second = $('#about-ph').offset()
    var $ftoggle = $first.top - $wb
    var $stoggle = $second.top
    console.log($ftoggle)
    console.log($stoggle)

    $(window).on("scroll", function() {
        if ($(this).scrollTop() > $ftoggle && $(this).scrollTop() < $ftoggle + $wb) {
            $("#bgm-btn").css("color", "#2c2c26")
        } else if ($(this).scrollTop() > $stoggle) {
            $("#bgm-btn").css("color", "#2c2c26")
        } else {
            $('#bgm-btn').css("color", "#FFFFFF")
        }
    }).on("resize", function() { // If the user resizes the window
        $wb = $(this).height(); // you'll need the new height value
    });

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
        $("#press-gal").height("auto")
        $(".press-more").hide()
        $(".press-less").show()
    });
    // closes press more
    $(".press-less").click(function() {
        $("#press-gal").height("180px")
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
            $("#landingpage").hide()
            $("#mobile-eye").show()
            $('#eye').show();
            $('eye-links').show();
        } else {
            $nav.removeClass("show");
            $("#landingpage").show();
            $("#mobile-eye").hide();
            $('#eye').hide();
            $('eye-links').hide();
        }
    }).on("resize", function() { // If the user resizes the window
        winH = $(this).height(); // you'll need the new height value
    });
    //grid size
    $.each($(".gridimg"), function(k, v) {
        console.log("Key: " + k + ", Value: " + v);
    });

    // variablen for the about parallax
    var $v = $('.about-fixed');
    var $w = $(window);
    var wH = $w.height(); // Get the window height.
    // shows the about cont after scrolling 4 screens to prevent seeing the about in the loading time
    $w.on("scroll", function() {
        if ($(this).scrollTop() > wH * 6) {
            $('.about-fixed').css("display", "flex");
            $('#eye').hide();
            $('.eye-links').hide();
            $('#alex').show();
        } else if ($(this).scrollTop() > wH * 5 && $(window).width() < 1200) {
            $('.fixed-p').hide();
            $("#mobile-eye").hide()
            $('.m-eye-links').hide();
            $('#alex').show();
            $('.about-fixed').show();
        } else if ($(this).scrollTop() < wH * 5 && $(window).width() < 1200) {
            $('.fixed-p').show();
            $("#mobile-eye").show()
            $('.m-eye-links').css("display", "flex");
            $('#alex').hide();
            $('.about-fixed').hide();
        } else {
            $('.about-fixed').css("display", "none");
            $('.eye-links').show();
            $('#alex').hide();
        }
    }).on("resize", function() { // If the user resizes the window
        wH = $(this).height(); // you'll need the new height value
    });
    /*$(window).on("load", function() {
            var $divh = $('.about_text').css('height')
            console.log($divh)
            $('.main-img').height($divh)
        })*/
    /*var $achor = $('#about-ph').offset();
    var $fixed = $('#selma');
    var $isPositionFixed = ($fixed.css('position') == 'fixed');
    console.log(achor.top + $(window).height());
    $(window).on("scroll", function() {
        if ($(this).scrollTop() > $(window).height() * 9.5 && !$isPositionFixed) {
            $("#selma").css({ "position": "fixed", "top": "0px" })
        } else {
            $("#selma").css({ "position": "static" })
        }
    });*/
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
}