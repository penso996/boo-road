// Import functions from React
import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { Link } from 'react-router-dom';

// Import context
import GlobalContext from "../contexts/GlobalContext";

export default function TravelerDetail() {

    const { trips } = useContext(GlobalContext);
    // Read URL from ID
    const { id } = useParams();

    const [traveler, setTraveler] = useState(null);

    useEffect(() => {
        // Find Trip and Traveler by ID
        const trip = trips.find(travel => travel.travelers.some(t => t.id === parseInt(id)));
        const travelerDetail = trip?.travelers.find(t => t.id === parseInt(id));
        setTraveler(travelerDetail);
    }, [id, trips]);

    // Wait to load a traveler
    if (!traveler) {
        return <p>Caricamento...</p>;
    }

    // RENDER
    return (
        <main>
            <div className="traveler-page">
                <h1>{traveler.name} {traveler.surname}</h1>
                <p>Email: <b>{traveler.email}</b></p>
                <p>Telefono: <b>{traveler.phone}</b></p>
                <p>Codice Fiscale: <b>{traveler.fiscalCode}</b></p>
                <Link className='trip-button' to={`/trip/${id}`}>Dettagli</Link>
            </div>
        </main>
    );
}