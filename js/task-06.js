const input = document.querySelector('#validation-input')

const inputRuleSymbolLength = +input.dataset.length;

input.addEventListener('blur', onCheckSymbols);

function onCheckSymbols(event) {
    const symbolsEnteredLength = event.target.value.trim().length;

    symbolsEnteredLength === inputRuleSymbolLength ? 
        (input.classList.add('valid'),
        input.classList.remove('invalid')) :
       ( input.classList.add('invalid'),
        input.classList.remove('valid'))
     
    }

    
     


