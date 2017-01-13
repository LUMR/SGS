function display(li){
	var div = new Array();
	the = document.getElementsByClassName(li);
	div[0] = document.getElementsByClassName('card_1');
	div[1] = document.getElementsByClassName('card_2');
	div[2] = document.getElementsByClassName('card_3');
	for (var i = 0; i < div.length; i++) {
		div[i][0].style.display = "none";
	}
	the[0].style.display = "block";
}