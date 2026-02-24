
# 🎮 Color War Game – A React Timer Based Score Battle

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![MUI](https://img.shields.io/badge/MUI-007FFF?style=for-the-badge&logo=mui&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-100000?style=for-the-badge&logo=github&logoColor=white)

Color War Game is an interactive React-based mini game where multiple colors compete in a timed score battle. Players increase the score of each color by clicking buttons, and the color with the highest score at the end of the countdown wins.

A modern and responsive Todo Application built using React + Vite + Material UI with fast performance and clean UI.

---


## 🌐 Live Demo

🔗 https://karansinh1818.github.io/color-war-game/

---

## 🚀 Live Deployment

🔗 https://color-war-game-km18.vercel.app/
---

## 🚀 Features

* ⏳ 30-second countdown timer
* 🎨 Four competing colors (Orange Red, Green,Blue,Purple,Yellow)
* 📊 Real-time score updates
* 🏆 Automatic winner detection
* 🔄 Reset game functionality
* 🎯 Total moves counter
* ✨ Animated winner banner
* 🎨 Modern responsive UI design
* 📱 Responsive grid layout
* 💫 Hover effects & neon UI

---

## 🛠️ Technologies Used

* React.js (useState, useEffect)
* CSS3 (Grid, Animations, Transitions)
* Material UI (Reset Button Component)
- HTML5
- CSS3  
- JavaScript (ES6+)  

---

# 📦 Installation & Setup


## 🔹 Step 1: Clone Repository

```bash
git clone https://github.com/karansinh1818/Color-War-Game.git
cd Color-War-Game
```

---

## 🔹 Step 2: Install Dependencies

Make sure you have **Node.js (v16 or later)** installed.

```bash
npm install
```

---

## 🔹 Step 3: Run Locally

```bash
npm run dev
```

Open browser:

```
http://localhost:5173/
```

---

## 🔹 Step 4: Build for Production

```bash
npm run build
```

This creates a `dist` folder.

---

# 🚀 Deploy to GitHub Pages

## 🔹 Step 5: Install gh-pages

```bash
npm install gh-pages --save-dev
```

---

## 🔹 Step 6: Update vite.config.js

```js
import { defineConfig } from 'vite'

export default defineConfig({
  base: "/Color-War-Game/",
})
```

⚠ Replace with your repository name if different.

---

## 🔹 Step 7: Update package.json Scripts

Add inside "scripts":

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

Final example:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

---

## 🔹 Step 8: Deploy

```bash
npm run deploy
```

After deployment:

1. Go to GitHub repository  
2. Open Settings  
3. Click Pages  
4. Select branch: `gh-pages`  
5. Click Save  

---

## 🛠 Requirements

- Node.js (v16+)
- npm
- Git
- GitHub Account

---

## 🧠 Game Logic

- Each color has its own move counter.
- Players increase score using "+1" button.
- Game runs for 30 seconds.
- When timer reaches 0:
  - Highest score color becomes winner.
  - All buttons are disabled.
  - Winner banner is displayed.
- Reset button restarts the game.

---

## 🌟 Future Improvements

* 🔊 Sound effects
* 🏅 Leaderboard system
* 🌙 Dark/Light mode toggle
* 🔥 Multiplayer functionality
* 📱 Enhanced mobile optimization

---

## 👨‍💻 Author

**Karansinh Mori**  
Frontend Developer 🚀  

---

## ⭐ Support

If you like this project, feel free to give it a star ⭐ on GitHub!
- 👨‍💻 Follow for more projects 👉 https://github.com/karansinh1818

---
