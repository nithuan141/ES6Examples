'use strict';

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Bake = (function () {
  function Bake(cake) {
    _classCallCheck(this, Bake);

    this.cake = cake;
  }

  _createClass(Bake, [{
    key: 'getTheCake',
    value: function getTheCake() {
      console.log('' + this.cake);
    }
  }]);

  return Bake;
})();

var BakeWithFlavour = (function (_Bake) {
  _inherits(BakeWithFlavour, _Bake);

  function BakeWithFlavour(cake, flavour) {
    _classCallCheck(this, BakeWithFlavour);

    _get(Object.getPrototypeOf(BakeWithFlavour.prototype), 'constructor', this).call(this, cake);
    this.flavour = flavour;
  }

  _createClass(BakeWithFlavour, [{
    key: 'getFlavouredCake',
    value: function getFlavouredCake() {
      console.log(this.cake + ' with ' + this.flavour + ' flavour');
    }
  }]);

  return BakeWithFlavour;
})(Bake);

var a = new BakeWithFlavour('Plum cake', 'choclate');
a.getFlavouredCake();
