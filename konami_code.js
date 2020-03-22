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
  document.addEventListener("keydown", (e) => {

  var key = e.key;
  console.log(key);

  var codeKey = codes[index];
  console.log(codeKey);

  });
}
