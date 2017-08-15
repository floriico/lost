function Sprites() {
  this.ids = {
     deepOcean: { offset: 0 },
     ocean: { offset: 16 },
     coast: { offset: 32 },
     wetSand: { offset: 48 },
     sand: { offset: 64 },
     grass: { offset: 80 },
     forest: { offset: 96 },
     dirtGrass: { offset: 112 },
     dirtStone: { offset: 128 },
     stone: { offset: 144 },
     appleTree: { offset: 160 }
  };
  this.spriteSheet = document.createElement('canvas');
  this.spriteSheet.width = 16 * Object.keys(this.ids).length;
  this.spriteSheet.height = 16;
  this.context2d = this.spriteSheet.getContext('2d');
}

Sprites.prototype.generate = function () {
  this.generateDeepOcean();
  this.generateOcean();
  this.generateCoast();
  this.generateWetSand();
  this.generateSand();
  this.generateGrass();
  this.generateForest();
  this.generateDirtGrass();
  this.generateDirtStone();
  this.generateStone();
  this.generateAppleTree();
};

Sprites.prototype.generateDeepOcean = function () {
  var ctx = this.context2d;
  var offset = this.ids.deepOcean.offset;

  ctx.fillStyle = Colors.darkBlue;
  ctx.fillRect(offset, 0, 16, 16);
};

Sprites.prototype.generateOcean = function () {
  this.generateMixedColor(this.ids.ocean.offset, Colors.darkBlue, Colors.blue);
};

Sprites.prototype.generateCoast = function () {
  this.generateMixedColor(this.ids.coast.offset, Colors.blue, Colors.yellow);
};

Sprites.prototype.generateWetSand = function () {
  this.generateMixedColor(this.ids.wetSand.offset, Colors.orange, Colors.yellow);
};

Sprites.prototype.generateSand = function () {
  var ctx = this.context2d;
  var offset = this.ids.sand.offset;

  ctx.fillStyle = Colors.yellow;
  ctx.fillRect(offset, 0, 16, 16);
};

Sprites.prototype.generateGrass = function () {
  this.generateMixedColor(this.ids.grass.offset, Colors.green, Colors.yellow);
};

Sprites.prototype.generateForest = function () {
  this.generateMixedColor(this.ids.forest.offset, Colors.green, Colors.darkGreen);
};

Sprites.prototype.generateDirtGrass = function () {
  this.generateMixedColor(this.ids.dirtGrass.offset, Colors.darkGreen, Colors.brown);
};

Sprites.prototype.generateDirtStone = function () {
  this.generateMixedColor(this.ids.dirtStone.offset, Colors.brown, Colors.darkBrown);
};

Sprites.prototype.generateStone = function () {
  this.generateMixedColor(this.ids.stone.offset, Colors.darkBrown, Colors.grey);
};

Sprites.prototype.generateMixedColor = function (offset, color1, color2) {
  var ctx = this.context2d;
  var i;

  ctx.fillStyle = color1;
  ctx.strokeStyle = color2;
  ctx.fillRect(offset, 0, 16, 16);
  ctx.beginPath();
  for (i = 1; i < 16; i += 2) {
    ctx.moveTo(offset, i);
    ctx.lineTo(offset + i, 0);
    ctx.moveTo(offset + 16 - i, 16);
    ctx.lineTo(offset + 16, 16 - i);
  }
  ctx.stroke();
};

Sprites.prototype.generateAppleTree = function () {
  var ctx = this.context2d;
  var angle;
  var dist;
  var i, x, y;

  [ { color: Colors.darkGreen, steps: 300 },
    { color: Colors.green, steps: 150 },
    { color: Colors.red, steps: 10 },
  ].forEach(function (config) {
    ctx.fillStyle = config.color;
    for (i = 0; i < config.steps; i++) {
      angle = Math.random() * Math.PI * 2;
      dist = Math.floor(Math.random() * 7);
      x = this.ids.appleTree.offset + 8 +Math.floor(Math.cos(angle) * dist);
      y = 8 + Math.floor(Math.sin(angle) * dist);
      ctx.fillRect(x, y, 1, 1);
    }
  }, this);
};
