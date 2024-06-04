const canvas = document.getElementById('spaceCanvas');
const ctx = canvas.getContext('2d');

// Dibujar el fondo del espacio (negro)
ctx.fillStyle = 'black';
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Función para dibujar estrellas
function drawStar(x, y, radius) {
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();
}

// Dibujar múltiples estrellas en posiciones aleatorias
for (let i = 0; i < 100; i++) {
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    let radius = Math.random() * 2;
    drawStar(x, y, radius);
}

// Función para dibujar planetas con gradiente radial
function drawPlanet(x, y, radius, innerColor, outerColor) {
    const gradient = ctx.createRadialGradient(x, y, radius * 0.1, x, y, radius);
    gradient.addColorStop(0, innerColor);
    gradient.addColorStop(1, outerColor);
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();
}

// Dibujar tres planetas con colores degradados
drawPlanet(200, 200, 50, 'lightblue', 'blue');
drawPlanet(600, 150, 70, 'lightgreen', 'green');
drawPlanet(400, 400, 40, 'lightcoral', 'red');

// Función para dibujar cometa
function drawComet(x, y, radius) {
    // Dibujar la cabeza del cometa
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();

    // Dibujar la cola del cometa
    const gradient = ctx.createLinearGradient(x, y, x - 100, y - 100);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x - 100, y - 50);
    ctx.lineTo(x - 80, y - 80);
    ctx.lineTo(x, y);
    ctx.fill();
}

drawComet(700, 500, 10);

// Función para dibujar un jet de combate con la punta hacia arriba
function drawJet(x, y) {
    ctx.fillStyle = 'gray';
    ctx.beginPath();
    ctx.moveTo(x, y - 30); // punta del jet (arriba)
    ctx.lineTo(x - 20, y); // ala izquierda
    ctx.lineTo(x - 5, y + 10); // parte trasera izquierda
    ctx.lineTo(x + 5, y + 10); // parte trasera derecha
    ctx.lineTo(x + 20, y); // ala derecha
    ctx.closePath();
    ctx.fill();

    // Dibujar la cabina del jet
    ctx.fillStyle = 'lightblue';
    ctx.beginPath();
    ctx.arc(x, y - 30, 7, 0, Math.PI * 1);
    ctx.fill();
}

// Dibujar el jet de combate en la parte inferior del canvas
drawJet(400, 550);
