
    function Circle(x, y, radius, dx, dy, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = dx; // vận tốc theo trục X
    this.dy = dy; // vận tốc theo trục Y
    this.color = color;

    this.draw = function (ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = this.color;
    ctx.fill();
};

    this.update = function (ctx) {
    // Kiểm tra va chạm viền và đổi hướng
    if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
    this.dx = -this.dx;
}
    if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
    this.dy = -this.dy;
}

    this.x += this.dx;
    this.y += this.dy;

    this.draw(ctx);
};
}

    function getRandomHex() {
    return Math.floor(Math.random() * 255);
}

    function getRandomColor() {
    var red = getRandomHex();
    var green = getRandomHex();
    var blue = getRandomHex();
    return "rgb(" + red + "," + green + "," + blue + ")";
}

    const canvas = document.getElementById("myCanvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext("2d");

    let circles = [];

    function createMultipleCircles(num = 30) {
    for (let i = 0; i < num; i++) {
    const radius = Math.floor(Math.random() * 30) + 10;
    const x = Math.random() * (canvas.width - radius * 2) + radius;
    const y = Math.random() * (canvas.height - radius * 2) + radius;
    const dx = (Math.random() - 0.5) * 4; // Vận tốc ngẫu nhiên
    const dy = (Math.random() - 0.5) * 4;
    const color = getRandomColor();
    circles.push(new Circle(x, y, radius, dx, dy, color));
}
}

    function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const circle of circles) {
    circle.update(ctx);
}
}

    createMultipleCircles(30);
    animate();

