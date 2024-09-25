import React, { useState } from 'react';  
import { toast } from 'react-hot-toast';  
import s from "./SearchBar.module.css"
const SearchBar = ({ onSubmit }) => {  
  const [query, setQuery] = useState('');  

  const handleChange = e => setQuery(e.target.value);  

  const handleSubmit = e => {  
    e.preventDefault();  
    if (query.trim() === '') {  
      toast.error('Please enter a search term');  
      return;  
    }  
    onSubmit(query);  
    setQuery('');  
  };  

  return (  
    <header>  
      <form onSubmit={handleSubmit}>  
        <input  className={s.input}
          type="text"  
          value={query}  
          onChange={handleChange}  
          autoComplete="off"  
          autoFocus  
          placeholder="Search images and photos"  
        />  
        <button type="submit">Search</button>  
      </form>  
    </header>  
  );  
};  

export default SearchBar;