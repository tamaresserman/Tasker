'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.breakTime').hide();
	$("#submitBtn").click(sendClick);
	$('#addBreak').click(function(){
		$('.breakTime').show();

	})
}

function sendClick(e){
	console.log("button clicked");
	ga('send','event','addBreak','click');
}