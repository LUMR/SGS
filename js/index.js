//主页用的JS
var photo_num = 0;
var photo = new Array();
setInterval("slide()",4096);
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
	$(media).animate({right:photo[photo_num++]},"slow");
	if (photo_num == photo.length) {
		photo_num = 0;
	}
}

function slideNum(li){
	var num = li.index*430;
	$(media).animate({right:num},"fast");
	photo_num = li.index;
}

function showNews(title){
	var div = document.getElementsByClassName('news_main');
	for (var i = 0; i < div.length; i++) {
		div[i].style.display = "none";
	}
	div[title.index].style.display = "block";
}

function setValue(){
	//设定图片位置数组
	var media = document.getElementById('media');
	var li = media.getElementsByTagName('li');
	for (var i = 0; i < li.length; i++) {
		photo[i] = 430*i;
	}
	// 设定新闻主体index
	var title = document.getElementById('news_title').getElementsByTagName('a');
	for (var i = 0; i < title.length; i++) {
		title[i].index = i;
	}
	// alert(li.length);调试用
	var div = document.getElementsByClassName('num_box');
	for (var i = 0; i < li.length; i++) {
		div[i].index = i;
	}
}