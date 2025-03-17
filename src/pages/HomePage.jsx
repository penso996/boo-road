import TripCard from "../components/TripCard";
import TravelsContext from "../context/TravelsContext";
import { useContext } from "react";

export default function HomePage() {
    const { travels } = useContext(TravelsContext);

    // funzione rendering card trips
    const renderTravels = () => {
        return travels.map(travel => (
            <TripCard
                key={travel.id}
                id={travel.id}
                destination={travel.destination}
                startDate={travel.startDate}
                endDate={travel.endDate}
            />
        ));
    };

    return (
        <div className="home-page">
            <h1>Viaggi</h1>
            <div className="trips-container">
                {renderTravels()}
            </div>
        </div>
    );
}
