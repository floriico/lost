function PlayerUpdater (options) {
  this.player = options.player;
  this.keyboard = options.keyboard;
  this.worldMap = options.worldMap;
}

PlayerUpdater.prototype.update = function () {
  var destX;
  var destY;

  if (this.keyboard.keys.up) {
    this.player.velocityY = -1;
  } else if (this.keyboard.keys.down) {
    this.player.velocityY = 1;
  } else {
    this.player.velocityY = 0;
  }
  if (this.keyboard.keys.right) {
    this.player.velocityX = 1;
  } else if (this.keyboard.keys.left) {
    this.player.velocityX = -1;
  } else {
    this.player.velocityX = 0;
  }
  destX = this.player.x + this.player.velocityX;
  destY = this.player.y + this.player.velocityY;
  if (this.validateMove(destX, destY)) {
    this.player.x = destX;
    this.player.y = destY;
  }
};

PlayerUpdater.prototype.validateMove = function (x, y) {
  var isValide = true;

  if ((x < 0) || (x > (this.worldMap.width * this.worldMap.tileSize)) ||
      (y < 0) || (y > (this.worldMap.height * this.worldMap.tileSize))) {
    isValide = false;
  }
  return isValide;
};
