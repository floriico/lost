function GameLoop (options) {
  this.isRunning = false;
  this.eleapsedTime = 0;
  this.renderPipeline = options.renderPipeline;
}

GameLoop.prototype.tick = function (dt) {
  this.eleapsedTime += dt;
  this.renderPipeline.forEach(function (renderer) {
    renderer.render();
  });
  if (this.isRunning) {
    window.requestAnimationFrame(this.tick.bind(this));
  }
};

GameLoop.prototype.start = function () {
  this.isRunning = true;
  this.tick(0);
};

GameLoop.prototype.stop = function () {
  this.isRunning = false;
};
