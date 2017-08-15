function PlayerRenderer (options) {
  this.player = options.player;
  this.canvas = options.canvas;
}

PlayerRenderer.prototype.render = function () {
  var ctx = this.canvas.getContext('2d');
  var center = {
    x: Math.floor(this.canvas.width / 2),
    y: Math.floor(this.canvas.height / 2)
  };

  ctx.fillStyle = '#fabbec';
  ctx.fillRect(center.x - 5, center.y - 20, 10, 20);
};
