import style from "./app.module.scss";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import CardItem from "./pages/card-item/CardItem";
import Catalog from "./pages/catalog/Catalog";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route key={1} path='*' element={<Home />}></Route>
        <Route key={2} path='/goods/:id' element={<CardItem />}></Route>
        <Route key={3} path='/goods' element={<Catalog />}></Route>
      </Routes>
      <div className={style.parallax_container}>
        <Footer />
      </div>
    </>
  );
}

export default App;
