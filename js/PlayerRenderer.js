function PlayerRenderer (options) {
  this.player = options.player;
  this.canvas = options.canvas;
  this.sprites = options.sprites;
}

PlayerRenderer.prototype.render = function () {
  var ctx = this.canvas.getContext('2d');
  var center = {
    x: Math.floor(this.canvas.width / 2),
    y: Math.floor(this.canvas.height / 2)
  };

  ctx.fillStyle = '#fabbec';
  ctx.fillRect(center.x - 5, center.y - 20, 10, 20);
  this.renderInventory();
};

PlayerRenderer.prototype.renderInventory = function () {
  var ctx = this.canvas.getContext('2d');
  var offsetY = Math.floor(this.canvas.height / 5);

  ctx.font = '10px sans-serif';
  ctx.fillStyle = Colors.white;
  ctx.fillText(this.player.transmitter ? '1 x' : '0 x', this.canvas.width - 50, offsetY + 10);
  ctx.drawImage(this.sprites.spriteSheet,
      this.sprites.ids.transmitter.offset.x, this.sprites.ids.transmitter.offset.y, 16, 16,
      this.canvas.width - 32, offsetY, 16, 16);
  ctx.fillText(this.player.antenna ? '1 x' : '0 x', this.canvas.width - 50, offsetY + 32 + 10);
  ctx.drawImage(this.sprites.spriteSheet,
      this.sprites.ids.antenna.offset.x, this.sprites.ids.antenna.offset.y, 16, 16,
      this.canvas.width - 32, offsetY + 32, 16, 16);
  ctx.fillText(this.player.battery ? '1 x' : '0 x', this.canvas.width - 50, offsetY + 64 + 10);
  ctx.drawImage(this.sprites.spriteSheet,
      this.sprites.ids.battery.offset.x, this.sprites.ids.battery.offset.y, 16, 16,
      this.canvas.width - 32, offsetY + 64, 16, 16);
}
