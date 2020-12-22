let numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

let specialCharacters = [
  '~',
  '!',
  '@',
  '#',
  '$',
  "%",
  '^',
  '&',
  '*',
  '(',
  ')',
  '_',
  '+',
  '{',
  '}',
  ':',
  '"',
  '<',
  '>',
  '?',
];


let lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

let upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

function getPasswordOptions() {
  let length = parseInt(
    prompt('How many characters would you like in your password?')
  );

  if (isNaN(length) === true) {
    alert('Password length must be provided as a number between 8 and 15');
    return;
  }

  if (length < 8) {
    alert('Password length must be greater than or equal to 8 characters');
    return;
  }

  if (length > 16) {
    alert('Password length must less than or equal to 15 characters');
    return;
  }

  let specialCharacters = confirm(
    'Click OK to include special characters.'
  );

  let numericCharacters = confirm(
    'Click OK to include numeric characters.'
  );

  let hasLowerCasedCharacters = confirm(
    'Click OK to include lowercase characters.'
  );

  let uppercasedCharacters = confirm(
    'Click OK to include uppercase characters.'
  );

  if (
    specialCharacters === false &&
    numericCharacters === false &&
    hasLowerCasedCharacters === false &&
    uppercasedCharacters === false
  ) {
    alert('Must select at least one character type');
    return;
  }

  let passwordOptions = {
    length: length,
    specialCharacters: specialCharacters,
    numericCharacters: numericCharacters,
    hasLowerCasedCharacters: hasLowerCasedCharacters,
    uppercasedCharacters: uppercasedCharacters
  };

  return passwordOptions;
}

function getRandom(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  let randElement = arr[randIndex];

  return randElement;
}

function generatePassword() {
  let options = getPasswordOptions();

  let result = [];

  let possibleCharacters = [];

  let guaranteedCharacters = [];

  if (options.specialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }

  if (options.numericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    guaranteedCharacters.push(getRandom(numericCharacters));
  }

  if (options.hasLowerCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
    guaranteedCharacters.push(getRandom(lowerCasedCharacters));
  }

  if (options.uppercasedCharacters) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
    guaranteedCharacters.push(getRandom(upperCasedCharacters));
  }

  for (let i = 0; i < options.length; i++) {
    let possibleCharacter = getRandom(possibleCharacters);

    result.push(possibleCharacter);
  }

  for (let i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }

  return result.join('');
}

let generateBtn = document.querySelector('#generate');

function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector('#password');

  passwordText.value = password;
}

generateBtn.addEventListener('click', writePassword);