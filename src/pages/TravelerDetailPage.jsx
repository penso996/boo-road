import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import TravelsContext from "../contexts/TravelsContext";

export default function TravelerDetail() {
    const { id } = useParams(); // Ottieni l'ID dalla URL
    const { travels } = useContext(TravelsContext); // Ottieni i dati dei viaggi

    const [traveler, setTraveler] = useState(null); // Stato per memorizzare i dettagli del partecipante

    useEffect(() => {
        // Trova il viaggio e il partecipante
        const trip = travels.find(travel => travel.travelers.some(t => t.id === parseInt(id)));
        const travelerDetail = trip?.travelers.find(t => t.id === parseInt(id));
        setTraveler(travelerDetail); // Memorizza il partecipante trovato
    }, [id, travels]);

    if (!traveler) {
        return <p>Caricamento...</p>; // Messaggio di caricamento nel caso i dati non siano ancora disponibili
    }

    return (
        <div>
            <h1>{traveler.name} {traveler.surname}</h1>
            <p>Email: {traveler.email}</p>
            <p>Telefono: {traveler.phone}</p>
            <p>Codice Fiscale: {traveler.fiscalCode}</p>
            {/* Aggiungi altre informazioni che vuoi mostrare */}
        </div>
    );
}