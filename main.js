const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
const gameOverlay = document.querySelector(".game-overlay");
const playButton = document.querySelector("#play-button");
const gameScore = document.querySelector(".last-score");
const gameHighestScore = document.querySelector(".highest-score");

let gameRunning = false;
let highestScore = localStorage.getItem("highestScore") || 0;
let score = 0;

playButton.onclick = () => {
  play();
  score = 0;
  gameOverlay.style.display = "none";
};

let animateID;

canvas.width = innerWidth;
canvas.height = innerHeight;

const G = 0.2;
const offsetGround = canvas.height > 600 ? 100 : 0;
const enemyHeight = 150;
const enemySpeed = 5;

const keys = {
  up: {
    pressed: false,
  },
  down: {
    pressed: false,
  },
};

const player = new Player({
  x: 100,
  y: canvas.height - enemyHeight - offsetGround,
  velocity: { x: 0, y: 0 },
  width: 50,
  height: 75,
});

const enemies = [
  new Enemy({
    x: canvas.width + getRandomInt(100, 500),
    y: canvas.height - enemyHeight - offsetGround,
    width: 50,
    height: enemyHeight,
    velocity: { x: -enemySpeed, y: 0 },
    color: "red",
  }),
  new Enemy({
    x: canvas.width + getRandomInt(100, 500),
    y: canvas.height - enemyHeight - offsetGround,
    width: 50,
    height: enemyHeight,
    velocity: { x: -enemySpeed, y: 0 },
    color: "red",
  }),
];

const scoreBoard = new Score(
  { x: canvas.width * 0.1, y: canvas.height * 0.08 },
  `Highest ${highestScore} ${score}`
);

function main() {
  player.update();
  scoreBoard.update();
  scoreBoard.text = `Highest ${highestScore} ${score}`;

  score++;
  if (score > highestScore) {
    highestScore = score;
    localStorage.setItem("highestScore", score);
  }

  // Enemy Movement
  enemies.forEach((enemy, index) => {
    enemy.update();
    if (enemy.x < 0 - enemy.width) {
      enemy.x = canvas.width + enemy.width;

      enemy.height = getRandomInt(enemyHeight - 50, 200);
      enemy.y = canvas.height - enemy.height - offsetGround;
      enemy.velocity.x = -getRandomInt(3, 7);
    }

    // Collisions
    if (collisionBetweenTwoRectangles(player, enemy)) {
      gameOverlay.style.display = "grid";
      playButton.innerText = "RESTART";
      playButton.focus();
      pause();
      highestScore.innerText = `Highest ${highestScore}`;
      gameScore.innerText = `Score ${score - 2}`;
      enemies.forEach((e) => {
        e.x = canvas.width + 500;
        e.velocity.x = -enemySpeed;
      });
    }
  });
}
