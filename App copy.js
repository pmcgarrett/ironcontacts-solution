import "./App.css";
import contactsJSON from "./contacts.json";
import React, { useState } from "react";

function App() {
  const [contacts, setContacts] = useState(contactsJSON.slice(0, 5));

  const addRandomContact = () => {
    if (contactsJSON.length) {
      const randomIndex = Math.floor(Math.random() * contactsJSON.length);
      const newRandomContact = contactsJSON[randomIndex];
      contactsJSON.splice(randomIndex, 1);
      setContacts(contacts.concat(newRandomContact));
  
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
        <button style={{ margin: "0 10px" }} onClick={addRandomContact}>
          Add Random Contact
        </button>
        <button style={{ margin: "0 10px" }} onClick={() => sort("name")}>
          Sort By Name
        </button>
        <button style={{ margin: "0 10px" }} onClick={() => sort("popularity")}>
          Sort By Popularity
        </button>
      </div>

      {contactsJSON.length === 0 && "no more contacts to add"}
      <table className="table">
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
          <th>Actions</th>
        </tr>

        {contacts.map((celeb) => {
          return (
            <tr key={celeb.id}>
              <td>
                <img src={celeb.pictureUrl} width="100px" alt="picture" />
              </td>
              <td>{celeb.name}</td>
              <td>{celeb.popularity.toFixed(2)}</td>
              <td>{celeb.wonOscar ? "🏆" : ""}</td>
              <td>{celeb.wonEmmy ? "🥇" : ""}</td>
              <td>
                <button onClick={() => deleteContact(celeb.id)}>Delete</button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;
