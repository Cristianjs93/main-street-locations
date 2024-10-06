import '../styles/places-autocomplete.css';

export default function ClearButton({ setValue }: { setValue: Function }) {
  return (
    <button
      type='button'
      className='autocomplete-clear'
      onClick={() => setValue('')}
    >
      <img src='/icons/clear-icon.svg' />
    </button>
  );
}
