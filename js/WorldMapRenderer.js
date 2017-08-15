function WorldMapRenderer (options) {
  this.worldMap = options.worldMap;
  this.player = options.player;
  this.canvas = options.canvas;
}

WorldMapRenderer.prototype.render = function () {
  var ctx = this.canvas.getContext('2d');
  var tileWidth = this.canvas.width / 16;
  var tileHeight = this.canvas.height / 16;
  var tileOffsetX = Math.floor(this.player.x / 16) - Math.floor(tileWidth / 2);
  var tileOffsetY = Math.floor(this.player.y / 16) - Math.floor(tileHeight / 2);
  var len = tileHeight * tileWidth;
  var tile;
  var tileIndex;
  var i, x, y;

  for (i = 0; i < len; i++) {
    x = i % tileWidth;
    y = Math.floor(i / tileWidth);
    if (((x + tileOffsetX) >= 0) && ((y + tileOffsetY) >= 0)) {
      tileIndex = x + tileOffsetX + (y + tileOffsetY) * this.worldMap.width;
      if (tileIndex >= 0 && tileIndex < this.worldMap.size) {
        tile = this.worldMap.tiles[tileIndex];
        ctx.fillStyle = '#5' + (tile.height + 5).toString(16) + 'a';
        ctx.fillRect(x * 16, y * 16, 16, 16);
      }
    }
  }
};
