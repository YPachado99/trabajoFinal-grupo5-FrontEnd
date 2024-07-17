import Header from "../../componentes/header/Header";
import NuevoUsuario from "../../componentes/nuevoUsuario/NuevoUsuario";
import BotonUsuarios from "../../componentes/botones/BotonUsuarios";
function UsuarioControl() {
  return (
    <>
      <Header />
      <BotonUsuarios />
      <h1 className="m-4 text-center font-weight-bold">Nuevo Usuario:</h1>
      <NuevoUsuario />
    </>
  );
}

export default UsuarioControl;
