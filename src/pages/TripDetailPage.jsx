import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import TravelsContext from "../contexts/TravelsContext";
import TravelerCard from "../components/TravelerCard";

export default function TripDetail() {
    const { id } = useParams();
    const { travels } = useContext(TravelsContext);

    // Trova il viaggio selezionato
    const trip = travels.find(travel => travel.id === parseInt(id));

    // Stato per la ricerca dei partecipanti
    const [query, setQuery] = useState('');
    const [filteredTravelers, setFilteredTravelers] = useState(trip?.travelers || []);

    // Funzione per il filtraggio dei partecipanti in base alla query
    const handleSearch = (searchQuery) => {
        setQuery(searchQuery);
        setFilteredTravelers(
            trip?.travelers?.filter(traveler =>
                `${traveler.name} ${traveler.surname}`.toLowerCase().includes(searchQuery.toLowerCase())
            ) || []
        );
    };

    // Funzione per il rendering dei partecipanti
    const renderTravelers = () => (
        filteredTravelers.map(traveler => (
            <TravelerCard
                key={traveler.id}
                id={traveler.id}
                name={traveler.name}
                surname={traveler.surname}
            />
        ))
    );

    // Effetto per aggiornare la lista dei partecipanti quando cambia il viaggio
    useEffect(() => {
        setFilteredTravelers(trip?.travelers || []);
    }, [trip]);

    return (
        <div>
            <h1>{trip?.destination}</h1>
            <p>Dal {trip?.startDate} al {trip?.endDate}</p>
            <h2>Partecipanti</h2>

            {/* Barra di ricerca per i partecipanti */}
            <div className="searchbar-wrapper">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => handleSearch(e.target.value)}
                    placeholder="Cerca un partecipante..."
                />
            </div>

            <div>
                {renderTravelers()}
            </div>
        </div>
    );
}
