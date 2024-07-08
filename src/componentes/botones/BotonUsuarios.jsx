import React, { Fragment } from "react";
import { MDBBtn } from "mdbreact";
import { Link } from 'react-router-dom';
import "./styleBotonUsuarios.css"
const BotonUsuarios = () => {
    return (
        <Link to="/users">
            <div className="botonUsuarios">
            <Fragment>
                <MDBBtn outline color="primary">Ver Usuarios</MDBBtn>
            </Fragment>
            </div>
        </Link>
    );
}

export default BotonUsuarios;