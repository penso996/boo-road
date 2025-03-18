// Import functions from React
import { Link } from 'react-router-dom';

export default function TravelerCard({ id, name, surname }) {

  // RENDER
  return (
    <div className='traveler-card'>
      <h3>{name} {surname}</h3>
      <Link className="button" to={`/traveler/${id}`}>Dettagli</Link>
    </div>
  );
}