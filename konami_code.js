const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

let index = 0;

function init() {
  // your code here
  document.addEventListener("keydown", (event) => {

  var key = event.key;

  var codeIndex = codes[index];

  if(key == codeIndex) {
    index++;
  }


  });
}
