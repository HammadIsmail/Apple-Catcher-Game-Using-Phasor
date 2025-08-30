// UI Effects and Animations for Apple Catcher Game

/**
 * Create animated background particles
 */
function createParticles() {
  const particlesContainer = document.getElementById('particles');
  const particleCount = 15;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    const size = Math.random() * 4 + 2;
    const left = Math.random() * 100;
    const animationDuration = Math.random() * 3 + 3;
    const delay = Math.random() * 2;

    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    particle.style.left = left + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDuration = animationDuration + 's';
    particle.style.animationDelay = delay + 's';

    particlesContainer.appendChild(particle);
  }
}

/**
 * Enhanced game over UI with dynamic messaging
 * @param {boolean} isWin - Whether the player won
 * @param {number} score - Final score
 */
function updateGameOverUI(isWin, score) {
  const gameWinLoseSpan = document.getElementById('gameWinLoseSpan');
  const scoreMessage = document.getElementById('scoreMessage');
  
  if (isWin) {
    gameWinLoseSpan.textContent = '🎉 WIN! 🎉';
    gameWinLoseSpan.className = 'win';
    scoreMessage.textContent = '🌟 Excellent job! You\'re an apple catching champion!';
  } else {
    gameWinLoseSpan.textContent = '💔 LOSE 💔';
    gameWinLoseSpan.className = 'lose';
    if (score >= 5) {
      scoreMessage.textContent = '👍 Not bad! Keep practicing to reach 10+ points!';
    } else {
      scoreMessage.textContent = '💪 Don\'t give up! Try again to improve your score!';
    }
  }
}

/**
 * Add ripple effect to buttons
 */
function addButtonEffects() {
  const buttons = document.querySelectorAll('.game-button');
  
  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      // Create ripple effect
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      ripple.style.position = 'absolute';
      ripple.style.borderRadius = '50%';
      ripple.style.background = 'rgba(255,255,255,0.3)';
      ripple.style.transform = 'scale(0)';
      ripple.style.animation = 'ripple 0.6s linear';
      ripple.style.pointerEvents = 'none';
      
      this.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
}

/**
 * Add screen transition effects
 * @param {HTMLElement} element - Element to animate
 * @param {string} type - Animation type ('fadeIn', 'slideIn', 'bounceIn')
 */
function animateScreenTransition(element, type = 'slideIn') {
  element.style.animation = 'none';
  element.offsetHeight; // Trigger reflow
  element.style.animation = `${type} 0.5s ease-out`;
}

/**
 * Show game start screen with animation
 */
function showGameStart() {
  const gameStartDiv = document.getElementById('gameStartDiv');
  const gameOverDiv = document.getElementById('gameOverDiv');
  
  gameOverDiv.style.display = 'none';
  gameStartDiv.style.display = 'flex';
  animateScreenTransition(gameStartDiv);
}

/**
 * Show game over screen with animation
 * @param {boolean} isWin - Whether the player won
 * @param {number} score - Final score
 */
function showGameOver(isWin, score) {
  const gameStartDiv = document.getElementById('gameStartDiv');
  const gameOverDiv = document.getElementById('gameOverDiv');
  const finalScore = document.getElementById('finalScore');
  
  gameStartDiv.style.display = 'none';
  gameOverDiv.style.display = 'flex';
  finalScore.textContent = score;
  
  updateGameOverUI(isWin, score);
  animateScreenTransition(gameOverDiv);
}

/**
 * Hide all UI screens (show only game canvas)
 */
function hideAllScreens() {
  const gameStartDiv = document.getElementById('gameStartDiv');
  const gameOverDiv = document.getElementById('gameOverDiv');
  
  gameStartDiv.style.display = 'none';
  gameOverDiv.style.display = 'none';
}

/**
 * Add sound effects to UI interactions
 */
function addSoundEffects() {
  // This would integrate with your game's sound system
  const buttons = document.querySelectorAll('.game-button');
  
  buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      // Play hover sound if available
      // playHoverSound();
    });
    
    button.addEventListener('click', () => {
      // Play click sound if available
      // playClickSound();
    });
  });
}

/**
 * Initialize all UI effects
 */
function initializeUIEffects() {
  createParticles();
  addButtonEffects();
  addSoundEffects();
  
  console.log('UI Effects initialized successfully!');
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeUIEffects);

// Export functions for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    updateGameOverUI,
    showGameStart,
    showGameOver,
    hideAllScreens,
    animateScreenTransition
  };
}