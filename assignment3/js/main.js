 $(document).ready(onReady);

function onReady(){
	// 1. Event listener
	$('#search-button').on('click', onSearchButtonClick);
	//testing call
	// $('table').on('.entry tr', 'click', onRowClick);

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
			},
			onSearchResults,
			'json'
		);
	}
	function onSearchResults(data) {
		console.log('onSearchResults');
		console.log(data);
		console.log("ID for first result : " + data.Search[0].imdbID);

		var ID = data.Search[0].imdbID;
		var genre = '';
		var director = '';
		// create search table
		$('#dynamictable1').append('<table></table>');
		var table1 = $('#dynamictable1').children();    
		table1.append("<tr><td><strong>Title</strong></td><td><strong>Year</strong></td><td><strong>Genre</strong></td><td><strong>Director</strong></td></tr>");

		// create my 'watch' list
		$('#dynamictable2').append('<table></table>');
		var table2 = $('#dynamictable2').children();    
		table2.append("<tr><td><strong>Title</strong></td><td><strong>Year</strong></td><td><strong>Genre</strong></td><td><strong>Director</strong></td></tr>");

		for(var key in data.Search){
			console.log("Search Data: " + data.Search[key].Title);
			// genre = getInfo(data.Search[key].imdbID, "genre");
			// console.log("Genre: " + genre);
			// director = getDirector(ID);
			table1.append("<tr class='entry'><td>" + data.Search[key].Title  + "</td><td>" + data.Search[key].Year + "</td></tr>"/* + genre + "</td></tr>" + director + "</td></tr>"*/);
		}

		$('tr').click(function(){
			console.log("Row clicked!");
			console.log($(this).html());
		});
	}
}

function onRowClick(){
		console.log("Row clicked!");
		console.log($('this').html);
	}
	
	// function onRowClick(){
	// 	console.log("Row clicked!");
	// 	console.log($('this'));
	// }
	// function getInfo(data, info) {
	// 	console.log('getInfo');
	// 	console.log(data);
	// 	console.log(data.Genre);
	// 	var data1 = {};

	// 	if(info === "genre")
	// 	{
	// 		data1 = $.get(
	// 			'http://www.omdbapi.com',
	// 			{
	// 				i: data,
	// 			},
	// 			'json'
	// 		);
	// 	}
	// 	else if(info === "director"){
	// 		data1 = $.get(
	// 			'http://www.omdbapi.com',
	// 			{
	// 				i: data,
	// 			},
	// 			'json'
	// 		);
	// 	}
	// 	return data1;
	// }



