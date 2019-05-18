window.addEventListener("load", function(){
	window.cookieconsent.initialise({
		"palette": {
			"popup": {
				"background": "rgba(0, 0, 0, 0.75);"
			},
			"button": {
				"background": "transparent",
				"text": "#1E99DE",
				"border": "#1E99DE"
			}
		},
		"content": {
			"message": "Questo sito fa uso di cookies per assicurarti la miglior esperienza possibile di navigazione.",
			"dismiss": "Ok",
			"link": "Informativa",
			"href": "/privacypolicy"
		}
	})
});