function convertTemp(number, unit){
	if(unit === "F") {
		var conversion = (number - 32)*5/9;
		console.log(number + " degrees Farenheit converted to Celsius is " + conversion + ".");
//		document.write(number + " degrees Farenheit converted to Celsius is " + conversion + ".") to print to HTML page
	}
	else if (unit === "C") {
		conversion = number * 9/5 + 32;
		console.log(number + " degrees Celsius converted to Farenheit is " + conversion + ".");
//			document.write(number + " degrees Celsius converted to Farenheit is " + conversion + ".") to print to HTML page
	 }
	else { 
		console.log("Please enter unit of F or C and try again.");
//		document.write("Please enter unit of F or C and try again.") to print to HTML page
	}
}

var myNumber = prompt("What temperature would you like to convert?");
var myUnit = prompt("What unit is your temperature? (F or C)");



convertTemp(myNumber, myUnit);