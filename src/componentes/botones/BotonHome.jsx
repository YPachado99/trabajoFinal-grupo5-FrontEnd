import React, { Fragment } from "react";
import { MDBBtn } from "mdbreact";
import { Link } from 'react-router-dom';
import "./styleBotonHome.css"
const BotonHome = () => {
  return (
    
    <Link to="/home">
        <div className="botonHome">
        <Fragment>
      <MDBBtn outline color="primary">Volver al Home</MDBBtn>
      
    </Fragment>
        </div>
    
    </Link>
  );
}

export default BotonHome;