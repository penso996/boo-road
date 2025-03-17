import { Link } from 'react-router-dom';

export default function TravelerCard({ id, name, surname, email, phone }) {
  return (
    <div className="traveler-card">
      <h2 className="traveler-name">{name} {surname}</h2>
      <p className="traveler-email">Email: {email}</p>
      <p className="traveler-phone">Telefono: {phone}</p>
      <Link to={`/traveler/${id}`}>Dettagli</Link>
    </div>
  );
}
