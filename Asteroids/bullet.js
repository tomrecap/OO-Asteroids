(function(root) {

  var Asteroids = root.Asteroids = (root.Asteroids || {})

  var Bullet = Asteroids.Bullet = function (pos, vel) {
    this.pos = pos;
    this.vel = vel;
    this.color = Bullet.COLOR;
    this.radius = Bullet.RADIUS;
  }

  Bullet.inherits(Asteroids.MovingObject);
  Bullet.COLOR = "red";
  Bullet.RADIUS = 10;

})(this);