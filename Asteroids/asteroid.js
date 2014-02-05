(function(root) {

  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Asteroid = Asteroids.Asteroid = function (pos, vel) {
    Asteroids.MovingObject.call(this, pos, vel, Asteroid.RADIUS, Asteroid.COLOR);
  };

  Asteroid.inherits(Asteroids.MovingObject);
  Asteroid.COLOR = "yellow";
  Asteroid.RADIUS = 20;

  Asteroid.randomAsteroid = function(dimX, dimY) {
    var x = Math.random() * dimX;
    var y = Math.random() * dimY;
    var velocity = [((Math.random() * 2) - 1) * 2,
      ((Math.random() * 2) - 1) * 2
    ];

    return new Asteroid([x, y], velocity);
  };


})(this);
