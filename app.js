//bring in the form via get element
//add event listener to the submit button
//prevent default
//


let arr = document.getElementById("arr");
let myForm = document.getElementById("myForm");
myForm.addEventListener("submit", function(e) {
	e.preventDefault();
	let inputValue = document.getElementById("myForm").value;
	arr.appendChild(inputValue);
});

console.log(arr);


