class Score {
  constructor(pos, text, color = "black") {
    this.position = pos;
    this.text = text;
    this.color = color;
    this.draw();
  }

  draw() {
    c.font = "2rem Courier New, Courier, monospace";
    c.fillStyle = this.color;
    c.fillText(this.text, this.position.x, this.position.y);
  }

  update() {
    this.draw();
  }
}
