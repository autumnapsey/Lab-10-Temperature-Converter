var button	= document.getElementById("button")

button.addEventListener("click", function(){
	var number = parseFloat(document.getElementById("tempInput").value,10);
	var unit = document.getElementById("unitInput").value;

	if(unit === "F") {
		var conversion = (number - 32)*5/9;
		document.getElementById("answer").innerText = (number + " degrees Farenheit converted to Celsius is " + conversion + ".")
	}
	else if (unit === "C") {
		conversion = number * 9/5 + 32;
		document.getElementById("answer").innerText = (number + " degrees Celsius converted to Farenheit is " + conversion + ".");
	 }
	else { 
		document.getElementById("answer").innerText = ("Please enter a unit of F or C and try again.");
		}
	}
)