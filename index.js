var qrcode = new QRCode("qrcode");
	
chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
		add=tabs[0].url;
		makeUrlCode(add);
});

function makeUrlCode (add) {
	if(undefined != add) {
		document.getElementById("text").value=add;
		var elText = document.getElementById("text");
		qrcode.makeCode(elText.value);
	} else {
		alert("add empty");
	}
}

function makeCode () {
		var elText = document.getElementById("text");
		qrcode.makeCode(elText.value);
}

$("#text").
	on("blur", function () {
		makeCode();
	}).
	on("keydown", function (e) {
		if (e.keyCode == 13) {
			makeCode();
		}
	});