import css from './ContactList.module.css';
import Contact from '../Contact/Contact';

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul className={css.contactless}>
      {contacts.map(contact => {
        return (
          <li key={contact.id} className={css.contactless_item}>
            <Contact
              name={contact.name}
              number={contact.number}
              id={contact.id}
              onDelete={onDelete}
            />
          </li>
        );
      })}
    </ul>
  );
}