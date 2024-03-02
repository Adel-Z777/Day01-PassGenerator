const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = lowerCase.toLocaleUpperCase();
const numbers = "0123456789";
const symbols = "~!@#$%^&*()-_=+'`.,/|";



function passwordGenerator(length,includeLowerCase,includeUpperCase,includeNumbers,includeSymbols) {
  let allChar = "";
  let password = "";

  allChar += includeLowerCase === true ? lowerCase : "";
  allChar += includeUpperCase === true ? upperCase : "";
  allChar += includeNumbers === true ? numbers : "";
  allChar += includeSymbols === true ? symbols : "";

  if (length < 1) {
    return `Please enter at least 6 characters`;
  } else if (allChar.length < 1) {
    return `must include at least one list`;
  }
    for (let i = 0; i < 10; i++) {
      password += allChar[Math.floor(Math.random()*allChar.length)];
    }
  return password;
}

let password = passwordGenerator(10,true,true,true,true);
const text = document.createTextNode(password);
const span = document.getElementsByClassName('span');
console.log(text);
console.log(span);
