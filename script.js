var title="About Me";
var desc="My name's Maciej, but I prefer to be called <b><i>Hyper</i></b><br>\
Im an 18 year old developer(as of 2021)<br>\
that found the passion of creating games<br>\
at the age of 14 back in 2017<br><br>\
I created my first game in GMS following a tutorial<br>\
trying to change some stuff on the way as I learned.<br>\
I published my first game on 31st of August 2017<br>\
called <i>Best Space Shooter 2017</i>(I know, I know..)<br>\
then up till December 2019 I pushed through and updated<br>\
the game adding a lot of new features(and the name changed to SSS77)<br><br>\
From January 2020 I started working in Unity and still am<br>\
on my biggest project called <a href='https://hypergamesdev.github.io/sss222' target='_blank'><b>SSS222</b></a>";

var pageName1="About Me";
var pageName2="Portfolio";

function checkPage(){
	var path = window.location.pathname;
	var page = path.split("/").pop();
	console.log(page);
	document.getElementById("index").href="index.html";
	document.getElementById("portfolio").href="portfolio.html";
	if(page=='portfolio.html'){
		title=pageName2;
		desc="";
		document.getElementById("sss222Button").href="https://hypergamesdev.github.io/sss222";
		document.getElementById("sss222date").innerHTML="03.2020 - ??.????";
		document.getElementById("glitchoutButton").href="https://hypergamesdev.github.io/glitchout";
		document.getElementById("glitchoutDate").innerHTML="06.2021 - ??.????";
		document.getElementById("glitchedoutButton").href="https://github.com/HyperGamesDev/GlitchedOut-GMS-0.1-";
		document.getElementById("glitchedoutDate").innerHTML="03.2018 - 11.2018";
		document.getElementById("sss77Button").href="https://github.com/HyperGamesDev/sss77";
		document.getElementById("sss77Date").innerHTML="08.2017 - 12.2019";
		document.getElementById("planetoidButton").href="https://github.com/HyperGamesDev/mc-planetoids";
		document.getElementById("planetoidDate").innerHTML="06.2020 - ??.????";
	}else{
		document.getElementById("allmylinks").innerHTML="<img src='img/allmylinks.png'>";
		document.getElementById("allmylinks").href="https://my.bio/hypergamesdev";
		document.getElementById("twitter").innerHTML="<img src='img/twitter.png'>";
		document.getElementById("twitter").href="https://twitter.com/HyperLemonPL";
		document.getElementById("github").innerHTML="<img src='img/github.png'>";
		document.getElementById("github").href="https://github.com/hypergamesdev";
		//document.getElementById("patreon").innerHTML="<img src='img/patreon.png'>";
		//document.getElementById("patreon").href="https://patreon.com/HyperGamesDev";
		document.getElementById("kofi").innerHTML="<img src='img/kofi.png'>";
		document.getElementById("kofi").href="https://buymeacoffee.com/HyperGamesDev";
		document.getElementById("linkedin").innerHTML="<img src='img/linkedin.png'>";
		document.getElementById("linkedin").href="https://linkedin.com/in/hypergamesdev";
		document.getElementById("cv_EN").innerHTML="CV_EN";
		document.getElementById("cv_EN").href="img/hyperCV_EN.png";
		document.getElementById("cv_PL").innerHTML="CV_PL";
		document.getElementById("cv_PL").href="img/hyperCV_PL.png";
	}
	document.getElementById("title").innerHTML=title;
	document.getElementById("desc").innerHTML=desc;
	
	
}

function docWrite(string){document.write(string);}
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
