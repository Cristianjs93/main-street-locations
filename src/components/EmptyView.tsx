import Loader from './ui/Loader';
import '../styles/empty-view.css';

export default function EmptyView({ isLoading }: { isLoading: boolean }) {
  return (
    <div className='empty-container'>
      {isLoading ? (
        <Loader />
      ) : (
        <div className='empty-container empty-skeleton'>
          <h2 className='empty-title'>
            Try typing in your city, state, or zip code above
          </h2>
        </div>
      )}
    </div>
  );
}
