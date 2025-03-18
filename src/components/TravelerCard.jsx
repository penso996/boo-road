// Import functions from React
import { Link } from 'react-router-dom';

export default function TravelerCard({ id, name, surname }) {

  // RENDER
  return (
    <div>
      <h3>{name} {surname}</h3>
      <Link to={`/traveler/${id}`}>Dettagli</Link>
    </div>
  );
}