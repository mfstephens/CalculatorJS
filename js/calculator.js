function isOperator(input) {
	if(input !== undefined) {
		switch(input[input.length - 2]) {
			case "+":
				return true;
			case "-":
				return true;
			case "÷":
				return true;
			case "x":
				return true;
			default:
				return false;
		}
	}
}

function inputField(input) {
	$(".text-field-input").html(input);
	if($(".text-field-input").html() === "Error") {
		return "0";	
	}
	else if(($("#clear").val() === "AC" && !isOperator(input)) || $(".text-field-input").html() === "0") {
		$("#clear").val("CE");
		return "";
	}
	return $(".text-field-input").html();
}

function parseInputField(input) {
	var parsedInput = input.replace(/√/g, "Math.sqrt");
	parsedInput = parsedInput.replace(/x/g, "*");
	parsedInput = parsedInput.replace(/÷/g, "/");
	return parsedInput;
}

function evaluateInput(input) {
	try {
		inputField(eval(input));
	}
	catch(e) {
		inputField("Error");
	}
}

(function() {
	$("#seven").click(function() {
		inputField(inputField() + "7");
	});

	$("#eight").click(function() {
		inputField(inputField() + "8");
	});

	$("#nine").click(function() {
		inputField(inputField() + "9");
	});

	$("#divide").click(function() {
		inputField(inputField() + " ÷ ");
	});

	$("#four").click(function() {
		inputField(inputField() + "4");
	});

	$("#five").click(function() {
		inputField(inputField() + "5");
	});

	$("#six").click(function() {
		inputField(inputField() + "6");
	});

	$("#multiply").click(function() {
		inputField(inputField() + " x ");
	});

	$("#one").click(function() {
		inputField(inputField() + "1");
	});

	$("#two").click(function() {
		inputField(inputField() + "2");
	});

	$("#three").click(function() {
		inputField(inputField() + "3");
	});

	$("#subtract").click(function() {
		inputField(inputField() + " - ");
	});

	$("#zero").click(function() {
		inputField(inputField() + "0");
	});

	$("#decimal").click(function() {
		inputField(inputField() + ".");
	});

	$("#equal").click(function() {
		var input = inputField();
		var parsedInput = parseInputField(input);
		evaluateInput(parsedInput);
		$("#clear").val("AC");
	});

	$("#add").click(function() {
		inputField(inputField() + " + ");
	});

	$("#left-parens").click(function() {
		inputField(inputField() + "(");
	});

	$("#right-parens").click(function() {
		inputField(inputField() + ")");
	});

	$("#square-root").click(function() {
		inputField(inputField() + "√(");
	});

	$("#clear").click(function() {
		if($("#clear").val() === "AC") {
			inputField("0");
			$("#clear").val("CE");
		}
		else {
			var shortenedInputString = inputField();
			if(shortenedInputString[shortenedInputString.length - 1] === " ") {
				inputField(shortenedInputString.substring(0, shortenedInputString.length - 3));
			}
			else {
				inputField(shortenedInputString.substring(0, shortenedInputString.length - 1));
			}
		}
		if(inputField() === "") {
			inputField("0");
		}
	});


	// Key binding
	$(function() {
   		$(window).keypress(function(e) {
       		var key = e.which;
       		switch(key) {
       			case 48: case 96:
       				inputField(inputField() + "0");
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
       				fillInputField("x");
       				break;
       			case 107:
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