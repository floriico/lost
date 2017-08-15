var fragment = [
  'Player',
  'WorldMap',
  'WorldMapRenderer',
  'GameLoop',
  'init'
].reduce(function (fragment, mod) {
  var script = document.createElement('script');
  script.src = 'js/' + mod + '.js';
  fragment.appendChild(script);
  return fragment;
}, document.createDocumentFragment());
document.body.appendChild(fragment);
