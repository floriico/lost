function Trees() {
  this.ids = {
     appleTree: { offset: 0 }
  };
  this.spriteSheet = document.createElement('canvas');
  this.spriteSheet.width = 64 * Object.keys(this.ids).length;
  this.spriteSheet.height = 64;
  this.context2d = this.spriteSheet.getContext('2d');
}

Trees.prototype.generate = function () {
  this.generateBranches({
    offset: 0,
    color: Colors.darkGreen,
    steps: 100,
    baseLength: 20,
    variableLength: 12
  });
  this.generateBranches({
    offset: 0,
    color: Colors.green,
    steps: 100,
    baseLength: 10,
    variableLength: 12
  });
};

Trees.prototype.generateBranches = function (options) {
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
    ctx.moveTo(offset + 32, offset + 32);
    ctx.lineTo(offset + 32 + Math.sin(a) * d, offset + 32 + Math.cos(a) * d);
  }
  ctx.stroke();
};

var t = new Trees();
t.generate();
document.body.appendChild(t.spriteSheet);
