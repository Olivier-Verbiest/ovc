var path = window.location.hostname + window.location.pathname;
var fullPath = "https%3A//" + path;
//console.log(path);

document.querySelector('[shareAttr="facebook"]').href = "https://www.facebook.com/sharer/sharer.php?u=" + fullPath;

document.querySelector('[shareAttr="twitter"]').href = "https://twitter.com/intent/tweet?text=" + fullPath;

document.querySelector('[shareAttr="linkedin"]').href = "https://www.linkedin.com/shareArticle?mini=true&url=" + path + "?utm_source=linkedin&utm_medium=blog+post+share";

document.querySelector('[shareAttr="email"]').href = "mailto:?subject=Check out this article from TheaWellbeing&body=Check out this article: " + path;



document.getElementById("copy-btn").onclick = function() {myFunction()};

function myFunction() {
  navigator.clipboard.writeText(window.location.href + "?utm_source=website&utm_medium=blog");
  document.getElementById("copy-btn-text").innerHTML = "Link copied! 🥳 :)";
  
  setTimeout(function(){
		document.getElementById("copy-btn-text").innerHTML = "Copy link";
	}, 5000); 
}


//Extra

/*
document.getElementById("f-btn").href =
"https://www.facebook.com/sharer/sharer.php?u=https%3A//" + window.location.hostname + window.location.pathname;

document.getElementById("t-btn").href =
"https://twitter.com/intent/tweet?text=https%3A//" + window.location.hostname + window.location.pathname;

document.getElementById("li-btn").href =
"https://www.linkedin.com/shareArticle?mini=true&url=" + window.location.hostname + window.location.pathname;

document.getElementById("email-btn").href = 
"mailto:?subject=Check out this article from TheaWellbeing&body=Check out this article: "+ window.location.hostname + window.location.pathname;
*/


