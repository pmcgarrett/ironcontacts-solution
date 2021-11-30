import "./App.css";
import contactsJSON from "./contacts.json";
import React, { useState } from "react";

function App() {
  const [contacts, setContacts] = useState(contactsJSON.slice(0, 5));

  const addRandomContact = () => {
    if (contactsJSON.length > 5) {
      const randomIndex =
        Math.floor(Math.random() * (contactsJSON.length - 5)) + 5;
      const newRandomContact = contactsJSON[randomIndex];
      contactsJSON.splice(randomIndex, 1);
      setContacts([newRandomContact, ...contacts]);
    }
  };

  const sort = (key) => {
    setContacts([
      ...contacts.sort((a, b) => {
        return a[key] > b[key] ? 1 : -1;
      }),
    ]);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <div className="buttons">
        <button onClick={addRandomContact}>Add Random Contact</button>
        <button onClick={() => sort("name")}>Sort By Name</button>
        <button onClick={() => sort("popularity")}>Sort By Popularity</button>
      </div>

      {contactsJSON.length === 5 && "no more contacts to add"}
      <table className="table">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((celebrity) => {
            return (
              <tr key={celebrity.id}>
                <td>
                  <img
                    src={celebrity.pictureUrl}
                    width="100px"
                    alt={celebrity.name}
                  />
                </td>
                <td>{celebrity.name}</td>
                <td>{celebrity.popularity.toFixed(2)}</td>
                <td>{celebrity.wonOscar && "🏆"}</td>
                <td>{celebrity.wonEmmy && "🥇"}</td>
                <td>
                  <button onClick={() => deleteContact(celebrity.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
