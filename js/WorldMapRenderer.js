function WorldMapRenderer (options) {
  this.worldMap = options.worldMap;
  this.sprites = options.sprites;
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
  var spriteOffset;
  var i;

  ctx.fillStyle = Colors.darkBlue;
  ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  for (i = 0; i < len; i++) {
    tileX = i % tileWidth;
    tileY = Math.floor(i / tileWidth);

    if (((tileX + tileOffsetX) >= 0) && ((tileY + tileOffsetY) >= 0)) {
      tileIndex = tileX + tileOffsetX + (tileY + tileOffsetY) * this.worldMap.width;
      if (tileIndex >= 0 && tileIndex < this.worldMap.size) {
        tile = this.worldMap.tiles[tileIndex];
        if (tile.height === 0) {
          spriteOffset = this.sprites.ids.deepOcean.offset;
        } else if (tile.height === 1) {
          spriteOffset = this.sprites.ids.ocean.offset;
        } else if (tile.height === 2) {
          spriteOffset = this.sprites.ids.coast.offset;
        } else if (tile.height === 3) {
          spriteOffset = this.sprites.ids.wetSand.offset;
        } else if (tile.height === 4) {
          spriteOffset = this.sprites.ids.sand.offset;
        } else if (tile.height === 5) {
          spriteOffset = this.sprites.ids.grass.offset;
        } else if (tile.height === 6) {
          spriteOffset = this.sprites.ids.forest.offset;
        } else if (tile.height === 7) {
          spriteOffset = this.sprites.ids.dirtGrass.offset;
        } else if (tile.height === 8) {
          spriteOffset = this.sprites.ids.dirtStone.offset;
        } else if (tile.height === 9) {
          spriteOffset = this.sprites.ids.stone.offset;
        }
        ctx.drawImage(this.sprites.spriteSheet, spriteOffset, 0, 16, 16,
            tileX * 16 - pixelOffsetX, tileY * 16 - pixelOffsetY, 16, 16);

      }
    }
  }
};
