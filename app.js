$(function(){
	

	$("#search-form").submit(function(event){
		console.log("in");
		event.preventDefault();
		var searchString = $("#query-string").val();
		getRequest(searchString);
	});
});

function getRequest( searchString ){
	console.log("in");
	var params = {
		part:"snippet",
		key:"AIzaSyCJi9qyraZ4u1TqjBpGd2bT1ecquVW40ho",
		q: searchString
	}
	url = "https://www.googleapis.com/youtube/v3/search";
	$.getJSON(url,params,function(data){
		showResults(data);
	});

}

function showResults( data ){
	
	for( var i = 0; i < data.items.length; i++){
		console.log(data.items[0]);
		$('#search-results').append("<a target = '_blank' href = https://www.youtube.com/watch?v="+data.items[i].id.videoId + ' ><img src =' +data.items[i].snippet.thumbnails.default.url+'></a>')
	}
}

//data.items[0].snippet.thumbnails.default.url