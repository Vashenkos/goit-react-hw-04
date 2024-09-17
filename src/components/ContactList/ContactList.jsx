import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul className={s.ulcontact}>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
}

export default ContactList;