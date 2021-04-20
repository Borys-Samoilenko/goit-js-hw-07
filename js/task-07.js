const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

inputRef.addEventListener('input', onInputChange);

function onInputChange() {
  spanRef.style.fontSize = inputRef.value + 'px';
  console.log(
    `Font size ${spanRef.textContent} is ${spanRef.style.fontSize} now`,
  );
}
