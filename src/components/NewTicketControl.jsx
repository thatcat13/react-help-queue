import React from 'react';
import ConfirmationQuestions from './ConfirmationQuestions';

class NewTicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
//Long story short: constructor() is invoked whenever a new component is created. As part of the creation process the constructor() will now define the this used in handleClick() to match the value of its own this. That is, the component constructor() is instantiating.

//Notice the constructor includes the super keyword. super is called to access a parent class's constructor. Because our component class inherits the built in React.Component class, super accesses the React.Component constructor. This ensures our component is instantiated with all necessary React.Component functionality, plus our state data

//Also, we initially set our formVisibleOnPage state to false because we don't want the form visible until the user clicks through the questions. (Just like the live queue.)

//In JavaScript class methods are not bound by default. Unlike the example Intro code above, our NewTicketControl component is a class. This means handleClick() is a class method. So, per the rules of JavaScript, handleClick() is not bound. Because it is not bound, its this keyword in the line this.setState({formVisibleOnPage: true}); is null. That's why we received an error.
  handleClick(){
    this.setState({formVisibleOnPage: true});
    console.log('formVisibleOnPage is currently set to:' + this.state.formVisibleOnPage);
  }
//this handleClick() method is an EVENT HANDLER
//The {this.handleClick} portion states that a method from this component called handleClick() will be triggered when this element is clicked.
  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewTicketForm />;
    } else {
      currentlyVisibleContent = <ConfirmationQuestions />;
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

export default NewTicketControl;
