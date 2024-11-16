import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
// import TopStrip from "./components/TopStrip";
import EmailSubscription from "./components/EmailSubscription";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import StillLife from "./pages/StillLife";
import Miniature from "./pages/Miniature";
import Portrait from "./pages/Portrait";
import Login from "./pages/Login";
import PaymentPage from './pages/PaymentPage';
import DeliveryAddressPage from './pages/DeliveryAddressPage';
import SignInPage from './pages/SignInPage';
import CreateAccountPage from './pages/CreateAccountPage';
import Artist from "./pages/Artist";
// import ArtistsPage from './components/ArtistsPage';

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  return (
    <div>
      {userLoggedIn === true && (
        <>
          {/* <TopStrip /> */}
          <Navbar setUserLoggedIn={setUserLoggedIn} />
        </>
      )}

      <Routes>
        <Route path="/" element={<Home userLoggedIn={userLoggedIn} />}></Route>
        <Route path="/portrait" element={<Portrait />}></Route>
        <Route path="/still" element={<StillLife />} />
        <Route path="/miniature" element={<Miniature />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/artists" element={<Artist />} />
        
        <Route
          path="/login"
          element={<Login setUserLoggedIn={setUserLoggedIn} />}
        />
          <Route path="/sign-in-page" element={<SignInPage />} />
          <Route path="/create-account" element={<CreateAccountPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/delivery-address" element={<DeliveryAddressPage />} />
      </Routes>
      {/* <Route path="/artists" element={<ArtistsPage />} /> */}
      {userLoggedIn === true && (
        <>
          <EmailSubscription />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
