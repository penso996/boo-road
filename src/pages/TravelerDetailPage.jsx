import { useParams } from "react-router-dom";
import { useContext } from "react";
import TravelersContext from "../contexts/TravelsContext";
import TripCard from "../components/TripCard";

export default function TravelerDetailPage() {
    const { id } = useParams();
    const { travelers } = useContext(TravelersContext);

    // Trova il viaggiatore selezionato
    const traveler = travelers.find(traveler => traveler.id === parseInt(id));

    // Funzione per il rendering dei viaggi a cui partecipa
    const renderTrips = () => (
        traveler.trips?.map(trip => (
            <TripCard
                key={trip.id}
                id={trip.id}
                destination={trip.destination}
                startDate={trip.startDate}
                endDate={trip.endDate}
            />
        ))
    );

    return (
        <div>
            <h1>{traveler.name} {traveler.surname}</h1>
            <h2>Viaggi associati</h2>
            <div>
                {renderTrips()}
            </div>
        </div>
    );
}