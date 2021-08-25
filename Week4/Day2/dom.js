// document object, or just the document

// paper first method

// document.
// getElementsByTagName('p')
// getElementsByClassName('link')
// getElementsbyId('password')

// querySelector gets one thing that matches search condition
// querySelector('password')

// querySelectorAll gets all things that matches search conditions
// querySelectorAll('.link')

// document.getElementsByClassName('main-container') valid
// document.getElementsByTagName("div") valid
// document.getElementsById("topmost-container") valid
// document.querySelector("#topmost-container") valid
// document.querySelector(".main-container") valid

const holder = document.querySelector(".main-container");
const input = document.querySelector(".input");
const submitButton = document.querySelector(".submit-button");
// if you choose what you want to write
const studentName = document.createElement("p");
// if you write the words out
studentName.innerHTML = "Deanna";

function alertMe() {
    const valueOfInput = input.value;
    console.log(valueofInput);
    alert(valueOfInput);
}
submitButton.onClick = alertMe;
// append your thoughts onto the actual paper
holder.append(studentName);

// paper first
// querySelector
// createElement
// change innerHTML of the element
// append to what you selected

// pen first
// createElement
// innerHTML
// querySelector
// append to query selector