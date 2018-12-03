function onLoad() {
	document.getElementById("footer").innerHTML = '<p class="center_element">Copyright © 2019 Website.ge</p>';
	var mobile = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));
	if (mobile) {
		alert("Visit this on a Computer for Better View");              
	} else {
	}
}
