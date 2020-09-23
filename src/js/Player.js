class Player extends Component {
  constructor(x, y, w, h, color, image, controls, health_params) {
    super(x, y, w, h, color, image);
    this.controls = controls;
    this.moving = false;
    this.health = new Health(
      health_params.max_health,
      health_params.health_rect,
      health_params.color,
      health_params.border_margin,
      health_params.border_color
    );
    this.attack_range = ATTACK_RANGE;
    this.attack_damage = ATTACK_DAMAGE;
    this.other_player = undefined;
    this.direction = "right";
  }

  getPhysics(platforms) {
    if (this.moving) {
      this.drag = 1;
    } else {
      this.drag = DRAG;
    }
    super.getPhysics(platforms);

    if (this.x + this.w < 0) {
      this.health.health = 0;
    } else if (this.y + this.h < 0) {
      this.health.health = 0;
    } else if (this.x - this.w > canvas.width) {
      this.health.health = 0;
    } else if (this.y - this.h > canvas.height) {
      this.health.health = 0;
    }

    if (this.health.health === 0) {
      this.x = -1000;
      this.y = -1000;
    }
  }

  listenKeyDown(event) {
    if (!(this.health.health <= 0)) {
      switch (event.key) {
        case this.controls.left:
          this.moving = true;
          this.x_speed = -5;
          break;
        case this.controls.right:
          this.moving = true;
          this.x_speed = 5;
          break;
        case this.controls.up:
          this.jump();
          break;
        case this.controls.down:
          this.gravity = GRAVITY * 3;
          break;
        case this.controls.attack:
          this.attack();
          break;
      }
    }
  }

  listenKeyUp(event) {
    if (!(this.health.health <= 0)) {
      switch (event.key) {
        case this.controls.left:
          this.direction = "left";
          this.moving = false;
          break;
        case this.controls.right:
          this.direction = "right";
          this.moving = false;
          this.x_speed = 5;
          break;
        case this.controls.up:
          break;
        case this.controls.down:
          this.gravity = GRAVITY;
          break;
      }
    }
  }

  jump() {
    if (Math.abs(this.y_speed) < JUMP_SPEED_MARGIN) {
      this.y_speed = -JUMP_POWER;
    }
  }

  attack() {
    var distance =
      Math.abs(this.other_player.x - this.x) *
        Math.abs(this.other_player.x - this.x) +
      (Math.abs(this.other_player.y - this.y) / 2) *
        (Math.abs(this.other_player.y - this.y) / 2);
    if (distance <= this.attack_range * this.attack_range) {
      this.other_player.health.health -= this.attack_damage / round_number;
      this.other_player.moving = false;
      this.other_player.x_speed =
        (this.other_player.x - this.x) /
        ((10 * this.other_player.health.health) /
          this.other_player.health.max_health);
      this.other_player.y_speed =
        (this.other_player.y - this.y) /
        ((10 * this.other_player.health.health) /
          this.other_player.health.max_health);
    }
  }
}
