import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';

export default function ContactList({ contacts, search }) {
  return (
    <ul className={styles.contactList}>
      {contacts
        .filter((contact) => contact === search)
        .map((contact) => (
          <Contact contact={contact} />
        ))}
    </ul>
  );
}
