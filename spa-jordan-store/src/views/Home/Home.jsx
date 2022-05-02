import JordanLista from "components/JordanLista/JordanLista";
import Navbar from "components/Navbar/Navbar";
import Footer from "components/Footer/Footer";
import "./Home.css";
// import {jordan} from '../../mocks/jordan';
// import jordanSelecionado from './JordanLista';

function Home() {
  return (
    <div className="Home">
      <div className="Navbar__container">
        <Navbar />
      </div>
      <div className="Home__container">
        <JordanLista />
      </div>
      <div className="Footer__container">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
