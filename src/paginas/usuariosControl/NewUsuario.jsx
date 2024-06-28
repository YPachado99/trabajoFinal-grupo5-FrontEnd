import Header from "../../componentes/header/Header";
import NuevoUsuario from "../../componentes/nuevoUsuario/NuevoUsuario";
import BotonHome from "../../componentes/botones/BotonHome";
function UsuarioControl() {
  return (
    <>
      <Header />
      <BotonHome />
      <h1 className="m-4 text-center font-weight-bold">Nuevo Usuario:</h1>
      <NuevoUsuario />
    </>
  );
}

export default UsuarioControl;
