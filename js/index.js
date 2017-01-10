//主页用的JS
var photo_num = 1;
setInterval("slide()",5000);
function header_hover(mouse){
	var header = document.getElementsByClassName('header_ul');
	for (var i = 0; i < header.length; i++) {
		header[i].className = "header_ul";
	}
	mouse.className = "current";
}

function header_hout(mouse){
	var header = document.getElementsByClassName('header_ul');
	mouse.className = "header_ul";
}

function slide(){
	var media = document.getElementById('media');
	var li = media.getElementsByTagName('li');
	var photo = new Array();
	for (var i = 0; i < li.length; i++) {
		photo[i] = 430*i;
	}
	$(media).animate({right:photo[photo_num++]},"slow");
	if (photo_num == li.length) {
		photo_num = 1;
	}
}