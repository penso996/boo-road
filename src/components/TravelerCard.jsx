import { Link } from 'react-router-dom';

export default function TravelerCard({ id, name, surname }) {
  return (
    <div className="traveler-card">
      <h3 className="traveler-name">{name} {surname}</h3>
      <Link to={`/traveler/${id}`}>Dettagli</Link>
    </div>
  );
}
