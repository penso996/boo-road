// App.jsx

// Import functions from React
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import page_layout
import DefaultLayout from "./layouts/DefaultLayout";

// Import context
import TravelsContext from "./contexts/TravelsContext"
import travels from "./data/travels";

// Import pages
import HomePage from "./pages/HomePage"
// import TravelerDetailPage from "./pages/TravelerDetailPage"
// import TripDetailPage from "./pages/TripDetailPage"

function App() {

  // RENDER
  return (
    <TravelsContext.Provider value={{ travels }} >

      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            {/* HomePage */}
            <Route index path="/" element={<HomePage />} />
            {/* <Route path="t" element={<MovieDetail />} /> */}
            {/* NotFound */}
            {/* <Route path="*" element={<NotFound />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>

    </TravelsContext.Provider>
  );

}

export default App;