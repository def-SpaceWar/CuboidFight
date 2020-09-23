class Button {
  constructor(
    x,
    y,
    w,
    h,
    colors,
    border_margin,
    border_color,
    text,
    text_color,
    font,
    on_click
  ) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.colors = colors;
    this.color = colors.inactive;
    this.border_margin = border_margin;
    this.border_color = border_color;
    this.text = text;
    this.text_color = text_color;
    this.font = font;
    this.on_click = on_click;
    this.is_pressed = false;
  }

  draw() {
    context.fillStyle = this.border_color;
    context.fillRect(
      this.x - this.border_margin,
      this.y - this.border_margin,
      this.w + this.border_margin * 2,
      this.h + this.border_margin * 2
    );
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.w, this.h);
    context.fillStyle = this.text_color;
    context.font = this.font;
    context.fillText(
      this.text,
      this.x + this.w / 2,
      this.y + this.h / 2 + this.border_margin / 2,
      this.w,
      this.h
    );
  }

  listenMouseMove(event) {
    var rect = canvas.getBoundingClientRect();
    let mouse_x = event.clientX - rect.left;
    let mouse_y = event.clientY - rect.top;
    if (
      mouse_x >= this.x + this.border_margin &&
      mouse_x <= this.x + this.w - this.border_margin
    ) {
      if (mouse_y >= this.y && mouse_y <= this.y + this.h) {
        this.color = this.colors.active;
      } else {
        this.color = this.colors.inactive;
      }
    }
  }

  listenMouseDown(event) {
    var rect = canvas.getBoundingClientRect();
    let mouse_x = event.clientX - rect.left;
    let mouse_y = event.clientY - rect.top;
    if (mouse_x >= this.x && mouse_x <= this.x + this.w) {
      if (mouse_y >= this.y && mouse_y <= this.y + this.h) {
        this.color = this.colors.pressed;
        this.is_pressed = true;
      } else {
        this.color = this.colors.inactive;
      }
    }
  }

  listenMouseUp(event) {
    var rect = canvas.getBoundingClientRect();
    let mouse_x = event.clientX - rect.left;
    let mouse_y = event.clientY - rect.top;
    if (mouse_x >= this.x && mouse_x <= this.x + this.w) {
      if (mouse_y >= this.y && mouse_y <= this.y + this.h) {
        this.x = -1000;
        this.y = -1000;
        this.w = 0;
        this.h = 0;
        this.on_click();
      } else {
        this.color = this.colors.inactive;
      }
    }
  }
}
