import './style.css'
import Phaser from 'phaser'

const size = {
  width: 500,
  height: 500
}

const speedDown = 300;

const gameStartDiv = document.getElementById("gameStartDiv");
const gameOverDiv = document.getElementById("gameOverDiv");
const startBtn = document.getElementById("startGameBtn");
const restartBtn = document.getElementById("restartGameBtn");
const gameWinLoseSpan = document.getElementById("gameWinLoseSpan");
const finalScore = document.getElementById("finalScore");

class GameScene extends Phaser.Scene {
  constructor() {
    super('scene-game');
    this.player = null;
    this.cursor = null;
    this.playerSpeed = speedDown + 50;
    this.target = null;
    this.point = 0;
    this.textScore = 0;
    this.textTimer = 0;
    this.timeEvent = null;
    this.remainingTime = 0;
    this.bgMusic = null;
    this.catchSound = null;
    this.emitter = null;
  }

  preload() {
    this.load.image("bg", "assets/bg.png");
    this.load.image('apple', '/assets/apple.png');
    this.load.image('basket', '/assets/basket.png');
    this.load.audio("bgMusic", "assets/bgMusic.mp3");
    this.load.audio("catchSound", "assets/catchSound.mp3");
    this.load.image("money", "assets/money.png");
  }

  create() {
    // Reset game state when creating/restarting
    this.point = 0;
    this.remainingTime = 0;

    this.bgMusic = this.sound.add("bgMusic");
    this.bgMusic.setVolume(0.3);
    
    this.bgMusic.play({ loop: true });

    this.catchSound = this.sound.add("catchSound");

    this.add.image(0, 0, "bg").setOrigin(0, 0);
    this.player = this.physics.add.image(size.width / 2, size.height - 85, "basket").setOrigin(0, 0);
    this.player.setImmovable(true);
    this.player.body.allowGravity = false;
    this.player.setCollideWorldBounds(true);
    this.player.setSize(this.player.width - this.player.width / 4, this.player.height / 6)
      .setOffset(this.player.width / 10, this.player.height - this.player.height / 6);
    this.cursor = this.input.keyboard.createCursorKeys();

    this.target = this.physics.add.image(0, 0, "apple").setOrigin(0, 0);
    this.target.setMaxVelocity(0, speedDown);

    this.physics.add.collider(this.player, this.target, this.targetHit, null, this);

    this.textScore = this.add.text(10, 10, 'Score: 0', { fontSize: '20px', fill: '#000', fontStyle: 'bold' });

    this.textTimer = this.add.text(size.width - 10, 10, 'Time: 60', { fontSize: '20px', fill: '#000', fontStyle: 'bold' }).setOrigin(1, 0);

    this.timeEvent = this.time.delayedCall(60000, this.gameOver, [], this);

    this.emitter = this.add.particles(0, 0, "money", {
      speed: 100,
      duration: 100,
      gravityY: speedDown - 200,
      scale: 0.04,
      emitting: false
    })

    this.emitter.startFollow(this.player, this.player.width / 2, this.player.height / 2, true);
  }

  update() {
    this.remainingTime = Math.max(0, this.timeEvent.getRemainingSeconds()).toFixed(0);
    this.textTimer.setText('Time: ' + this.remainingTime);

    if (this.target.y > size.height) {
      this.target.setY(0);
      this.target.setX(this.getRandomX());
    }

    const { left, right } = this.cursor
    if (left.isDown) {
      this.player.setVelocityX(-this.playerSpeed);
    } else if (right.isDown) {
      this.player.setVelocityX(this.playerSpeed);
    } else {
      this.player.setVelocityX(0);
    }
  }

  getRandomX() {
    return Phaser.Math.Between(0, size.width);
  }

  targetHit() {
    this.emitter.start()
    this.catchSound.play();
    this.point += 1;
    this.target.setY(0);
    this.target.setX(this.getRandomX());
    this.textScore.setText('Score: ' + this.point);
  }

  gameOver() {
    // Pause the scene instead of destroying the game
    this.scene.pause("scene-game");
    
    // Use the enhanced UI function to show game over screen
    const isWin = this.point > 10;
    
    // Call the UI function if available (from ui-effects.js)
    if (typeof showGameOver === 'function') {
      showGameOver(isWin, this.point);
    } else {
      // Fallback to original method
      if (isWin) {
        gameWinLoseSpan.innerText = "Win!";
      } else {
        gameWinLoseSpan.innerText = "Lose!";
      }
      finalScore.innerText = this.point;
      gameOverDiv.style.display = "flex";
    }
  }
}

const config = {
  type: Phaser.WEBGL,
  width: size.width,
  height: size.height,
  canvas: gameCanvas,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: speedDown },
      debug: false
    }
  },
  scene: [GameScene]
}

const game = new Phaser.Game(config)

// Pause the game initially
game.scene.pause("scene-game");

startBtn.addEventListener("click", () => {
  // Use the enhanced UI function if available
  if (typeof hideAllScreens === 'function') {
    hideAllScreens();
  } else {
    gameStartDiv.style.display = "none";
    gameOverDiv.style.display = "none";
  }
  game.scene.resume("scene-game");
});

restartBtn.addEventListener("click", () => {
  // Use the enhanced UI function if available
  if (typeof hideAllScreens === 'function') {
    hideAllScreens();
  } else {
    gameStartDiv.style.display = "none";
    gameOverDiv.style.display = "none";
  }
  
  // Stop the current scene and start a fresh one
  game.scene.stop("scene-game");
  game.scene.start("scene-game");
});