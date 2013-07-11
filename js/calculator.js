function fillInputField(input) {
	$(".text-field-input").val($(".text-field-input").val() + input);
}

(function() {
	$("#seven").click(function() {
		fillInputField("7");
	});

	$("#eight").click(function() {
		fillInputField("8");
	});

	$("#nine").click(function() {
		fillInputField("9");
	});

	$("#divide").click(function() {
		fillInputField("/");
	});

	$("#four").click(function() {
		fillInputField("4");
	});

	$("#five").click(function() {
		fillInputField("5");
	});

	$("#six").click(function() {
		fillInputField("6");
	});

	$("#multiply").click(function() {
		fillInputField("x");
	});

	$("#one").click(function() {
		fillInputField("1");
	});

	$("#two").click(function() {
		fillInputField("2");
	});

	$("#three").click(function() {
		fillInputField("3");
	});

	$("#subtract").click(function() {
		fillInputField("-");
	});

	$("#zero").click(function() {
		fillInputField("0");
	});

	$("#decimal").click(function() {
		fillInputField(".");
	});

	$("#equal").click(function() {
		fillInputField("=");
	});

	$("#add").click(function() {
		fillInputField("+");
	});


	// Key binding
	$(function() {
   		$(window).keypress(function(e) {
       		var key = e.which;
       		switch(key) {
       			case 48: case 96:
       				fillInputField("0");
       				break;
       			case 49: case 97:
       				fillInputField("1");
       				break;
       			case 50: case 98:
       				fillInputField("2");
       				break;
       			case 51: case 99:
       				fillInputField("3");
       				break;
       			case 52: case 100:
       				fillInputField("4");
       				break;
       			case 53: case 101:
	       			fillInputField("5");
       				break;
       			case 54: case 102:
       				fillInputField("6");
       				break;
       			case 55: case 103:
       				fillInputField("7");
       				break;
       			case 56: case 104:
       				fillInputField("8");
       				break;
       			case 57: case 105:
	       			fillInputField("9");
       				break;
       			case 106:
       				fillInputField("x");+
       				break;
       			case 107:
       			alert("add");
       				fillInputField("+");
       				break;
       			case 109:
       				fillInputField("-");
       				break;
       			case 110: case 190:
       				fillInputField(".");
       				break;
       			case 111: case 191:
	       			fillInputField("/");
	       			break;
	       		default:
	       			break;
       		}
   		});
	});
})();