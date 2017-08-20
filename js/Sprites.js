function Sprites () {
  this.ids = {
     deepOcean: { offset : { x: 0, y: 0 } },
     ocean: { offset: { x: 16, y: 0 } },
     coast: { offset: { x: 32, y: 0 } },
     wetSand: { offset: { x: 48, y: 0 } },
     sand: { offset: { x: 64, y: 0 } },
     grass: { offset: { x: 80, y: 0 } },
     forest: { offset: { x: 96, y: 0 } },
     dirtGrass: { offset: { x: 112, y: 0 } },
     dirtStone: { offset: { x: 128, y: 0 } },
     stone: { offset: { x: 144, y: 0 } },
     bush: { offset: { x: 160, y: 0 } },
     berryBush: { offset: { x: 176, y: 0 } },
     palmTree: { offset: { x: 0, y: 16 } },
     commonTree: { offset: { x: 64, y: 16 } },
     appleTree: { offset: { x: 128, y: 16 } }
  };
  this.spriteSheet = document.createElement('canvas');
  this.spriteSheet.width = 256;
  this.spriteSheet.height = 16 + 64;
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
  this.generateBush();
  this.generateberryBush();
  this.generatePalmTree();
  this.generateCommonTree();
  this.generateAppleTree();
};

Sprites.prototype.generateDeepOcean = function () {
  var ctx = this.context2d;
  var offset = this.ids.deepOcean.offset;

  ctx.fillStyle = Colors.darkBlue;
  ctx.fillRect(offset.x, offset.y, 16, 16);
};

Sprites.prototype.generateOcean = function () {
  var offset = this.ids.ocean.offset;
  this.generateMixedColor(offset.x, offset.y, Colors.darkBlue, Colors.blue);
};

Sprites.prototype.generateCoast = function () {
  var offset = this.ids.coast.offset;
  this.generateMixedColor(offset.x, offset.y, Colors.blue, Colors.yellow);
};

Sprites.prototype.generateWetSand = function () {
  var offset = this.ids.wetSand.offset;
  this.generateMixedColor(offset.x, offset.y, Colors.orange, Colors.yellow);
};

Sprites.prototype.generateSand = function () {
  var ctx = this.context2d;
  var offset = this.ids.sand.offset;

  ctx.fillStyle = Colors.yellow;
  ctx.fillRect(offset.x, offset.y, 16, 16);
};

Sprites.prototype.generateGrass = function () {
  var offset = this.ids.grass.offset;
  this.generateMixedColor(offset.x, offset.y, Colors.green, Colors.yellow);
};

Sprites.prototype.generateForest = function () {
  var offset = this.ids.forest.offset;
  this.generateMixedColor(offset.x, offset.y, Colors.green, Colors.darkGreen);
};

Sprites.prototype.generateDirtGrass = function () {
  var offset = this.ids.dirtGrass.offset;
  this.generateMixedColor(offset.x, offset.y, Colors.darkGreen, Colors.brown);
};

Sprites.prototype.generateDirtStone = function () {
  var offset = this.ids.dirtStone.offset;
  this.generateMixedColor(offset.x, offset.y, Colors.brown, Colors.darkBrown);
};

Sprites.prototype.generateStone = function () {
  var offset = this.ids.stone.offset;
  this.generateMixedColor(offset.x, offset.y, Colors.darkBrown, Colors.grey);
};

Sprites.prototype.generateMixedColor = function (offsetX, offsetY, color1, color2) {
  var ctx = this.context2d;
  var i;

  ctx.fillStyle = color1;
  ctx.strokeStyle = color2;
  ctx.fillRect(offsetX, offsetY, 16, 16);
  ctx.beginPath();
  for (i = 1; i < 16; i += 2) {
    ctx.moveTo(offsetX, offsetY + i);
    ctx.lineTo(offsetX + i, offsetY + 0);
    ctx.moveTo(offsetX + 16 - i, offsetY + 16);
    ctx.lineTo(offsetX + 16, offsetY + 16 - i);
  }
  ctx.stroke();
};

