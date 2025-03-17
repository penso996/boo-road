import { Link } from 'react-router-dom';

export default function TripCard({ id, destination, startDate, endDate }) {
    return (
        <div className="trip-card">
            <h2 className="destinazione">{destination}</h2>
            <p className="start">Inizio: {startDate}</p>
            <p className="end">Fine: {endDate}</p>
            <Link to={`/travel/${id}`}>Dettagli</Link>
        </div>
    );
}
