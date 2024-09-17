import s from "./SearchBox.module.css";

function SearchBox({ filter, onFilterChange }) {
  return (
    <div className={s.containerBox }>
      <p>Find contacts by name</p>
      <input
        className={s.inputBox}
        type="text"
        value={filter}
        onChange={(e) => onFilterChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBox;