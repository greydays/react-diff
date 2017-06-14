import React from 'react';
import PropTypes from 'prop-types';
import { diffChars, diffWords, diffJson, diffSentences } from 'diff';
import uuid from 'uuid';

const ReactDiff = ({ inputA = '', inputB = '', type = 'chars' }) => {
  const fnMap = {
    chars: diffChars,
    words: diffWords,
    sentences: diffSentences,
    json: diffJson,
  };
  const diff = fnMap[type](inputA, inputB);
  const result = diff.map((part) => {
    let backgroundColor;
    if (part.added) {
      backgroundColor = 'lightgreen';
    } else if (part.removed) {
      backgroundColor = 'salmon';
    } else {
      backgroundColor = 'lightgrey';
    }
    const spanStyle = { backgroundColor };
    return <span key={uuid()} style={spanStyle}>{part.value}</span>;
  });
  return (
    <pre className="diff-result">
      {result}
    </pre>
  );
};

ReactDiff.propTypes = {
  inputA: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  inputB: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  type: PropTypes.oneOf([
    'chars',
    'words',
    'sentences',
    'json',
  ]),
};

export default ReactDiff;
