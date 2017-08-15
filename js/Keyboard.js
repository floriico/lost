function Keyboard (options) {
  this.keyDowns = {
    up: false,
    down: false,
    left: false,
    right: false
  };
  this.element = options.element;
  this.element.addEventListener('keydown', this.onKeyDown.bind(this));
  this.element.addEventListener('keyup', this.onKeyUp.bind(this));
}

Keyboard.prototype.onKeyUp = function (ev) {
  this.updateKey(ev.keyCode, true);
};

Keyboard.prototype.onKeyDown = function (ev) {
  this.updateKey(ev.keyCode, false);
};

Keyboard.prototype.updateKey = function (keyCode, value) {
  if (keyCode === 38 || keyCode === 87 || keyCode === 90) {
    this.keyDowns.up = value;
  } else if (keyCode === 40 || keyCode === 83) {
    this.keyDowns.down = value;
  } else if (keyCode === 39 || keyCode === 68) {
    this.keyDowns.right = value;
  } else if (keyCode === 37 || keyCode === 65 || keyCode === 81) {
    this.keyDowns.left = value;
  }
};
