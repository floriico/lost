var canvas = document.getElementById('game');
var keyboard = new Keyboard({ element: document.body });
var sprites = new Sprites();
var worldMap = new WorldMap(1000, 800);
var player = new Player();
var playerRenderer = new PlayerRenderer({ player, canvas });
var worldMapRenderer = new WorldMapRenderer({ worldMap, sprites, canvas, player });
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
var firstLand;

sprites.generate();
worldMap.generateMountains();
worldMap.erode(2);
worldMap.generateTrees();
firstLand = worldMap.tiles.findIndex(function (tile) { return tile.height > 1; });
player.x = (firstLand % worldMap.width) * worldMap.tileSize + worldMap.tileSize / 2;
player.y = Math.floor(firstLand / worldMap.width) * worldMap.tileSize + worldMap.tileSize / 2;
worldMapRenderer.render();
loop.start();
