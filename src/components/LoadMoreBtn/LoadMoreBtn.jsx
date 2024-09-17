import { FaPhone, FaUser } from "react-icons/fa6";
import s from "./Contact.module.css"

function Contact({ contact, onDeleteContact }) {
  return (
    <li className ={s.list}>
      <div className ={s.contdiv}>
        <p className>
          <FaUser className={s.icon}/>    
              {contact.name}
        </p>
        <p className>
          <FaPhone className={s.icon} />
             {contact.number}
        </p>
      </div>

      <button className={s.buttonlist}
        onClick={() => onDeleteContact(contact.id)}
      >
        Delete
      </button>
    </li>
  );
}

export default Contact;