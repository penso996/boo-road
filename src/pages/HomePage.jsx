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
        <div>
            <h1>Viaggi</h1>
            <div>
                {renderTrips()}
            </div>
        </div>
    );
}