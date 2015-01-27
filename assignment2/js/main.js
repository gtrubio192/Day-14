 $(document).ready(onReady);

function onReady() {
	// 1. Event listener
	$('#search-button').on('click', onSearchButtonClick);

	function onSearchButtonClick() {
		// 1. Input value
		console.log("Search: " + $('#search-box').val());
		imdbSearch($('#search-box').val());
		// $('#results').html($('#search-box').val());

	}

	function imdbSearch(query) {
		console.log('imdbSearch');
		$.get(
			'http://www.omdbapi.com',
			{
				s: query
				// y: year,
				// type: type,
				// tomatoes: tomatoes
			},
			onSearchResults,
			'json'
		);
	}

	function onSearchResults(data) {
		console.log('onSearchResults');
		console.log(data);
		console.log("ID for first result : " + data.Search[0].imdbID);
		// tomatoMeter(data.Search[0].imdbID);
	}

}

	// function tomatoMeter(x) {
	// 	console.log('tomatoMeter');
	// 	$.get(
	// 		'http://www.omdbapi.com',
	// 		{
	// 			i: x,
	// 			tomatoes: true
	// 		},
	// 		onTomatoResults,
	// 		'json'
	// 	);
	// }
	// function onTomatoResults(data) {
	// 	console.log('onTomatoResults');
	// 	console.log(data);
	// 	console.log(data['Genre']);
	// 	console.log(data.Genre);
	// }
	// var searchTerm = 'Godfather';
	// var year = 1972;
	// var type = 'movie';
	// var tomatoes = true;
	// imdbSearch(searchTerm, year, type, tomatoes);