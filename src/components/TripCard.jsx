// Import functions from React
import { Link } from 'react-router-dom';

export default function TripCard({ id, destination, startDate, endDate }) {

    // RENDER
    return (
        <div className="trip-card">
            <div>
                <h2>{destination}</h2>
                <p>Inizio: <b>{startDate}</b></p>
                <p>Fine: <b>{endDate}</b></p>
            </div>
            <Link className='trip-button' to={`/trip/${id}`}>Dettagli</Link>
        </div>
    );
}