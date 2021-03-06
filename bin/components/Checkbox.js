'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _DesktopComponent2 = require('./DesktopComponent');

var _DesktopComponent3 = _interopRequireDefault(_DesktopComponent2);

var _libuiNode = require('libui-node');

var _libuiNode2 = _interopRequireDefault(_libuiNode);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Checkbox = function (_DesktopComponent) {
  _inherits(Checkbox, _DesktopComponent);

  function Checkbox(root, props) {
    _classCallCheck(this, Checkbox);

    var _this = _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call(this, root, props));

    _this.eventParameter = { onToggled: 'checked' };
    _this.childName = 'text';

    _this.root = root;
    _this.props = _extends({}, props);
    _this.setDefaults(props);
    _this.element = new _libuiNode2.default.UiCheckbox();
    _this.initialProps(_this.props);
    return _this;
  }

  _createClass(Checkbox, [{
    key: 'render',
    value: function render(parent) {
      this.addParent(parent);
      this.renderChildNode();
    }
  }]);

  return Checkbox;
}(_DesktopComponent3.default);

Checkbox.PropTypes = _extends({
  enabled: _propTypes2.default.bool,
  visible: _propTypes2.default.bool,
  checked: _propTypes2.default.bool,
  onToggled: _propTypes2.default.func,
  children: _propTypes2.default.string
}, _DesktopComponent2.universalPropTypes);

Checkbox.defaultProps = _extends({
  enabled: true,
  visible: true,
  checked: false,
  onToggled: function onToggled() {},
  children: ''
}, _DesktopComponent2.universalDefaultProps);

exports.default = Checkbox;