import styles from './SearchBox.module.css';

export default function SearchBox({ value, onUpdate }) {
  return (
    <div className={styles.searchBox}>
      <label htmlFor="searchField">Find contacts by name</label>
      <input
        type="text"
        name="searchField"
        value={value}
        onChange={onUpdate()}
      />
    </div>
  );
}
