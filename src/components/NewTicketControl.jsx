import React from 'react';
import NewTicketForm from './NewTicketForm';
import ConfirmationQuestions from './ConfirmationQuestions';
import PropTypes from 'prop-types';

class NewTicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
    };
    this.handleTroubleshootingConfirmation = this.handleTroubleshootingConfirmation.bind(this);
  }
  //Long story short: constructor() is invoked whenever a new component is created. As part of the creation process the constructor() will now define the this used in handleTroubleshootingConfirmation() to match the value of its own this. That is, the component constructor() is instantiating.

  //Notice the constructor includes the super keyword. super is called to access a parent class's constructor. Because our component class inherits the built in React.Component class, super accesses the React.Component constructor. This ensures our component is instantiated with all necessary React.Component functionality, plus our state data

  //Also, we initially set our formVisibleOnPage state to false because we don't want the form visible until the user clicks through the questions. (Just like the live queue.)

  //In JavaScript class methods are not bound by default. Unlike the example Intro code above, our NewTicketControl component is a class. This means handleTroubleshootingConfirmation() is a class method. So, per the rules of JavaScript, handleTroubleshootingConfirmation() is not bound. Because it is not bound, its this keyword in the line this.setState({formVisibleOnPage: true}); is null. That's why we received an error.

  handleTroubleshootingConfirmation(){
    this.setState({formVisibleOnPage: true});
  }
  //formVisibleOnPage is null unless bound in class constructor! 



  //this handleClick() method is an EVENT HANDLER
  //The {this.handleClick} portion states that a method from this component called handleClick() will be triggered when this element is clicked.
  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewTicketForm onNewTicketCreation={this.props.onNewTicketCreation}/>;
    } else {
      currentlyVisibleContent = <ConfirmationQuestions onTroubleShootingConfirmation={this.handleTroubleshootingConfirmation} />;
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

NewTicketControl.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewTicketControl;
