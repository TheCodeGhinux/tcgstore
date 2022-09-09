import confetti from 'canvas-confetti';

export const runFireworks = () => {
  var end = Date.now() + (5 * 1000);

// go Buckeyes!
var colors = ['#e4460b', '#030136', '#ffffff'];

(function frame() {
  confetti({
    particleCount: 3,
    angle: 60,
    spread: 95,
    origin: { x: 0 },
    colors: colors
  });
  confetti({
    particleCount: 3,
    angle: 120,
    spread: 95,
    origin: { x: 1 },
    colors: colors
  });

  if (Date.now() < end) {
    requestAnimationFrame(frame);
  }
}());
}