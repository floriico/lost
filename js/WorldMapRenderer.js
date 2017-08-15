function WorldMapRenderer (worldMap, context2d) {
  this.worldMap = worldMap;
  this.context2d = context2d;
}

WorldMapRenderer.prototype.render = function () {
  var ctx = this.context2d;
  this.worldMap.tiles.forEach(function (tile, index) {
    var x = index % this.worldMap.width;
    var y = Math.floor(index / this.worldMap.width);

    ctx.fillStyle = '#5' + (tile.height + 5).toString(16) + 'a';
    ctx.fillRect(x * 16, y * 16, x * 16 + 16, y * 16 + 16);
  }, this);
};
