function sum() {
  var total = 0;
  for (var i = 0; i < arguments.length; i++) {
    total += arguments[i];
  };
  return total;
};

Function.prototype.myBind = function(bound_object) {
  var that = this;
  var args = Array.prototype.slice.call(arguments, 1, arguments.length);

  return function() { that.apply(bound_object, args); };
}

function curriedSum(numArgs) {
  var numbers = [];

  function _curriedSum(number) {
    numbers.push(number);

    if (numbers.length == numArgs) {
      var total = 0;
      for (var i = 0; i < numbers.length; i++) {
        total += numbers[i];
      };

      return total;
    } else {
      return _curriedSum;
    };

  };

  return _curriedSum;
};

Function.prototype.curry = function (numArgs) {
  var args = [];
  var that = this;

  function _curry(arg) {
    args.push(arg);

    if (args.length == numArgs) {
      return that.apply(null, args);
    } else {
      return _curry;
    };
  };

  return _curry;
};