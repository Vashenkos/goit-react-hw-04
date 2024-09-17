import ContactForm from "./components/ContactForm/ContactForm";  
import SearchBox from "./components/SearchBox/SearchBox";  
import ContactList from "./components/ContactList/ContactList";  
import { useState, useEffect } from "react";  

// Прибираємо неправильний імпорт  
// import App from './src/App'; // цей імпорт не потрібен  

const initialContacts = [  
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },  
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },  
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },  
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },  
];  

function App() {  
  const [contacts, setContacts] = useState(() => {  
    return JSON.parse(localStorage.getItem("contacts")) || initialContacts;  
  });  

  const [filter, setFilter] = useState("");  

  useEffect(() => {  
    localStorage.setItem("contacts", JSON.stringify(contacts));  
  }, [contacts]);  

  const filterContacts = contacts.filter((contact) =>  
    contact.name.toLowerCase().includes(filter.toLowerCase())  
  );  

  const addContact = (newContact) => {  
    setContacts((prevContacts) => {  
      return [...prevContacts, newContact];  
    });  
  };  

  const deleteContact = (contactId) => {  
    setContacts((prevContacts) => {  
      return prevContacts.filter((contact) => contact.id !== contactId);  
    });  
  };  

  return (  
    <div className="container">  
      <h1 className="title">Phonebook</h1>  
      <ContactForm onAddContact={addContact} />  
      <SearchBox filter={filter} onFilterChange={setFilter} />  
      <ContactList contacts={filterContacts} onDeleteContact={deleteContact} />  
    </div>  
  );  
}  

export default App;