import Header from "../../componentes/header/Header";
import NuevoUsuario from "../../componentes/nuevoUsuario/NuevoUsuario";
function UsuarioControl() {
  return (
    <>
      <Header />
      <h1 className="m-4 text-center font-weight-bold">Nuevo Usuario:</h1>
      <NuevoUsuario />
    </>
  );
}

export default UsuarioControl;
