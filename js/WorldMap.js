function WorldMap (width, height) {
  var i;

  this.width = width;
  this.height = height;
  this.size = width * height;
  this.tiles = new Array(this.size);
  i = this.size;
  while (i--) { this.tiles[i] = { height: 0 }; }
}

WorldMap.prototype.generateMountains = function () {
  var stack = [];
  var tileId;

  [1, 2, 3, 4, 5, 6, 7, 8] // 8 mountains
    .map(function () {
      return {
        x: Math.floor(Math.random() * (this.width / 2) + this.width / 4),
        y: Math.floor(Math.random() * (this.height / 2) + this.height / 4)
      };
    }, this)
    .forEach(function (coord) {
      var index = coord.x + coord.y * this.width;

      this.tiles[index].height = 9;
      stack.push(index);
    }, this);
  console.log(this.tiles);
  tileId = stack.pop();
  while (tileId) {
    var height = this.tiles[tileId].height - 1;

    [ tileId - 1,
      tileId + 1,
      tileId - this.width,
      tileId + this.width,
      tileId - this.width - 1,
      tileId - this.width + 1,
      tileId + this.width - 1,
      tileId + this.width + 1
    ].forEach(function (index) {
      if ((height > 0) && (index >= 0) && (index < this.size) && (this.tiles[index].height < height)) {
        this.tiles[index].height = height;
        stack.push(index);
      }
    }, this);
    tileId = stack.pop();
  }
};
