const nameInput = document.querySelector(".name-input");
const nameOutput = document.querySelector(".name-output");
nameInput.addEventListener ("input", onTextInput);

function onTextInput (event) {
    nameOutput.textContent = event.currentTarget.value;
    
};