// Import functions from React
import { Link } from 'react-router-dom';

export default function TripCard({ id, destination, startDate, endDate }) {

    // RENDER
    return (
        <div>
            <h2>{destination}</h2>
            <p>Inizio: {startDate}</p>
            <p>Fine: {endDate}</p>
            <Link to={`/travel/${id}`}>Dettagli</Link>
        </div>
    );
}