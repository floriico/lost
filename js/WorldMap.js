function WorldMap (width, height) {
  var i;

  this.width = width;
  this.height = height;
  this.size = width * height;
  this.tiles = new Array(this.size);
  i = this.size;
  while (i-- > 0) { this.tiles[i] = { height: 0 }; }
}

WorldMap.prototype.generateMountains = function () {
  var stack = [];
  var tileId;
  var mountains = new Array(Math.floor(this.size * 0.015));

  mountains.fill({})
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

WorldMap.prototype.erode = function (steps) {
  while (steps-- > 0) {
    this.tiles.forEach(function (tile, index) {
      var that = this;
      var score = [ index - 1,
        index + 1,
        index - this.width,
        index + this.width,
        index - this.width - 1,
        index - this.width + 1,
        index + this.width - 1,
        index + this.width + 1
      ].reduce(function (total, index) {
        var diff;

        if ((index >= 0) && (index < that.size)) {
          diff = tile.height - that.tiles[index].height;
          if (diff > 0) {
            total -= 1;
          } else if (diff < 0) {
            total += 1;
          }
        }
        return total;
      }, 0);
      if (score < -2 && tile.height > 0) {
        tile.height -= 1;
      } else if (score > 4 && tile.height < 9) {
        tile.height += 1;
      }
    }, this);
  }
};
