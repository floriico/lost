function PlayerUpdater (options) {
  this.player = options.player;
  this.keyboard = options.keyboard;
  this.worldMap = options.worldMap;
  this.hpBar = options.hpBar;
  this.hungerTime = 0;
}

PlayerUpdater.prototype.update = function (deltaTime) {
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
  destX = this.player.x + this.player.velocityX * 8;
  destY = this.player.y + this.player.velocityY * 8;
  if (this.validateMove(destX, destY)) {
    this.player.x = destX;
    this.player.y = destY;
  }
  this.hunger(deltaTime);
  this.updateHpBar();
};

PlayerUpdater.prototype.validateMove = function (x, y) {
  var isValide = true;
  var tileX;
  var tileY;

  if ((x < 0) || (x > (this.worldMap.width * this.worldMap.tileSize)) ||
      (y < 0) || (y > (this.worldMap.height * this.worldMap.tileSize))) {
    isValide = false;
  } else {
    tileX = Math.floor(x / this.worldMap.tileSize);
    tileY = Math.floor(y / this.worldMap.tileSize);
    if (this.worldMap.tiles[tileX + tileY * this.worldMap.width].height <= 1) {
      isValide = false;
    }
  }
  return isValide;
};

PlayerUpdater.prototype.hunger = function (dt) {
  this.hungerTime += dt;
  if (this.hungerTime > 1000) {
    this.hungerTime -= 1000;
    this.player.hp -= 1;
  }
};

PlayerUpdater.prototype.updateHpBar = function () {
  var heartNb = Math.ceil(this.player.hp);
  var heartStr = '';
  var i;

  for (i = 0; i < heartNb; i++) {
    heartStr += '\u2764';
  }
  this.hpBar.textContent = heartStr;
};
