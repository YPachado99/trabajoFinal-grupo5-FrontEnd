import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";

import Footer from "./componentes/footer/Footer";

import Rutas from "./componentes/rutas/Rutas";
import UserContext, { UsuariosContext } from "./context/UserContext";
import ProductsContext from "./context/ProductsContext";

function App() {
  return (
    <>
      <UserContext>
        <ProductsContext>
          <Rutas />

          <Footer />
        </ProductsContext>
      </UserContext>
    </>
  );
}

export default App;
