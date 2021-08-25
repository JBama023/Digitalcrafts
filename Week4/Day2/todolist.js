const container = document.querySelector(".main-container");
const secondarycontainer = document.querySelector(".secondary-div");
const input = document.querySelector(".box");
const submit = document.querySelector(".submit-button");

function addItem() {
    const inputValue = input.value;
    const addItemtoList = document.createElement("li");
    addItemtoList.innerHTML = inputValue;
    secondarycontainer.append(addItemtoList);
    console.log("Items Added:", inputValue);
}

submit.addEventListener("click", () => {
    addItem();
})