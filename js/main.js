// --------- Responsive Navbar Animation on Hover -----------
function test(element) {
    var activeItemNewAnim = $(element);

    if (activeItemNewAnim.length) {
        var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
        var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
        var itemPosNewAnimTop = activeItemNewAnim.position();
        var itemPosNewAnimLeft = activeItemNewAnim.position();

        $(".hori-selector").css({
            "top": itemPosNewAnimTop.top + "px", 
            "left": itemPosNewAnimLeft.left + "px",
            "height": activeWidthNewAnimHeight + "px",
            "width": activeWidthNewAnimWidth + "px"
        });
    }
}

// Run test function on page load
$(document).ready(function(){
    setTimeout(() => test($("#navbarSupportedContent .active")), 500); // Allow time for styles to load

    // Change animation to hover instead of click
    $("#navbarSupportedContent").on("mouseenter", "li", function() {
        test(this);
    });

    // Adjust animation on window resize
    $(window).on("resize", function(){
        setTimeout(() => test($("#navbarSupportedContent .active")), 500);
    });
});

// -------------- Keep Active Class for Page Switching ----------
jQuery(document).ready(function($){
    var path = window.location.href.split("/").pop().split("?")[0];
    if (path === '') {
        path = 'index.html';
    }
    var target = $('#navbarSupportedContent ul li a[href="'+path+'"]');
    target.parent().addClass('active');
    test(target.parent());
});
