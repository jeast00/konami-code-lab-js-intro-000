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
  console.log(key);

  var codeIndex = codes[index];

  if(key == codeIndex) {
    index++;

    if(index == codes.length) {
      alert("Hurray!");
      index = 0;
    }
  } else {
    index = 0;
  }
  });
}
