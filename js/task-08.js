const inputRef = document.querySelector('input');
const createBtnRef = document.querySelector('[data-action="render"]');
const destroyBtnRef = document.querySelector('[data-action="destroy"]');
const boxesRef = document.querySelector('#boxes');

createBtnRef.addEventListener('click', () => createBoxes(inputRef.value));
destroyBtnRef.addEventListener('click', destroyBoxes);

const randomRgb = () => {
  const rgbNum = () => Math.floor(Math.random() * 256);
  const r = rgbNum();
  const g = rgbNum();
  const b = rgbNum();

  return `rgb(${r},${g},${b})`;
};

function createBoxes(amount) {
  const createdBoxes = [];
  for (let i = 0; i < amount; i += 1) {
    const newBox = document.createElement('div');
    newBox.style.width = `${30 + i * 10}px`;
    newBox.style.height = `${30 + i * 10}px`;
    newBox.style.backgroundColor = randomRgb();
    newBox.style.display = 'inline-block';
    newBox.style.margin = '10px';
    createdBoxes.push(newBox);
  }

  boxesRef.append(...createdBoxes);
}

function destroyBoxes() {
  boxesRef.innerHTML = '';
}
