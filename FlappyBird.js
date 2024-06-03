const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const pipeWidth = 50;
const pipeGap = 120;
const pipeHeight = 320;
const pipes = [
    { x: 100, y: -200 },
    { x: 200, y: -150 },
    { x: 300, y: -180 }
];

const clouds = [
    { x: 60, y: 50, width: 80, height: 40 },
    { x: 160, y: 100, width: 100, height: 50 },
    { x: 220, y: 40, width: 120, height: 60 }
];

function drawBackground() {
    context.fillStyle = '#70c5ce';
    context.fillRect(0, 0, canvas.width, canvas.height);
}

function drawGround() {
    context.fillStyle = '#ded895';
    context.fillRect(0, canvas.height - 50, canvas.width, 50);

    context.fillStyle = '#a8a75c';
    for (let i = 0; i < canvas.width; i += 20) {
        context.fillRect(i, canvas.height - 50, 20, 10);
    }
}

function drawPipe(x, y, height) {
    context.fillStyle = '#5bba39';
    context.fillRect(x, y, pipeWidth, height);
    context.fillStyle = '#458a29';
    context.fillRect(x - 5, y - 5, pipeWidth + 10, 20);
}

function drawPipes() {
    pipes.forEach(pipe => {
        drawPipe(pipe.x, pipe.y, pipeHeight);
        drawPipe(pipe.x, pipe.y + pipeHeight + pipeGap, canvas.height - (pipe.y + pipeHeight + pipeGap));
    });
}

function drawCloud(x, y, width, height) {
    context.fillStyle = 'white';
    context.beginPath();
    context.arc(x, y, height / 2, Math.PI * 0.5, Math.PI * 1.5);
    context.arc(x + width / 2, y - height / 2, height / 2, Math.PI * 1, Math.PI * 2);
    context.arc(x + width, y, height / 2, Math.PI * 1.5, Math.PI * 0.5);
    context.closePath();
    context.fill();
}

function drawClouds() {
    clouds.forEach(cloud => {
        drawCloud(cloud.x, cloud.y, cloud.width, cloud.height);
    });
}

function draw() {
    drawBackground();
    drawClouds();
    drawGround();
    drawPipes();
}

draw();
