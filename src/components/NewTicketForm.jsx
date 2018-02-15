import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

function NewTicketForm(props){
  let _names = null;
  let _location = null;
  let _issue = null;

  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    props.onNewTicketCreation({names: _names.value, location: _location.value, issue: _issue.value, timeOpen: new Moment()});
//callback called timeOpen and set it equivalent to a Moment object containing the current time.
    _names.value = '';
    _location.value = '';
    _issue.value = '';
  }
//onNewTicketCreation() is a PROP, guys--it references the handleAddingNewTicketToList() callback from the App component.


  return (
    <div>
      <style jsx global>{`
            form {
              display: flex;
              flex-direction: column;
              align-items: center;
            }

            input {
              width: 100%;
              height: 25px;
              margin-bottom: 25px;
              border: none;
              border-bottom: 1px solid black;
              padding: 1%;
              font-size: 1em;
            }
            input:first-of-type {
              margin-top: 25px;

            }
            textarea {
              width: 100%;
              min-height: 50px;
              padding: 1%;
              margin-bottom: 25px;
              font-size: 1em;
            }
            button {
              width: 15%;
              height: 50px;
              background-color: lightblue;
              font-size: 1em;
              font-weight: bolder;
              color: white;
              text-shadow: 1px 1px 1px black;
              border-radius: 10px;
            }
            button:hover {
              background-color: cornflowerblue;
              color: white;
            }
            `}</style>
      <form onSubmit={handleNewTicketFormSubmission}>
        <input
          type='text'
          id='names'
          placeholder='Pair Names'
          ref={(input) => {_names = input;}}/>
        <input
          type='text'
          id='location'
          placeholder='Location'
          ref={(input) => {_location = input;}}/>
        <textarea
          id='issue'
          placeholder='Describe your issue.'
          ref={(textarea) => {_issue = textarea;}}/>
        <button type='submit'>Halp!</button>
            </form>
          </div>
        );
      }

      NewTicketForm.propTypes = {
        onNewTicketCreation: PropTypes.func
      };

      export default NewTicketForm;
