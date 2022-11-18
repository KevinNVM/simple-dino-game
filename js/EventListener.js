addEventListener("keydown", ({ key }) => {
  switch (key.toLowerCase()) {
    case "arrowup":
    case " ":
      keys.up.pressed = true;
      player.jumpCount++;
      break;

    case "arrowdown":
      player.velocity.y = 5;
      break;
  }
});

addEventListener("keyup", ({ key }) => {
  switch (key.toLowerCase()) {
    case "arrowup":
    case " ":
      keys.up.pressed = false;
      break;

    case "arrowdown":
      player.velocity.y = 5;
      break;
  }
});

addEventListener("touchstart", ({ touches }) => {
  if (touches.length) {
    keys.up.pressed = true;
    player.jumpCount++;
  }
});

addEventListener("touchend", ({ touches }) => {
  if (!touches.length) keys.up.pressed = false;
});
