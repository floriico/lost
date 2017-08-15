var canvas = document.querySelector('canvas');
var context2d = canvas.getContext('2d');
var keyboard = new Keyboard({ element: document.body });
var player = new Player();
var playerRenderer = new PlayerRenderer({ player, canvas });
var worldMap = new WorldMap(50, 37);
var worldMapRenderer = new WorldMapRenderer({ worldMap, canvas, player });
var playerUpdater = new PlayerUpdater({ player, keyboard, worldMap });
var loop = new GameLoop({
  updatePipeline: [
    playerUpdater
  ],
  renderPipeline: [
    worldMapRenderer,
    playerRenderer
  ]
});

worldMap.generateMountains();
worldMap.erode(2);
worldMapRenderer.render();
loop.start();
