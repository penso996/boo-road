import { useParams } from "react-router-dom";
import { useContext } from "react";
import TravelsContext from "../contexts/TravelsContext";
import TravelerCard from "../components/TravelerCard";
import SearchBar from "../components/SearchBar";

export default function TripDetail() {
    const { id } = useParams();
    const { travels } = useContext(TravelsContext);

    // Trova il viaggio selezionato, da cambiare con una chiamata axios
    const trip = travels.find(travel => travel.id === parseInt(id));

    // Funzione per il rendering dei partecipanti
    const renderTravelers = () => (
        trip.travelers?.map(traveler => (
            <TravelerCard
                key={traveler.id}
                id={traveler.id}
                name={traveler.name}
                surname={traveler.surname}
            />
        ))
    );



    return (
        <div>
            <h1>{trip.destination}</h1>
            <p>Dal {trip.startDate} al {trip.endDate}</p>
            <h2>Partecipanti</h2>
            <SearchBar />
            <div>
                {renderTravelers()}
            </div>
        </div>
    );
}
