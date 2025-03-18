// Import functions from React
import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";

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
        <div>
            <h1>{traveler.name} {traveler.surname}</h1>
            <p>Email: {traveler.email}</p>
            <p>Telefono: {traveler.phone}</p>
            <p>Codice Fiscale: {traveler.fiscalCode}</p>
        </div>
    );
}