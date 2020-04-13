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

function init() {
  document.body.addEventListener('keydown', onKeyDownHandler);
  function onKeyDownHandler(e) {
    var index = 0
    const key = e.key;
    console.log('key', key)
    if (key === codes[index]) {
      index++
      if (index === codes.length) {
        index = 0;
        alert("YOU DID IT!")
      }
    } else {
      index = 0
    }
  }
}
