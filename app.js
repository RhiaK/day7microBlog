//bring in the form via get element
//add event listener to the submit button
//prevent default
//


let myForm = document.getElementById("myForm");
myForm.addEventListener("submit", function(e) {
	e.preventDefault();
	let inputValue = document.getElementById("inputBox").value;
	let newElement = document.createElement("li");
	//console.log(inputValue);
	newElement.innerHTML = inputValue;
	document.getElementById("list").appendChild(newElement);
});


//console.log(newElement);


