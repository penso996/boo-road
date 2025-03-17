import TripCard from "../components/TripCard";
import TravelsContext from "../context/TravelsContext";
import { useContext } from "react";

export default function HomePage() {

    const { travels } = useContext(TravelsContext);


    // funzione rendering card trips
    const renderTravels = () => {
        return travels.map(travel => {
            return (
                <div className="trip-card" key={travel.id}>
                    <TripCard />
                </div>
            )
        })
    }



    return (

        <div className="home-page">
            <h1>Viaggi</h1>
            <div className="trips-container">
                {renderTravels()}
            </div>
        </div>


    );
}