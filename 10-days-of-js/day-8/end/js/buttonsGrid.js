const buttons = document.querySelectorAll("#btns > button");

const getNewIndex = (index) => {
  switch (index) {
    case 0:
      return 1;
    case 1:
      return 2;
    case 2:
      return 5;
    case 3:
      return 0;
    case 4:
      return 4;
    case 5:
      return 8;
    case 6:
      return 3;
    case 7:
      return 6;
    case 8:
      return 7;
    default:
      throw new Error("Invalid Index");
  }
};

buttons[4].addEventListener("click", (e) => {
  let newValues = [];
  for (let i = 0; i < buttons.length; i++) {
    const num = buttons[i].innerHTML;
    const newIndex = getNewIndex(i);
    newValues[newIndex] = num;
  }
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].innerHTML = newValues[i];
  }
});
