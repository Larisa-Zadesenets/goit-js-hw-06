const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
nameInput.addEventListener ("input", onTextInput);


function onTextInput (event) {
    let name = event.target.value.trim();
    if (name === "") { 
        name = "Anonymous"; } 
     nameOutput.textContent = name; 
    
};

