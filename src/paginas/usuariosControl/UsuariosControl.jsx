import { useContext } from "react";
import { UsuariosContext } from "../../context/UserContext";
import BotonNuevoUsuario from "../../componentes/nuevoUsuario/BotonNuevoUsuario";
import TablaUsuarios from "../../componentes/tablaUsuarios/TablaUsuarios";

import Header from "../../componentes/header/Header";
import BotonHome from "../../componentes/botones/BotonHome";

function UsuarioControl() {
  const { users } = useContext(UsuariosContext);

  return (
    <>
      <Header />
      <BotonHome />
      <h3 style={{ textAlign: "center", fontSize: "34px", fontWeight: "bold", color: "#333", marginTop: "20px" }}>Bienvenido </h3>
      <h1 style={{ textAlign: "center", fontSize: "25px", fontWeight: "bold", color: "#333", marginTop: "20px" }}>Control de Usuarios:</h1>
      <BotonNuevoUsuario />
      <TablaUsuarios />
    </>
  );
}

export default UsuarioControl;
