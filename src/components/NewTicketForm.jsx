import React from 'react';
import Moment from 'moment';
import { connect } from 'react-redux';
import { v4 } from 'uuid';

function NewTicketForm(props){
  let _names = null;
  let _location = null;
  let _issue = null;

  function handleNewTicketFormSubmission(event) {
    const { dispatch } = props;
    event.preventDefault();
    const action = {
      type: 'ADD_TICKET',
      id: v4(),
      names: _names.value,
      location: _location.value,
      issue: _issue.value,
      timeOpen: new Moment()
    };
    dispatch(action);
    //^calling action invokes 'ADD_TICKET' in reducer.js
    _names.value = '';
    _location.value = '';
    _issue.value = '';
  }


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

      NewTicketForm = connect()(NewTicketForm);
      //redefines this entire NewTicketForm component as the return value of connect()
      export default NewTicketForm;
      //since connect() is just before export, the exported version is this redefined NewTicketForm
      //export default connect()(NewTicketForm) syntax works, too
