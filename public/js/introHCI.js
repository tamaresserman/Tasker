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
	//$("#submitBtn").click(sendClick);
	$('#addBreak').click(function(){
		$('.breakTime').show();

	})
	$('#loginBtnA').click(sendClickA);
	$('#loginBtnB').click(sendClickB);
}

function sendClickA(e){
	console.log("button A clicked");
	ga('send','event','addBreakA','click');
}

function sendClickB(e){
	console.log("button B clicked");
	ga('send','event','addBreakB','click');
}