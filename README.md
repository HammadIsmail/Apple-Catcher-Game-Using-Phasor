# 🍎 Apple Catcher Game

A fun, interactive browser-based game built with **Phaser.js** where players catch falling apples in a basket within 60 seconds! Features stunning animations, particle effects, and a modern gaming UI.

## ✨ **Features**

### 🎯 **Gameplay**
- **60-second time limit** - Race against the clock!
- **Score-based winning** - Catch 10+ apples to win
- **Smooth controls** - Use arrow keys to move your basket
- **Physics-based movement** - Realistic apple falling mechanics
- **Particle effects** - Satisfying visual feedback on catches

### 🎨 **Visual Design**
- **Modern UI/UX** - Clean, game-focused interface design
- **Animated backgrounds** - Floating particle effects
- **Gradient themes** - Beautiful color schemes and transitions
- **Responsive design** - Works on desktop and mobile devices
- **Custom animations** - Smooth transitions and hover effects

### 🔊 **Audio**
- **Background music** - Immersive gaming atmosphere
- **Sound effects** - Audio feedback for catching apples
- **Mute controls** - Optional audio management

### 🛠 **Technical Features**
- **Modular architecture** - Separated HTML, CSS, and JavaScript
- **Phaser.js integration** - Professional game engine
- **Canvas-based rendering** - High-performance graphics
- **Cross-browser compatibility** - Works on all modern browsers

## 🚀 **Quick Start**

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (for development)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/apple-catcher-game.git
   cd apple-catcher-game
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 📁 **Project Structure**

```
apple-catcher-game/
├── 📄 index.html          # Main HTML file
├── 🎨 style.css           # Game styling and animations  
├── ⚡ ui-effects.js       # UI animations and effects
├── 🎮 src/
│   └── main.js            # Main game logic (Phaser.js)
├── 🖼️ assets/
│   ├── bg.png             # Background image
│   ├── apple.png          # Apple sprite
│   ├── basket.png         # Basket sprite
│   ├── money.png          # Particle effect sprite
│   ├── bgMusic.mp3        # Background music
│   ├── catchSound.mp3     # Catch sound effect
│   └── favicon.ico        # Website icon
├── 📋 package.json        # Project dependencies
└── 📖 README.md           # This file
```

## 🎯 **How to Play**

1. **Start the Game** 🚀
   - Click the "Start Game" button on the welcome screen

2. **Move Your Basket** ⬅️➡️
   - Use **Left Arrow** (←) and **Right Arrow** (→) keys
   - Move the basket to catch falling apples

3. **Catch Apples** 🍎
   - Position your basket under falling apples
   - Each caught apple increases your score by 1 point

4. **Win Condition** 🏆
   - Score **10 or more points** within 60 seconds to win
   - Watch the timer in the top-right corner

5. **Game Over** 🔄
   - Game ends when time runs out
   - Click "Play Again" to restart

## 🛠 **Development**

### Built With
- **[Phaser.js](https://phaser.io/)** - HTML5 game framework
- **[Vite](https://vitejs.dev/)** - Build tool and dev server  
- **Vanilla CSS** - Custom styling with modern features
- **ES6+ JavaScript** - Modern JavaScript features

### Key Files

#### `src/main.js` - Game Logic
- Phaser game configuration
- Scene management
- Physics and collision detection
- Game state management

#### `style.css` - Styling
- CSS custom properties for theming
- Animations and transitions
- Responsive design
- Modern visual effects

#### `ui-effects.js` - UI Enhancements
- Particle background effects
- Button interactions and ripple effects
- Screen transitions
- Dynamic UI updates

## 🎨 **Customization**

### Changing Colors
Edit CSS custom properties in `style.css`:
```css
:root {
  --darkColor: #0B1426;
  --lightColor: #F8FAFC;
  --accentColor: #1E40AF;
  --successColor: #10B981;
  --dangerColor: #EF4444;
}
```

### Adjusting Game Settings
Modify constants in `src/main.js`:
```javascript
const speedDown = 300;        // Apple falling speed
const playerSpeed = 350;      // Basket movement speed
const gameTime = 60000;       // Game duration (milliseconds)
const winningScore = 10;      // Points needed to win
```

### Adding New Features
- **Power-ups**: Add special apple types in `preload()` and `create()`
- **Levels**: Implement difficulty progression
- **High scores**: Add local storage for score tracking
- **Mobile controls**: Add touch controls for mobile devices

## 🤝 **Contributing**

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Commit your changes**
   ```bash
   git commit -m "Add amazing feature"
   ```
5. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request**

### Development Guidelines
- Follow existing code style
- Test on multiple browsers
- Update documentation for new features
- Keep commits focused and descriptive

## 🐛 **Known Issues**

- [ ] Audio may not autoplay on some browsers (user interaction required)
- [ ] Mobile touch controls not yet implemented
- [ ] High score persistence needs local storage implementation

## 🔮 **Future Enhancements**

- [ ] **Mobile Support** - Touch controls for mobile devices
- [ ] **High Score System** - Track and display best scores
- [ ] **Multiple Levels** - Progressive difficulty
- [ ] **Power-ups** - Special apples with bonus effects
- [ ] **Achievements** - Unlock system for milestones
- [ ] **Online Leaderboard** - Compete with other players
- [ ] **Sound Settings** - Volume controls and audio preferences




## 🙏 **Acknowledgments**

- **[Phaser.js](https://phaser.io/)** - Amazing game framework
- **[Google Fonts](https://fonts.google.com/)** - Fredoka font family
- **Inspiration** - Classic arcade-style catching games

