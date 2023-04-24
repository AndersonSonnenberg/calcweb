function sum() {
	var num1 = Number(document.getElementById("num1").value);
	var num2 = Number(document.getElementById("num2").value);
	var result = num1 + num2;
	document.getElementById("result").innerHTML = "Resultado: " + result;
}

function subtract() {
	var num1 = Number(document.getElementById("num1").value);
	var num2 = Number(document.getElementById("num2").value);
	var result = num1 - num2;
	document.getElementById("result").innerHTML = "Resultado: " + result;
}

function multiply() {
	var num1 = Number(document.getElementById("num1").value);
	var num2 = Number(document.getElementById("num2").value);
	var result = num1 * num2;
	document.getElementById("result").innerHTML = "Resultado: " + result;
}

function divide() {
	var num1 = Number(document.getElementById("num1").value);
	var num2 = Number(document.getElementById("num2").value);
	var result = num1 / num2;
	document.getElementById("result").innerHTML = "Resultado: " + result;
}