Sprites.prototype.generateBush = function () {
  var offset = this.ids.bush.offset;

  this.generateLeaves({
    offset: offset,
    color: Colors.darkGreen,
    steps: 200,
    box: 16,
    radius: 7,
    leafSize: 1
  });
  this.generateLeaves({
    offset: offset,
    color: Colors.green,
    steps: 100,
    box: 16,
    radius: 7,
    leafSize: 1
  });
}

Sprites.prototype.generateberryBush = function () {
  var offset;

  offset = this.ids.berryBush.offset;
  this.generateLeaves({
    offset: offset,
    color: Colors.darkGreen,
    steps: 200,
    box: 16,
    radius: 7,
    leafSize: 1
  });
  this.generateLeaves({
    offset: offset,
    color: Colors.green,
    steps: 80,
    box: 16,
    radius: 7,
    leafSize: 1
  });
  this.generateLeaves({
    offset: offset,
    color: Colors.blue,
    steps: 15,
    box: 16,
    radius: 6,
    leafSize: 1
  });
};

Sprites.prototype.generatePalmTree = function () {
  var offset = this.ids.palmTree.offset;

  this.generateBranches({
    offset: offset,
    color: Colors.darkGreen,
    steps: 100,
    baseLength: 20,
    variableLength: 12
  });
  this.generateBranches({
    offset: offset,
    color: Colors.green,
    steps: 100,
    baseLength: 10,
    variableLength: 12
  });
};

Sprites.prototype.generateCommonTree = function () {
  var offset = this.ids.commonTree.offset;

  this.generateBranches({
    offset: offset,
    color: Colors.brown,
    steps: 30,
    baseLength: 10,
    variableLength: 12
  });
  this.generateLeaves({
    offset: offset,
    color: Colors.darkGreen,
    steps: 200,
    box: 64,
    radius: 20,
    leafSize: 2
  });
  this.generateLeaves({
    offset: offset,
    color: Colors.green,
    steps: 100,
    box: 64,
    radius: 20,
    leafSize: 2
  });
};

Sprites.prototype.generateAppleTree = function () {
  var offset = this.ids.appleTree.offset;

  this.generateBranches({
    offset: offset,
    color: Colors.brown,
    steps: 30,
    baseLength: 10,
    variableLength: 12
  });
  this.generateLeaves({
    offset: offset,
    color: Colors.darkGreen,
    steps: 200,
    box: 64,
    radius: 20,
    leafSize: 2
  });
  this.generateLeaves({
    offset: offset,
    color: Colors.green,
    steps: 100,
    box: 64,
    radius: 20,
    leafSize: 2
  });
  this.generateLeaves({
    offset: offset,
    color: Colors.red,
    steps: 5,
    box: 64,
    radius: 18,
    leafSize: 3
  });
}

Sprites.prototype.generateBranches = function (options) {
  var ctx = this.context2d;
  var i, a, d;
  var offset = options.offset;
  var color = options.color;
  var steps = options.steps;
  var baseLength = options.baseLength;
  var variableLength = options.variableLength;

  a = 0;
  ctx.strokeStyle = color;
  ctx.beginPath();
  for (i = 0; i < steps; i++) {
    a = Math.random() * 2 * Math.PI;
    d = baseLength + Math.random() * variableLength;
    ctx.moveTo(offset.x + 32, offset.y + 32);
    ctx.lineTo(Math.floor(offset.x + 32 + Math.sin(a) * d),
        Math.floor(offset.y + 32 + Math.cos(a) * d));
  }
  ctx.stroke();
};

Sprites.prototype.generateLeaves = function (options) {
  var ctx = this.context2d;
  var i, a, d;
  var offset = options.offset;
  var color = options.color;
  var steps = options.steps;
  var box = options.box / 2;
  var radius = options.radius;
  var leafSize = options.leafSize;

  a = 0;
  ctx.fillStyle = color;
  for (i = 0; i < steps; i++) {
    a = Math.random() * 2 * Math.PI;
    d = Math.floor(Math.random() * radius);
    ctx.fillRect(Math.floor(offset.x + box + Math.sin(a) * d),
        Math.floor(offset.y + box + Math.cos(a) * d),
        leafSize, leafSize);
  }
};
