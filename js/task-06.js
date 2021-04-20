const inputMessage = document.querySelector('#validation-input');
inputMessage.addEventListener('focus', onInputFocus);
inputMessage.addEventListener('blur', onInputBlur);

let inputMessageLength = 0;

function onInputFocus() {
  inputMessage.addEventListener('input', onInputChange);
}

function onInputBlur() {
  inputMessage.classList.add('valid');
  if (Number(inputMessage.dataset.length) === inputMessageLength) {
    inputMessage.classList.replace('invalid', 'valid');
  } else {
    inputMessage.classList.remove('valid');
    inputMessage.classList.add('invalid');
  }
}

function onInputChange() {
  inputMessageLength = inputMessage.value.length;
}
