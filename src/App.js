import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Flat from "./pages/Flat.js";
import Page404 from "./pages/Page404.js";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    //Le composant BrowserRouter encapsule toute l'application pour gérer la navigation
    <BrowserRouter>
      {/* Affichage de la barre de navigation sur toutes les pages */}
      <Navbar />
      {/* Définition des routes de l'application avec Routes et Route */}
      <Routes>
        {/* Route pour la page d'accueil */}
        <Route path="/" element={<Home />} />
        {/* Route pour la page "A propos" */}
        <Route path="/about" element={<About />} />
        {/* Route dynamique pour chaque appartement du site */}
        <Route path="/flat/:id" element={<Flat />} />
        {/* Route pour la page d'erreur qui capture toutes les url non définies */}
        <Route path="*" element={<Page404 />} />
      </Routes>
      {/* Affichage de la barre du footer sur toutes les pages */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
