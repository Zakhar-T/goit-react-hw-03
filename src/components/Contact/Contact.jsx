import { FaPhone, FaUser } from 'react-icons/fa6';
import styles from './Contact.module.css';

export default function Contact({ contact: { id, name, number } }) {
  return (
    <li className={styles.contact} key={id}>
      <div>
        <div className={styles.contactInfo}>
          <FaPhone />
          <p>{name}</p>
        </div>
        <div className={styles.contactInfo}>
          <FaUser />
          <p>{number}</p>
        </div>
      </div>
      <button>Delete</button>
    </li>
  );
}
