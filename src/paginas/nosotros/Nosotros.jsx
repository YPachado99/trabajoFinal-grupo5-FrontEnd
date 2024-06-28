import React from "react";
import Header from "../../componentes/header/Header";
import QuienesSomos from "../../componentes/quienesSomos/QuienesSomos";
import Contacto from "../../componentes/formContacto/FormContacto";
import "./StyleNosotros.css";
function Nosotros() {
  return (
    <>
      <Header />
      <div className="bodyBotones">
        <QuienesSomos />
        <Contacto />
      </div>
    </>
  );
}

export default Nosotros;
