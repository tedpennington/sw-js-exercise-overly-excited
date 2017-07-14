console.log("overly-excited.js loaded");
""
var sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

function addExcitement(theWordArray){
	for (var i = 0, output = ""; i < theWordArray.length; i++) {
		output += " " + theWordArray[i];
		if ((i+1)%3 === 0) {
			var exc = "!";
			if ((i+1) / 3 === 1) {
				exc.repeat(1);
				// console.log("exc is: ", exc);
			} else if((i+1) / 3 === 2) {
				exc = exc.repeat(2);
				// console.log("exc is: ", exc);
			} else if ((i+1) / 3 === 3) {
				exc = exc.repeat(3);
				// console.log("exc is: ", exc);
			} else if ((i+1) / 3 === 4) {
				exc = exc.repeat(4);
				// console.log("exc is: ", exc);
			}
			output += exc;
		}
		console.log(output);
	}
}

addExcitement(sentence);