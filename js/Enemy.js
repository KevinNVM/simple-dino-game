class Enemy {
  constructor(
    { x, y, velocity = { x: 0, y: 0 }, width, height, color = "black" },
    affectedByGravity = false
  ) {
    this.x = x;
    this.y = y;
    this.velocity = velocity;
    this.width = width;
    this.height = height;
    this.affectedByGravity = affectedByGravity;
    this.color = color;
    this.draw();
  }

  draw() {
    c.fillStyle = this.color;
    c.fillRect(this.x, this.y, this.width, this.height);
  }

  update() {
    this.draw();

    this.x += this.velocity.x;
    this.y += this.velocity.y;

    if (this.affectedByGravity) {
      if (this.y + this.height < canvas.height - offsetGround) {
        this.velocity.y += G;
      } else {
        this.velocity.y = 0;
      }
    }
  }
}
