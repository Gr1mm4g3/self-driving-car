class Car {
    
    // Constructor for the car
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.speed = 0;
        this.acceleration = 0.2;
        this.maxSpeed = 3;
        this.friction = 0.05;

        this.controls = new Controls();
    }

    update() {

        // Control the car
        if (this.controls.up) {
            this.speed += this.acceleration;
        }
        if (this.controls.down) {
            this.speed -= this.acceleration;
        }
        if (this.controls.left) {
            this.x -= 2;
        }
        if (this.controls.right) {
            this.x += 2;
        }

        // Speed cap
        if (this.speed > this.maxSpeed) {
            this.speed = this.maxSpeed;
        }
        if (this.speed <- this.maxSpeed / 2) { 
            this.speed =- this.maxSpeed / 2;
        }

        // Check if the speed is > 0. If so, apply friction
        if (this.speed > 0) {
            this.speed -= this.friction;
        }
        if (this.speed < 0) {
            this.speed += this.friction;
        }

        // Prevent the car from moving if the speed is < friction
        if (Math.abs(this.speed) < this.friction) {
            this.speed = 0;
        }

        this.y -= this.speed;
        
    }

    // Draw the car
    draw(ctx) {
        ctx.beginPath();
        ctx.rect(
            this.x - this.width / 2,
            this.y - this.height / 2,
            this.width,
            this.height
        );
        ctx.fill();
    }
}