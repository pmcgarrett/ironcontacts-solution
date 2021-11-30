import { useState } from "react";
import contactsJSON from "./contacts.json";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState(contactsJSON.slice(0, 5));
  return (
    <div>
      {contacts.map((celebrity) => {
        return (
        <p>{celebrity.name}</p>
        )
      })}
    </div>
  );
}

export default App;
