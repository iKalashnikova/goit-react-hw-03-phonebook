import React, { Component } from "react";
import { FormEl, LabelEl, InputContact, InputSubmit } from './Form.styled'


class ContactForm extends Component {
    state = {
     name: '',
  number: ''
    }

      handleInputСhange = event => {
   
    this.setState({ [event.target.name]: event.target.value });
      };
    
     handleSubmit = (event) => {
    event.preventDefault()
    
         this.props.onSubmit(this.state);
         this.reset();
     }
    
    reset = () => {this.setState( {name: '',
  number: ''})}
    
    render() {
        return (
            <FormEl onSubmit={this.handleSubmit}>
            <LabelEl >
              Name
                    <InputContact
                value={this.state.name}
                onChange={this.handleInputСhange}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </LabelEl>
            <LabelEl >
              Number
                    <InputContact
                value={this.state.number}
                onChange={this.handleInputСhange}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
            </LabelEl>
            <InputSubmit type='submit'> Add contact</InputSubmit>
          </FormEl>
        )
    }
}

export default ContactForm