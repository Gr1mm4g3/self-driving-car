const canvas = document.getElementById('myCanvas');
canvas.width = 200;

const ctx = canvas.getContext('2d');
const car = new Car(100, 100, 30, 50);
car.draw(ctx);

animate();

// The animate function redraws the car every frame, giving the illusion of movement
function animate() {
    car.update();
    canvas.height = window.innerHeight;
    car.draw(ctx);
    requestAnimationFrame(animate);
}