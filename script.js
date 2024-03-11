const form = document.getElementById('form');
const convertButton = document.getElementById('convert-btn');
const output = document.getElementById('output');

function isValid(inputNumber) {
  if (!inputNumber || inputNumber.match(/[e.]/g)) {
    output.textContent = "Please enter a valid number"
  } else if (inputNumber < 1) {
    output.textContent = "Please enter a number greater than or equal to 1"
  } else if (inputNumber > 3999) {
    output.textContent = "Please enter a number less than or equal to 3999"
  } else { return true }
}

function convertToRoman(inputNumber) {
  const sortedArrayReferences = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];

  let finalValues = [];
  let userInput = inputNumber;

  for (const arrayReference of sortedArrayReferences) {
    while (userInput >= arrayReference[1]) {
      finalValues.push(arrayReference[0]);
      userInput -= arrayReference[1];
    };
  };

  return finalValues.join('');
}

form.addEventListener('submit', e => {
  e.preventDefault();
})

convertButton.addEventListener('click', () => {
  let inputNumber = document.getElementById('number').value;

  output.classList.remove('hidden');

  if (isValid(inputNumber))
    output.textContent = convertToRoman(inputNumber)
})
