// Fireworks effect by @copilot, lightweight, no library.
const canvas = document.getElementById('fireworks');
const ctx = canvas.getContext('2d');
let W = window.innerWidth, H = window.innerHeight;
canvas.width = W;
canvas.height = H;

window.addEventListener('resize', () => {
  W = window.innerWidth; H = window.innerHeight;
  canvas.width = W; canvas.height = H;
});

class Particle {
  constructor(x, y, color, angle, speed) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.angle = angle;
    this.speed = speed * (0.6 + 0.4 * Math.random());
    this.radius = 2 + Math.random() * 2;
    this.life = 48 + Math.random() * 18;
    this.alpha = 1;
    this.gravity = 0.024 + 0.01 * Math.random();
  }
  update() {
    const rad = this.angle * Math.PI / 180;
    this.x += Math.cos(rad) * this.speed;
    this.y += Math.sin(rad) * this.speed + this.gravity * this.life;
    this.life--;
    this.alpha = Math.max(0, this.life / 60);
    this.radius *= 0.98;
  }
  draw(ctx) {
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
    ctx.fillStyle = this.color;
    ctx.shadowColor = this.color;
    ctx.shadowBlur = 10;
    ctx.fill();
    ctx.restore();
  }
}

function randomColor() {
  // Microsofty/techy palette
  const colors = ['#3a7bd5','#00d2ff','#ffdf00','#ff0084','#36ff6b','#ff6a00','#fff','#00ffea'];
  return colors[Math.floor(Math.random()*colors.length)];
}

class Firework {
  constructor() {
    this.x = 80 + Math.random() * (W-160);
    this.y = H * (0.45 + 0.12 * Math.random());
    this.color = randomColor();
    this.particles = [];
    let count = 28 + Math.floor(Math.random()*12);
    for (let i=0; i<count; ++i) {
      let angle = (360/count) * i + Math.random()*8;
      let speed = 2.8 + Math.random()*1.7;
      this.particles.push(new Particle(this.x, this.y, this.color, angle, speed));
    }
  }
  update() {
    this.particles.forEach(p=>p.update());
  }
  draw(ctx) {
    this.particles.forEach(p=>p.draw(ctx));
  }
  done() {
    return this.particles.every(p=>p.life<=0);
  }
}

let fireworks = [];
let fireworksTime = 0;
let fireworksRunning = true;
let t0 = Date.now();

function launchFirework() {
  fireworks.push(new Firework());
}

function animate() {
  ctx.clearRect(0, 0, W, H);
  fireworks.forEach(fw=>{fw.update(); fw.draw(ctx);});
  fireworks = fireworks.filter(fw=>!fw.done());
  // Add new ones at random
  if (fireworksRunning && Math.random() < 0.06) {
    launchFirework();
  }
  // Stop after 3.5s
  if (fireworksRunning && Date.now()-t0 > 3500) {
    fireworksRunning = false;
    setTimeout(()=>{
      document.getElementById('fireworks-container').classList.add('hide');
    }, 1200);
  }
  requestAnimationFrame(animate);
}

// Start up
for (let i=0;i<3;i++) setTimeout(()=>launchFirework(),i*450+Math.random()*180);
animate();
