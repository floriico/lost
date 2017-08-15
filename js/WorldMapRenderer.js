function WorldMapRenderer (options) {
  this.worldMap = options.worldMap;
  this.player = options.player;
  this.canvas = options.canvas;
}

WorldMapRenderer.prototype.render = function () {
  var ctx = this.canvas.getContext('2d');
  var tileWidth = this.canvas.width / 16 + 1;
  var tileHeight = this.canvas.height / 16 + 1;
  var tileOffsetX = Math.floor(this.player.x / 16) - Math.floor(tileWidth / 2);
  var tileOffsetY = Math.floor(this.player.y / 16) - Math.floor(tileHeight / 2);
  var len = tileHeight * tileWidth;
  var tile;
  var tileIndex;
  var tileX;
  var tileY;
  var pixelOffsetX = this.player.x % this.worldMap.tileSize;
  var pixelOffsetY = this.player.y % this.worldMap.tileSize;
  var i;

  ctx.fillStyle = '#55a';
  ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  for (i = 0; i < len; i++) {
    tileX = i % tileWidth;
    tileY = Math.floor(i / tileWidth);

    if (((tileX + tileOffsetX) >= 0) && ((tileY + tileOffsetY) >= 0)) {
      tileIndex = tileX + tileOffsetX + (tileY + tileOffsetY) * this.worldMap.width;
      if (tileIndex >= 0 && tileIndex < this.worldMap.size) {
        tile = this.worldMap.tiles[tileIndex];
        ctx.fillStyle = '#5' + (tile.height + 5).toString(16) + 'a';
        ctx.fillRect(tileX * 16 - pixelOffsetX, tileY * 16 - pixelOffsetY,
            this.worldMap.tileSize, this.worldMap.tileSize);
      }
    }
  }
};
