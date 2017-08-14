function GameLoop () {
  this.isRunning = false;
  this.eleapsedTime = 0;
}

GameLoop.prototype.tick = function (dt) {
  this.eleapsedTime += dt;
  console.log(this.eleapsedTime);
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
