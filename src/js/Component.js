class Component {
  constructor(x, y, w, h, color) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color;

    this.x_speed = 0;
    this.y_speed = 0;
    this.gravity = GRAVITY;
    this.drag = DRAG;
    this.platforms = [];
  }

  draw() {
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.w, this.h);
  }

  getPhysics(platforms) {
    this.x += this.x_speed;

    this.y += this.y_speed;
    this.y_speed += this.gravity;
    this.x_speed *= this.drag;

    if (!!platforms) {
      for (var i = 0; i < platforms.length; i++) {
        let other = platforms[i];

        if (other.x <= this.x && other.x + other.w > this.x) {
          if (this.y + this.h > other.y && this.y < other.y) {
            if (this.y_speed > 0) {
              this.y = other.y - this.h;
            }
            this.y_speed = 0;
          }
        } else if (this.x <= other.x && this.x + this.w > other.x) {
          if (this.y + this.h > other.y && this.y < other.y) {
            if (this.y_speed > 0) {
              this.y = other.y - this.h;
            }
            this.y_speed = 0;
          }
        }
      }
    }
  }
}
