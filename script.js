// Simulate the player's name
const playerName = "Human Resistance Fighter";  // Simulated player name
document.getElementById('playerName').innerText = `Initiating User Interface for: ${playerName}`;

// Skynet server status
setTimeout(() => {
  document.getElementById('serverStatus').innerText = "Skynet systems are online. Preparing battlefield resources...";
}, 2000);

// Progress bar animation
let progressBar = document.querySelector('.progress');
let progress = 0;
let interval = setInterval(() => {
  progress += 10;
  progressBar.style.width = `${progress}%`;

  if (progress >= 100) {
    clearInterval(interval);
    document.getElementById('serverStatus').innerText = "All systems loaded. The future begins now.";
  }
}, 500);
