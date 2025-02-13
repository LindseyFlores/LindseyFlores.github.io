// --------- Responsive Navbar Animation Fix -----------
function test() {
    var tabsNewAnim = $('#navbarSupportedContent');
    var activeItemNewAnim = tabsNewAnim.find('.active');

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
    setTimeout(test, 500); // Allow time for styles to load

    // Navbar click event listener
    $("#navbarSupportedContent").on("click", "li", function() {
        $('#navbarSupportedContent ul li').removeClass("active");
        $(this).addClass('active');
        test();
    });
});

// Adjust animation on window resize
$(window).on('resize', function(){
    setTimeout(test, 5);
});



// -------------- Add active class when switching pages ----------
jQuery(document).ready(function($){
    // Get current path (ignoring query params)
    var path = window.location.href.split("/").pop().split("?")[0];

    // Default to index.html if path is empty
    if (path === '') {
        path = 'index.html';
    }

    // Find corresponding navbar link
    var target = $('#navbarSupportedContent ul li a[href="'+path+'"]');
    target.parent().addClass('active');
    test();
});

