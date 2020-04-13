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
    var index = 0
    document.body.addEventListener('keydown', onKeyDownHandler());
    function onKeyDownHandler(e) {
      const key = parseInt(e.detail || e.which)
      console.log('key', key)
      if (key === codes[index]) {
        index++
        if (index === codes.length) {
          alert("YOU DID IT!")
          index = 0
        }
      } else {
        index = 0
      }
    }
  }	}
