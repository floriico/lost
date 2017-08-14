var worldMap = new WorldMap(10, 10);
var loop = new GameLoop();

worldMap.generateMountains();
loop.start();
