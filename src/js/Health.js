class Health {
  constructor(max_health, health_rect, color, border_margin, border_color) {
    this.health = max_health;
    this.max_health = max_health;

    // health_rect = {x: 0, y: 0, w: 0, h: 0}
    this.health_rect = health_rect;
    this.color = color;
    this.border_margin = border_margin;
    this.border_color = border_color;
  }

  draw() {
    context.fillStyle = this.border_color;
    context.fillRect(
      this.health_rect.x - this.border_margin,
      this.health_rect.y - this.border_margin,
      this.health_rect.w + this.border_margin * 2,
      this.health_rect.h + this.border_margin * 2
    );
    context.fillStyle = this.color + "22";
    context.fillRect(
      this.health_rect.x,
      this.health_rect.y,
      this.health_rect.w,
      this.health_rect.h
    );
    if (this.health >= 0) {
      context.fillStyle = this.color;
      context.fillRect(
        this.health_rect.x,
        this.health_rect.y,
        (this.health_rect.w * this.health) / this.max_health,
        this.health_rect.h
      );
    }
  }
}
