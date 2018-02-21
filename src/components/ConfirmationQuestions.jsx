
import React from 'react';
import PropTypes from 'prop-types';

function ConfirmationQuestions(props){
  const quessieStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: '10px',
    fontSize: '1.5em'
  };

  const quessieButtonStyles = {
    width: '120px',
    height: '45px',
    borderRadius: '10px',
    fontSize: '1em',
    fontWeight: 'bolder',
    boxShadow: '2px 1px 2px darkgrey'
  };
  return (
    <div style={quessieStyles}>
      <p>Have you gone through all the steps on the 'Learn How to Program' debugging lesson?</p>
      <button style={quessieButtonStyles} onClick={props.onTroubleshootingConfirmation}>Yes</button>
    </div>
  );
}

ConfirmationQuestions.propTypes = {
  onTroubleshootingConfirmation: PropTypes.func
};

export default ConfirmationQuestions;
