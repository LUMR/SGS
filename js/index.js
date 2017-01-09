//主页用的JS
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