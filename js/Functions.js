function play() {
  gameRunning = true;
  animate();
}

function pause() {
  gameRunning = false;
}

function animate() {
  if (!gameRunning) return;

  animateID = requestAnimationFrame(animate);

  c.fillStyle = "whitesmoke";
  c.fillRect(0, 0, canvas.width, canvas.height);

  main();
}

function collisionBetweenTwoRectangles(rect1, rect2) {
  return (
    rect1.x + rect1.width >= rect2.x &&
    rect1.x <= rect2.x + rect2.width &&
    rect1.y + rect1.height >= rect2.y &&
    rect1.y <= rect2.y + rect2.height
  );
}

function getRandomNPNumber(max = 1) {
  return Math.ceil(Math.random() * max) * (Math.round(Math.random()) ? 1 : -1);
}

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
