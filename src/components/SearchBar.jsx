import { useState, useContext } from "react";
import TravelsContext from "../context/TravelsContext";
import TripCard from "../components/TripCard";



export default function SearchPage() {
    const { travels } = useContext(TravelsContext);
    const [query, setQuery] = useState('');
    const [filteredResults, setFilteredResults] = useState(travels);

    // Funzione per filtrare i partecipanti in base alla query
    const handleSearch = () => {
        const results = travels.filter(travel =>
            travel.participants.some(participant =>
                `${participant.firstName} ${participant.lastName}`.toLowerCase().includes(query.toLowerCase())
            )
        );
        setFilteredResults(results);
    };

    // Funzione per intercettare Ctrl + Enter e avviare la ricerca
    const handleKeyDown = (event) => {
        if (event.key === "Enter" && event.ctrlKey) {
            event.preventDefault();
            handleSearch();
        }
    };

    // Funzione per resettare i risultati e mostrare tutti i viaggi
    const handleReset = () => {
        setQuery('');
        setFilteredResults(travels);
    };

    return (
        <div className="search-page">
            <div className="searchbar-wrapper">
                <input
                    className="searchbar"
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Cerca un partecipante..."
                />
                <button className="searchbar-button" onClick={handleSearch}>
                    Cerca
                </button>
                {query && (
                    <button className="reset-button" onClick={handleReset}>
                        Reset
                    </button>
                )}
            </div>

            {/* Se non ci sono risultati, mostra un messaggio */}
            {filteredResults.length === 0 ? (
                <p>Nessun risultato trovato.</p>
            ) : (
                <div className="trips-container">
                    {filteredResults.map(travel => (
                        <TripCard key={travel.id} id={travel.id} />
                    ))}
                </div>
            )}
        </div>
    );
}