import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function BotonNuevoUsuario() {
  return (
    <div className="d-flex justify-content-center align-items-center m-4  " >
      <Link to="/newusers">
      <MDBBtn >Nuevo Usuario</MDBBtn>
      </Link>
    
    
  </div>
  );
}