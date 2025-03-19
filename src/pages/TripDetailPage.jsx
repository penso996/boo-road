// Import functions from React
import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";

// Import context
import GlobalContext from "../contexts/GlobalContext";

// Import components
import TravelerCard from "../components/TravelerCard";

export default function TripDetail() {

    const { trips } = useContext(GlobalContext);
    // Read URL from ID
    const { id } = useParams();

    // Find a trip by URL id  
    const trip = trips.find(trip => trip.id === parseInt(id));

    // Searchbar from query
    const [query, setQuery] = useState("");
    const [filteredTravelers, setFilteredTravelers] = useState(trip?.travelers || []);

    // FUNCTION to render travelers
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

    // FUNCTION for searchbar
    const handleSearch = (searchQuery) => {
        setQuery(searchQuery);
        setFilteredTravelers(
            trip?.travelers?.filter(traveler =>
                `${traveler.name} ${traveler.surname}`.toLowerCase().includes(searchQuery.toLowerCase())
            ) || []
        );
    };

    useEffect(() => {
        setFilteredTravelers(trip?.travelers || []);
    }, [trip]);

    // RENDER
    return (
        <main>
            <div className="trip-page">
                <h1>{trip?.destination}</h1>
                <h4>Coordinatore: {trip.coordinator}</h4>
                <p>Dal {trip?.startDate} al {trip?.endDate}</p>
                <h3>Partecipanti</h3>

                {/* searchbar */}
                <div className="searchbar">
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
        </main>
    );
}