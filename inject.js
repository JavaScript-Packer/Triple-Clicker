chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);
		
/* DO NOT EDIT ABOVE THIS LINE, DEFAULT TEMPLATE */

// Basically use any bookmarklet you want here made javascript

		window.addEventListener('click', function (x) {
	if (x.detail === 3) {
		window.scroll(0,0);
	}
});

/* DO NOT EDIT BELOW THIS LINE, DEFAULT TEMPLATE */
	}
	}, 10);
});
