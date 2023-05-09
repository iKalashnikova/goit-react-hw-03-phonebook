import React from "react"
import { ContactEl, ContactItem, ContactName, DeleteBtn } from './Contact.styled';

export const ContactList = ({contacts, onDeleteContact}) => {
    return (<div>
            <ContactEl>{contacts.map(({ id, name, number }) => (
              <ContactItem key={id}>
                <ContactName>
                  {name}: {number}
                </ContactName>
                <DeleteBtn type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </DeleteBtn>
      </ContactItem>
    ))}</ContactEl>
          </div>)
}