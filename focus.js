function getFirstFocusableInput(){
	var inputArray = Array.prototype.slice.call(document.getElementsByTagName("input"));
	if(!inputArray){
		return;
	}
	if(!inputArray.push){
		return inputArray;
	}
	var input = undefined;
	while(inputArray.length > 0){
		input = inputArray.shift();
		if(input.getAttribute("type") == 'text' && input.getAttribute("readonly") == undefined && input.getAttribute("disabled") == undefined){
			break;
		}else{
			input = undefined;
		}
	}
	return input;
}

function keyDown(event){
	if(event.keyCode == 73 && event.ctrlKey){
		var input = getFirstFocusableInput();
		if(input){
			console.log(input);
			input.focus();
		}
	}
}

document.addEventListener("keydown", keyDown, false);

window.onload = function(){
	var input = getFirstFocusableInput();
	if(input){
		console.log(input);
		input.focus();
	}
}
