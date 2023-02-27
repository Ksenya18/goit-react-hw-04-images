import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { GoSearch } from 'react-icons/go';
import css from './Searchbar.module.css';

export function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleChange = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(query);
    setQuery('');
  };

  return (
    <section className={css.searchbar}>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <button type="submit" className={css.searchFormButton}>
          <GoSearch size="30px" />
          <span className={css.searchFormButtonLabel}>Search</span>
        </button>
        <input
          className={css.searchFormInput}
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
          query={query}
        />
      </form>
    </section>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
