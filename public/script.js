
function passwordGenerator(length) {
  let password = "";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const upperCase = lowerCase.toLocaleUpperCase();
  const numbers = "0123456789";
  const symbols = "~!@#$%^&*()-_=+'`.,/|";

  let allChar = lowerCase + upperCase + numbers + symbols;

  if (length < 1) {
    return `Please enter at least 6 characters`;
  } else if (allChar.length < 1) {
    return `must include at least one list`;
  }
  for (let i = 0; i < length; i++) {
    password += allChar[Math.floor(Math.random()*allChar.length)];
  }
  document.getElementById('pass').value = password;
}