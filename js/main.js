[
  'WorldMap',
  'WorldMapRenderer',
  'GameLoop',
  'init'
].forEach(function (mod) {
  var script = document.createElement('script');
  script.src = 'js/' + mod + '.js';
  document.body.append(script);
});
