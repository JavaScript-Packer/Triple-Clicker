chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);
		window.addEventListener('click', function (x) {
	if (x.detail === 3) {
		window.scroll(0,0);
	}
});
	}
	}, 10);
});
