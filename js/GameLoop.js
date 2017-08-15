function GameLoop (options) {
  this.isRunning = false;
  this.eleapsedTime = 0;
  this.updatePipeline = options.updatePipeline;
  this.renderPipeline = options.renderPipeline;
  this.updateFixedRate = 1000;
}

GameLoop.prototype.tick = function (dt) {
  this.eleapsedTime += dt;
  if (dt >= this.updateFixedRate) {
    dt -= this.updateFixedRate;
    this.updatePipeline.forEach(function (updater) {
      updater.update();
    });
  }
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
