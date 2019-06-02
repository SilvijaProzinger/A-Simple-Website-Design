/* toggle about menu slide text */

$('#slide').click(function(){
	$('#slide-txt').slideToggle(2000);
});

/* toggle the menu items */

$('#hamburger-menu').click(function(){
	$('#menu-items').slideToggle(1000);
});

/*
$(document).ready(function() {
    // run test on initial page load
    checkSize();

    // run test on resize of the window
    $(window).resize(checkSize);
});

//Function to the css rule
function checkSize(){
    ($(window).width() <= 621)
    	$('#slide').click(function(){
			$('#slide-txt').slideToggle({direction: 'right'}, 2000);
		});
    }
*/    