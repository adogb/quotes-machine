$(document).ready(function() {

	
	
	displayQuote();
		
	$("#generator").click(function(){
		displayQuote();
	});
		
	function displayQuote(){
		const url = "http://api.forismatic.com/api/1.0/?method=getQuote&key=&format=jsonp&lang=en&jsonp=?";

		$.getJSON(url,function(data){
			let quote = data.quoteText;
			let author = data.quoteAuthor;
			$(".quote").text(quote);
			$(".author").html("&mdash; "+ author);

			let tweetURL = "https://twitter.com/intent/tweet?text="+encodeURIComponent("\""+quote+"\" - "+author)+"&url=http://bit.ly/2cOrRPH";
		
			$(".twitter-share-button").attr('href', tweetURL);
		})
			

		
	};
});
