(function(root) {

  var Asteroids = root.Asteroids = (root.Asteroids || {})

  var Ship = Asteroids.Ship = function (pos, vel) {
    this.pos = pos;
    this.vel = vel;
    this.color = Ship.COLOR;
    this.radius = Ship.RADIUS;
  };

  Ship.inherits(Asteroids.MovingObject);
  Ship.COLOR = "purple";
  Ship.RADIUS = 15;

  Ship.prototype.power = function (impulse) {
    this.vel[0] += impulse[0];
    if (Math.abs(this.vel[0]) > 15) {
      this.vel[0] -= impulse[0]
    }

    this.vel[1] += impulse[1];
    if (Math.abs(this.vel[1]) > 15) {
      this.vel[1] -= impulse[1]
    }
  };

  Ship.prototype.isMoving = function () {
    return !((this.vel[0] == 0) && (this.vel[1] == 0));
  }

  Ship.prototype.fireBullet = function () {
    if (this.isMoving()) {

      var scalingFactor = 1200;
      var dir = this.direction();
      var bulletVelocity = [dir[0] * scalingFactor, dir[1] * scalingFactor];

      return new Asteroids.Bullet(this.pos.slice(), bulletVelocity);
    };
  };

  Ship.prototype.direction = function () {
    var position = this.pos.slice();
    var velocity = this.vel.slice();

    var speed = Math.sqrt((position[0] * position[0]) + (position[1] * position[1]));
    return ([velocity[0] / speed, velocity[1] / speed]);
  }

})(this);