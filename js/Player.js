class Player {
  constructor({ x, y, velocity, width, height }) {
    this.x = x;
    this.y = y;
    this.velocity = velocity;
    this.width = width;
    this.height = height;
    this.isGrounded = false;
    this.jumpCount = 0;
    this.draw();
  }

  draw() {
    c.fillStyle = "black";
    c.fillRect(this.x, this.y, this.width, this.height);
  }

  update() {
    this.draw();

    // Player Movement
    if (keys.up.pressed && this.jumpCount < 2) {
      this.velocity.y = -5;
    }

    this.x += this.velocity.x;
    this.y += this.velocity.y;

    if (this.y + this.height <= canvas.height - offsetGround) {
      this.velocity.y += G;
    } else {
      this.velocity.y = 0;
    }

    if (this.y + this.height >= canvas.height - offsetGround) {
      this.isGrounded = true;
      this.jumpCount = 0;
    } else {
      this.isGrounded = false;
    }
  }
}
