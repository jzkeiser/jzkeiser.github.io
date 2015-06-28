$(document).ready(function() {
var userVal = parseInt(prompt("Enter a positive Number!"));
if(userVal < 0){
alert("The Number is not positive!")	
};	

for (var index = 1; index <= userVal; index +=1) {
	if (index % 3 === 0 && index % 5 === 0) {
		$("#pongResult").append("<li>" + "<b>ping-pong</b>" + "</li>");
	}
	else if (index % 3 === 0) {
		$("#pongResult").append("<li>" + "<b>ping</b>" + "</li>");
	}
	else if (index % 5 === 0) {
		$("#pongResult").append("<li>" + "<b>pong</b>" + "</li>");
	}
	else 
		$("#pongResult").append("<li>" + index + "</li>");
	}
});
