'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _diff = require('diff');

var _diff2 = _interopRequireDefault(_diff);

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

var ReactDiff = function ReactDiff(_ref) {
  var _ref$inputA = _ref.inputA;
  var inputA = _ref$inputA === undefined ? '' : _ref$inputA;
  var _ref$inputB = _ref.inputB;
  var inputB = _ref$inputB === undefined ? '' : _ref$inputB;
  var _ref$type = _ref.type;
  var type = _ref$type === undefined ? 'chars' : _ref$type;

  var fnMap = {
    chars: _diff2['default'].diffChars,
    words: _diff2['default'].diffWords,
    sentences: _diff2['default'].diffSentences,
    json: _diff2['default'].diffJson
  };
  var diff = fnMap[type](inputA, inputB);
  var result = diff.map(function (part) {
    var backgroundColor = undefined;
    if (part.added) {
      backgroundColor = 'lightgreen';
    } else if (part.removed) {
      backgroundColor = 'salmon';
    } else {
      backgroundColor = 'lightgrey';
    }
    var spanStyle = { backgroundColor: backgroundColor };
    return _react2['default'].createElement(
      'span',
      { key: (0, _uuid2['default'])(), style: spanStyle },
      part.value
    );
  });
  return _react2['default'].createElement(
    'pre',
    { className: 'diff-result' },
    result
  );
};

ReactDiff.propTypes = {
  inputA: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].object]),
  inputB: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].object]),
  type: _propTypes2['default'].oneOf(['chars', 'words', 'sentences', 'json'])
};

exports['default'] = ReactDiff;
module.exports = exports['default'];
