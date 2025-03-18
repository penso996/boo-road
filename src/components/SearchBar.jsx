




// funzione per intercettare Ctrl + Enter all'interno del text area e inviare il form
const handleKeyDown = (event, fetchResults) => {
    if (event.key === "Enter" && event.ctrlKey) {
        event.preventDefault(); // Evita di andare a capo
        fetchResults(event); // Invia il form

    }
};

export default function SearchBar() {

    const [query, setQuery] = useState('')


    // funzione per gestire la ricerca
    const handleSearch = () => {
        fetchResults();
        navigate("/lists");
    };



    return (

        <div className="searchbar-wrapper">
            <input
                className="searchbar"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => handleKeyDown(e, handleSearch)}
                placeholder="Cerca un film o una serie..."

            />
            <button
                className="searchbar-button"
                type="submit"
                onClick={handleSearch}
            >
                Cerca
            </button>
        </div>



    )
}