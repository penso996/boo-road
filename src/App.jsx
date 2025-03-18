// Import functions from React
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Import context
import GlobalContext from "./contexts/GlobalContext"
import trips from "./data/trips";

// Import layouts
import DefaultLayout from "./layouts/DefaultLayout";
// Import pages
import HomePage from "./pages/HomePage"
import TripDetailPage from "./pages/TripDetailPage"
import TravelerDetailPage from "./pages/TravelerDetailPage"

function App() {

  // RENDER
  return (
    <GlobalContext.Provider value={{ trips }} >

      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index path="/" element={<HomePage />} />
            <Route path="/trip/:id" element={<TripDetailPage />} />
            <Route path="/traveler/:id" element={<TravelerDetailPage />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </GlobalContext.Provider>
  );

}

export default App;