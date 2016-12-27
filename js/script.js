$(document).ready(function() {

	var quotes = [["We have two lives, and the second begins when we realize we only have one.","Confucius"],
		["Don't cry because it's over, smile because it happened.","Dr. Seuss"],
		["Be yourself; everyone else is already taken.","Oscar Wilde"],
		["Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.","Bernard M. Baruch"],
		["Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.","Albert Einstein"],
		["No one can make you feel inferior without your consent.","Eleanor Roosevelt"],
		["To live is the rarest thing in the world. Most people exist, that is all.","Oscar Wilde"],
		["Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.","H. Jackson Brown Jr."],
		["It is better to remain silent at the risk of being thought a fool, than to talk and remove all doubt of it.","Maurice Switzer"],
		["A pessimist sees the difficulty in every opportunity; an optimist sees the opportunity in every difficulty.","Winston S. Churchill"],
		["A lady came up to me one day and said 'Sir! You are drunk', to which I replied 'I am drunk today madam, and tomorrow I shall be sober but you will still be ugly.","Winston S. Churchill"],
		["The statistics on sanity are that one out of every four people is suffering from a mental illness. Look at your 3 best friends. If they're ok, then it's you.","Rita Mae Brown"],
		["Never put off till tomorrow what may be done day after tomorrow just as well.","Mark Twain"],
		["Whenever I feel the need to exercise, I lie down until it goes away.","Paul Terry"],
		["I'm not afraid of death; I just don't want to be there when it happens.","Woody Allen"],
		["I find television very educating. Every time somebody turns on the set, I go into the other room and read a book.","Groucho Marx"],
		["Go to heaven for the climate and hell for the company.","Benjamin Franklin Wade"],
		["I am free of all prejudice. I hate everyone equally.","W.C. Fields"]], arrayLength=quotes.length, newQuote;
	
	displayQuote();
		
	$("#generator").click(function(){
		displayQuote();
	});
		
	function displayQuote(){
		newQuote = quotes[Math.floor(Math.random()*arrayLength)], tweetURL = "https://twitter.com/intent/tweet?text="+encodeURIComponent("\""+newQuote[0]+"\" - "+newQuote[1])+"&url=http://bit.ly/2cOrRPH";
		$(".quote").text(newQuote[0]);
		$(".author").html("&mdash; "+newQuote[1]);
		$(".twitter-share-button").attr('href', tweetURL);
	};
});
