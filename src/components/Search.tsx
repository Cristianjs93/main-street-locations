import { ChangeEvent } from 'react';
import '../styles/search.css';

export default function Search({
  search,
  onSearch,
}: {
  search: string;
  onSearch: Function;
}) {
  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    onSearch(value);
  }
  return (
    <>
      <input
        type='text'
        id='search'
        name='search'
        className='search-input'
        value={search}
        placeholder='Search by office name...'
        onChange={handleSearch}
      />
      {search.length >= 1 && (
        <button
          type='button'
          className='search-clear'
          onClick={() => onSearch('')}
        >
          Clear
        </button>
      )}
    </>
  );
}
