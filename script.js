var lineDrawing = anime({
  targets: '#lineDrawing .lines path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1500,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  loop: true
});

let i = 0;
var stop;
function start() {
  var print = () => {
    if (i == 1) {
      clearInterval(stop);
    }
    else {
      console.log(i);
    }
    i++;
  };

  stop = setInterval(print,1000);
}

start();