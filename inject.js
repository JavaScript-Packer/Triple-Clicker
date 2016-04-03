chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);
		
/* DO NOT EDIT ABOVE THIS LINE, DEFAULT TEMPLATE */

// Basically use any bookmarklet/javascript to be loaded as a new script to any webpage you surf to in Google Chrome Browser

window.addEventListener('click',function(x){if(x.detail===3){window.scroll(0,0)}});

/* DO NOT EDIT BELOW THIS LINE, DEFAULT TEMPLATE */

	}
	}, 10);
});
