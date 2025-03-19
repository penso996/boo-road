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
            />
        ));
    };

    // RENDER
    return (
        <main>
            <div className="trips-container">
                <h1>Viaggi in corso</h1>
                {renderTrips()}
                <h1>Prossimi viaggi</h1>
            </div>
        </main>
    );
}