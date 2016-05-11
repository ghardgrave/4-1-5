
$(function(){
  var pagestatus = 0;

  $('#search-term').submit(function(event){
    if (pagestatus = 0) {
      event.preventDefault();
      getRequest();
      pagestatus++; }
    else {
      $("#search-results").html("");
      event.preventDefault();
      getRequest();
      pagestatus = 0;
    }

  });
});


function getRequest(searchTerm) {

    var searchTerm = $('#query').val();
    var params = {
        q: searchTerm,
        r: 'json',
        key: 'AIzaSyC7qR6inhH_pgiovjxUQYkiQVyfGpgf994',
        part: 'snippet'
    };
    url = 'https://www.googleapis.com/youtube/v3/search';

    $.getJSON(url, params, function(data) {
        console.log(data);
        var count;
        for (var count = 0; count < 6; count++) {
          $('#search-results').append('<a href="https://www.youtube.com/watch?v='+ data.items[count].id.videoId + '"><li><img src="http://img.youtube.com/vi/' + data.items[count].id.videoId + '/0.jpg" width=100>' + data.items[count].snippet.title + '</a></li>');  
        };
      
    });
        
}
