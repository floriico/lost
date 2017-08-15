var canvas = document.querySelector('canvas');
var context2d = canvas.getContext('2d');
var worldMap = new WorldMap(50, 37);
var worldMapRenderer = new WorldMapRenderer(worldMap, context2d);
var loop = new GameLoop();

worldMap.generateMountains();
worldMap.erode(2);
worldMapRenderer.render();
loop.start();
