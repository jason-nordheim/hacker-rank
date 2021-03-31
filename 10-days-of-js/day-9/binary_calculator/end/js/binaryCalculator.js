/* Results displayed by Calculate (<input /> ) */
const res = document.getElementById("res");
/* buttons used */
const btns = document.querySelectorAll(".btns");

const add = (s1, s2) => {
  const v1 = Math.floor(convertToBinary(s1));
  const v2 = Math.floor(convertToBinary(s2));
  const added = Math.floor(v1 + v2);
  return convertToString(added);
};

const multiply = (s1, s2) => {
  const v1 = Math.floor(convertToBinary(s1));
  const v2 = Math.floor(convertToBinary(s2));
  const multiplied = Math.floor(v1 * v2);
  return convertToString(multiplied);
};

const subtract = (s1, s2) => {
  const v1 = Math.floor(convertToBinary(s1));
  const v2 = Math.floor(convertToBinary(s2));
  const subtracted = Math.floor(v1 - v2);
  return convertToString(subtracted);
};

const divided = (s1, s2) => {
  const v1 = Math.floor(convertToBinary(s1));
  const v2 = Math.floor(convertToBinary(s2));
  const divided = Math.floor(v1 / v2);
  return convertToString(divided);
};

/* helper function to convert binary to numeric value */
const convertToBinary = (text) => parseInt(text, 2);
const convertToString = (number) => number.toString(2);

const calculator = {
  append: (value) => (res.value += value),
  clear: () => (res.value = ""),
  calculate: () => {
    const re = new RegExp(/(\d{1,})(\+|\-|\*\\{1})(\d{1,})+/);
    const text = `${res.value}`;
    const groups = text.match(re);
    switch (groups[2]) {
      case "+":
        return add(groups[1], groups[3]);
      case "-":
        return subtract(groups[1], groups[3]);
      case "/":
        return divided(groups[1], groups[3]);
      case "*":
        return multiply(groups[1], groups[3]);
      default:
        break;
    }
  },
};

const handleClick = (event) => {
  /* Older IE browsers have a srcElement property,
    but other browsers have a 'target' property; 
    Set btn to whichever exists. */
  const btn = event.target || event.srcElement;
  const text = document.getElementById(btn.id).innerText;

  console.log({ btn, text });

  switch (text) {
    case "0":
    case "1":
    case "+":
    case "-":
    case "*":
    case "/":
      calculator.append(text);
      break;
    case "C":
      calculator.clear();
      break;
    case "=":
      let result = calculator.calculate();
      calculator.clear();
      calculator.append(result);
      break;
    default:
      console.error("Invalid Value:" + text);
  }
};

btns.forEach((b) => {
  b.addEventListener("click", handleClick);
});
