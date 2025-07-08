const status = document.getElementById("status");
const startBtn = document.getElementById("startBtn");

showRules();
const lights = ["red", "yellow", "green"];
let seq = [];
let playerStep = 0;
let accepting = false;

const lightEle = {
  red: document.getElementById("red"),
  yellow: document.getElementById("yellow"),
  green: document.getElementById("green"),
};


startBtn.onclick = () => {
seq = [];
playerStep = 0;
nextRound();
};

function nextRound() {
  accepting = false;
  const next = lights[Math.floor(Math.random() * lights.length)];
  seq.push(next);
  playSequence(seq);
}

function playSequence(seq) {
  let i = 0;
  status.textContent = "Memorize the magic blinks! ✨";
  const interval = setInterval(() => {
    activateLight(seq[i]);
    i++;
    if (i >= seq.length) {
      clearInterval(interval);
      accepting = true;
      playerStep = 0;
      status.textContent = "Now repeat the sequence!";
    }
  }, 800);
}

function activateLight(color) {
  lightEle[color].classList.add("active");
  setTimeout(() => {
    lightEle[color].classList.remove("active");
  }, 400);
}

Object.keys(lightEle).forEach(color => {
  lightEle[color].addEventListener("click", () => {
    if (!accepting) return;
    const expected = seq[playerStep];
    if (color === expected) {
      activateLight(color);
      playerStep++;
      if (playerStep === seq.length) {
        status.textContent = "✅ Correct! Next round...";
        setTimeout(nextRound, 1000);
      }
    } else {
      status.innerHTML = `<p>❌ Wrong! You reached round ${seq.length}<br>&nbsp;&nbsp;&nbsp;&nbsp;<span>Brain battery died at round ${seq.length} 😅</span></p>`;
      accepting = false;
    }
  });
});

function showRules() {
  const box = document.getElementById("rules");
  box.style.display = "block";
  startBtn.disabled = true;
}

function hideRules() {
  document.getElementById("rules").style.display = "none";
  startBtn.disabled = false;
}



