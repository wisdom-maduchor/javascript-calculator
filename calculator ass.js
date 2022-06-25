var opr = prompt("operator: ");
var num1 = parseInt(prompt("number1: "));
var num2 = parseInt(prompt("number2: "));

if (opr == "+") {
	console.log(num1 + num2);
}else if (opr == "-") {
	console.log(num1 - num2);
}else if (opr == "*") {
	console.log(num1 * num2);
}else if(opr == "/") {
	console.log(num1 / num2);
}