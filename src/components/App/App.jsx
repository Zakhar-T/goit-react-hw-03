import { useState } from 'react';
import ContactList from '../ContactList/ContactList';
import css from './App.module.css';
import SearchBox from '../SearchBox/SearchBox';

export default function App() {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [search, setSearch] = useState('');

  const newSearch = (value) => {
    setSearch(value);
  };

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <SearchBox value={search} onUpdate={newSearch} />
      <ContactList contacts={contacts} search={search} />
    </div>
  );
}
