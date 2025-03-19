// Import functions from React
import { useContext } from "react";

// Import context
import GlobalContext from "../contexts/GlobalContext";

// Import components
import TripCard from "../components/TripCard";

export default function HomePage() {

    const { trips } = useContext(GlobalContext);

    // FUNCTION to render TripCards
    const renderTrips = () => {
        return trips.map(trip => (
            <TripCard
                key={trip.id}
                id={trip.id}
                destination={trip.destination}
                startDate={trip.startDate}
                endDate={trip.endDate}
                coordinator={trip.coordinator}
            />
        ));
    };

    // RENDER
    return (
        <main>
            <div className="trips-container">
                <h1>Viaggi in Corso</h1>
                {renderTrips()}
                <h1>Prossimi Viaggi</h1>
                <div className="trip-card">
                    <h2>...</h2>
                </div>
                <h1>Archivio</h1>
                <div className="trip-card">
                    <h2>...</h2>
                </div>
            </div>
        </main>
    );
}