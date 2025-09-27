import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./header";
import Hero from "./hero";
import Category from "./category";
import Product from "./product";
import Detail from "./detail";
import Footer from "./footer";

function Layout() {
  const location = useLocation();

  return (
    <>
      <Header />
      {location.pathname === "/" && (
        <>
          <Hero />
          <Category />
        </>
      )}
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}



export default App;
