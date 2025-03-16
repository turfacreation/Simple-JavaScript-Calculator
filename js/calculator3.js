// This Function is used to append values to the display
function appendToDisplay(value) {
	document.getElementById("display").value += value;
}

// This Function is used to clear the display and history
function clearDisplay() {
	//If display is "5+3", clicking C makes it empty.
	document.getElementById("display").value = "";
	document.getElementById("history").innerText = "";
}

// This Function is used to delete the last character
function deleteLast() {
	//If display is "25+3", clicking Backspace (←) changes it to "25+".
	let display = document.getElementById("display").value;
	document.getElementById("display").value = display.slice(0, -1);
	//Uses .slice(0, -1) to remove the last character."1234".slice(0, -1) → "123"
}

// This Function is used  to evaluate the expression and update history
function calculateResult() {
	try {
		let expression = document.getElementById("display").value; //Display shows "5+3", user clicks =
		let result = eval(expression); //eval("5+3") returns 8

		// Update the history
		document.getElementById("history").innerText = expression + " = " + result; //History updates to: "5+3 = 8"

		// Show the result in the display
		document.getElementById("display").value = result; //Display updates to: "8"
	} catch (error) {
		document.getElementById("display").value = "Error";
		//If an invalid input is entered (e.g., 5++3), it shows "Error" instead of crashing.
	}
}
