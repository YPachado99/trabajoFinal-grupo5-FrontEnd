import Header from "../../componentes/header/Header";
import NuevoUsuario from "../../componentes/nuevoUsuario/NuevoUsuario";
import BotonHome from "../../componentes/botones/BotonHome";
import BotonUsuarios from "../../componentes/botones/BotonUsuarios";
function UsuarioControl() {
  return (
    <>
      <Header />
      <BotonHome />
      <BotonUsuarios />
      <h1 className="m-4 text-center font-weight-bold">Nuevo Usuario:</h1>
      <NuevoUsuario />
    </>
  );
}

export default UsuarioControl;
