import React, { useState } from 'react';

function Contacts() {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'John Doe', phone: '123-456-7890' },
    { id: 2, name: 'Jane Smith', phone: '098-765-4321' },
  ]);

  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>{contact.name} - {contact.phone}</li>
        ))}
      </ul>
      <button>Add Contact</button>
    </div>
  );
}

export default Contacts;
