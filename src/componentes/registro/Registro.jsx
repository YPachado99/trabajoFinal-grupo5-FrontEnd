import React from "react";
import { Link } from "react-router-dom";
import {
  MDBCard,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBCardImage,
} from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import logo from "../../assets/img/logo.png";

import { useState, useContext } from "react";
import { UsuariosContext } from "../../context/UserContext";

export default function Registro() {
  const [mail, setMail] = useState("");
  const [contraseña, setContraseña] = useState("");

  const { users, login } = useContext(UsuariosContext);
  console.log(users, "users");
  console.log(mail, contraseña, "usemail y pasworders");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(mail, contraseña);
  };

  const [loginRegisterActive, setLoginRegisterActive] = useState("login");

  const handleLoginRegisterClick = (tab) => {
    setLoginRegisterActive(tab);
  };
  return (
    <div
      className="d-flex justify-content-center align-items-center "
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to bottom right, #787499,#A37c86, #2C5188)",
      }}
    >
      <MDBCard style={{ maxWidth: "540px" }}>
        <MDBRow className="g-0 m-3 d-flex justify-content-center align-items-center ">
          <MDBCol md="4">
            <MDBCardImage src={logo} alt="Logo Code Stockers " fluid />
          </MDBCol>
          <MDBCol md="8">
            <div>
              <MDBTabsContent onSubmit={handleSubmit}>
                <MDBTabsPane show={loginRegisterActive === "login"}>
                  <form className="m-3">
                    <h2 className="text-center m-5">Bienvenido</h2>

                    <MDBInput
                      className="mb-4 "
                      value={mail}
                      onChange={(e) => setMail(e.target.value)}
                      type="mail"
                      name="mail"
                      label="Correo Electronico"
                    />
                    <MDBInput
                      className="mb-4"
                      value={contraseña}
                      onChange={(e) => setContraseña(e.target.value)}
                      type="password"
                      name="contraseña"
                      label="Contraseña"
                    />

                    

                    <MDBBtn type="submit" className="mb-4" color="danger" block>
                      Sign in
                    </MDBBtn>
                  </form>
                </MDBTabsPane>
                <MDBTabsPane show={loginRegisterActive === "register"}>
                  <form>
                    <p className="text-center">or:</p>

                    <MDBInput
                      className="mb-4"
                      id="form8Example1"
                      label="Name"
                    />
                    <MDBInput
                      className="mb-4"
                      id="form8Example2"
                      label="Username"
                    />
                    <MDBInput
                      className="mb-4"
                      type="email"
                      id="form8Example3"
                      label="Email address"
                    />
                    <MDBInput
                      className="mb-4"
                      type="password"
                      id="form8Example4"
                      label="Password"
                    />
                    <MDBInput
                      className="mb-4"
                      type="password"
                      id="form8Example5"
                      label="Repeat password"
                    />

                    <MDBCheckbox
                      wrapperClass="d-flex justify-content-center mb-4"
                      id="form8Example6"
                      label="I have read and agree to the terms"
                      defaultChecked
                    />

                    <MDBBtn type="submit" className="mb-4" block>
                      Sign in
                    </MDBBtn>
                  </form>
                </MDBTabsPane>
              </MDBTabsContent>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </div>
  );
}
