import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './Form/form';
import { ContactList } from './Contact/Contact';
import { Filter } from './Filter/Filter';
import {Title} from './App.styled'

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

 componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) { 

    this.setState({ contacts: parsedContacts })
  }
  }

  componentDidUpdate(prevProps, prevState) {

    if (this.state.contacts !== prevState.contacts) {
      console.log('обновилось');
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }
  
  handleAddContact = newContact => {
    const includedContact = this.state.contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (includedContact) {
      alert(`${newContact.name} is already in contacts`);
    } else {
      const contact = {
        id: nanoid(),
        name: newContact.name,
        number: newContact.number,
      };
      this.setState(prevState => ({
        contacts: [...prevState.contacts, contact],
      }));
    }
  };

  handleDeleteContact = id => {
    const updatedContacts = this.state.contacts.filter(
      contact => contact.id !== id
    );
    this.setState({ contacts: updatedContacts });
  };

  handleChangeFilter = event => {
    this.setState({ filter: event.target.value });
  };

  getVisibleContacts = () => {
    const normalizedFilter = this.state.filter.toLocaleLowerCase();

    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

 

  render() {
    const visibleContact = this.getVisibleContacts();

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <div>
          <Title>Phonebook</Title>

          <ContactForm onSubmit={this.handleAddContact} />

          <Title>Contacts</Title>

          <Filter
            value={this.state.filter}
            onChange={this.handleChangeFilter}
          />
          <ContactList
            contacts={visibleContact}
            onDeleteContact={this.handleDeleteContact}
          />
        </div>
      </div>
    );
  }
}

export default App;
