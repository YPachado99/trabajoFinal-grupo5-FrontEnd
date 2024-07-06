/*import React, { useState } from "react";
import axios from "axios";
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Col, Container, Row } from "react-bootstrap";
import Swal from "sweetalert2";
import registro from "../../assets/img/registro.png"

export default function NuevoUsuario() {
  const [dataUser, setDataUser] = useState({
    nombre: "",
    apellido: "",
    role: "",
    mail: "",
    contraseña: "",
    telefono: "",
    url: "",
    usuarioAdm: "",
  });
  const handleChange = (e) => {
    setDataUser({ ...dataUser, [e.target.name]: e.target.value }); //actualizo el estaco con el valor del input
  };

  const handleSudmit = (e) => {
    e.preventDefault();
    // Validación de campos requeridos
    const requiredFields = [
      "nombre",
      "apellido",
      "role",
      "mail",
      "contraseña",
      "telefono",
      "usuarioAdm",
    ];
    const invalidFields = requiredFields.filter((field) => !dataUser[field]);
    if (invalidFields.length > 0) {
      Swal.fire({
        icon: "error",
        title: "Todos los campos son obligatorios",
        text: `Complete los datos faltantes`,
      });
      return;
    }

    // Validación de longitud mínima y máxima
    const fieldLengthRequirements = {
      nombre: { min: 2, max: 50 },
      apellido: { min: 2, max: 50 },
      role: { min: 2, max: 50 },
      mail: { min: 5, max: 100 },
      contraseña: { min: 3, max: 100 },
      telefono: { min: 7, max: 15 },
      usuarioAdm: { min: 2, max: 10 },
    };

    for (const field of Object.keys(fieldLengthRequirements)) {
      const length = dataUser[field].length;
      const { min, max } = fieldLengthRequirements[field];

      if (length < min || length > max) {
        Swal.fire({
          icon: "error",
          title: `Campo ${field}`,
          text: `El campo ${field} no cumple con los requisitos de longitud.`,
        });
        return;
      }
    }

    // Validación de formato de correo electrónico
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(dataUser.mail)) {
      Swal.fire({
        icon: "error",
        title: "Formato de correo electrónico inválido",
        text: "Por favor ingresa un correo electrónico válido.",
      });
      return;
    }

    try {
      const response = axios.post(
        "https://back-codestockers.vercel.app/api/user/register",
        dataUser
      );
      console.log(response);
      setDataUser({
        nombre: "",
        apellido: "",
        role: "",
        mail: "",
        contraseña: "",
        telefono: "",
        url: "",
        usuarioAdm: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container>
        <Row>
          <Col md="6" className="d-none d-md-block">
            <img src={registro} alt="" />
          </Col>

          <Col md="6">
            <form onSubmit={handleSudmit}>
              <MDBRow className="mb-4">
                <MDBCol>
                  <MDBInput
                    value={dataUser.nombre}
                    onChange={handleChange}
                    name="nombre"
                    label="Nombre"
                  />
                </MDBCol>
                <MDBCol>
                  <MDBInput
                    value={dataUser.apellido}
                    onChange={handleChange}
                    name="apellido"
                    label="Apellido"
                  />
                </MDBCol>
              </MDBRow>

              <MDBInput
                wrapperClass="mb-4"
                value={dataUser.role}
                onChange={handleChange}
                name="role"
                label="Role"
              />

              <MDBInput
                wrapperClass="mb-4"
                value={dataUser.mail}
                onChange={handleChange}
                type="email"
                name="mail"
                label="Mail"
              />
              <MDBInput
                wrapperClass="mb-4"
                value={dataUser.contraseña}
                onChange={handleChange}
                label="Contraseña"
                name="contraseña"
                type="password"
              />
              <MDBInput
                wrapperClass="mb-4"
                value={dataUser.telefono}
                onChange={handleChange}
                type="tel"
                name="telefono"
                label="Telefono"
              />
              <MDBInput
                wrapperClass="mb-4"
                value={dataUser.url}
                onChange={handleChange}
                label="URL Imagen"
                name="url"
                type="url"
              />
              <MDBInput
                wrapperClass="mb-4"
                value={dataUser.usuarioAdm}
                onChange={handleChange}
                label="¿Es un usuario Adm?"
                name="usuarioAdm"
                type="text"
              />

              <MDBBtn className="mb-4" type="submit" block>
                Crear Nuevo Usuario
              </MDBBtn>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
}*/

import React, { useState } from "react";
import axios from "axios";
import { MDBRow, MDBCol, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import { Col, Container, Row } from "react-bootstrap";
import Swal from "sweetalert2";
import registro from "../../assets/img/registro.png";

export default function NuevoUsuario() {
  const [dataUser, setDataUser] = useState({
    nombre: "",
    apellido: "",
    role: "",
    mail: "",
    contraseña: "",
    telefono: "",
    url: "",
    usuarioAdm: "",
  });

  const handleChange = (e) => {
    setDataUser({ ...dataUser, [e.target.name]: e.target.value }); //actualizo el estaco con el valor del input
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validación de campos requeridos
    const requiredFields = [
      "nombre",
      "apellido",
      "role",
      "mail",
      "contraseña",
      "telefono",
      "usuarioAdm",
    ];
    const invalidFields = requiredFields.filter((field) => !dataUser[field]);
    if (invalidFields.length > 0) {
      Swal.fire({
        icon: "error",
        title: "Todos los campos son obligatorios",
        text: `Complete los datos faltantes`,
      });
      return;
    }

    // Validación de longitud mínima y máxima
    const fieldLengthRequirements = {
      nombre: { min: 2, max: 50 },
      apellido: { min: 2, max: 50 },
      role: { min: 2, max: 50 },
      mail: { min: 5, max: 100 },
      contraseña: { min: 3, max: 100 },
      telefono: { min: 7, max: 15 },
      usuarioAdm: { min: 2, max: 10 },
    };

    for (const field of Object.keys(fieldLengthRequirements)) {
      const length = dataUser[field].length;
      const { min, max } = fieldLengthRequirements[field];

      if (length < min || length > max) {
        Swal.fire({
          icon: "error",
          title: `Campo ${field}`,
          text: `El campo ${field} no cumple con los requisitos de longitud.`,
        });
        return;
      }
    }

    // Validación de formato de correo electrónico
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(dataUser.mail)) {
      Swal.fire({
        icon: "error",
        title: "Formato de correo electrónico inválido",
        text: "Por favor ingresa un correo electrónico válido.",
      });
      return;
    }

    try {
      const response = await axios.post(
        "https://back-codestockers.vercel.app/api/user/register",
        dataUser
      );
      Swal.fire({
        icon: "success",
        title: "Usuario creado",
        text: "El usuario ha sido creado exitosamente.",
      });
      console.log(response);
      setDataUser({
        nombre: "",
        apellido: "",
        role: "",
        mail: "",
        contraseña: "",
        telefono: "",
        url: "",
        usuarioAdm: "",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error al crear usuario",
        text: "Hubo un problema al crear el usuario. Inténtalo nuevamente.",
      });
      console.log(error);
    }
  };

  return (
    <>
      <Container>
        <Row>
          <Col md="6" className="d-none d-md-block">
            <img src={registro} alt="Registro" />
          </Col>

          <Col md="6">
            <form onSubmit={handleSubmit}>
              <MDBRow className="mb-4">
                <MDBCol>
                  <MDBInput
                    value={dataUser.nombre}
                    onChange={handleChange}
                    name="nombre"
                    label="Nombre"
                  />
                </MDBCol>
                <MDBCol>
                  <MDBInput
                    value={dataUser.apellido}
                    onChange={handleChange}
                    name="apellido"
                    label="Apellido"
                  />
                </MDBCol>
              </MDBRow>

              <MDBInput
                wrapperClass="mb-4"
                value={dataUser.role}
                onChange={handleChange}
                name="role"
                label="Role"
              />

              <MDBInput
                wrapperClass="mb-4"
                value={dataUser.mail}
                onChange={handleChange}
                type="email"
                name="mail"
                label="Mail"
              />
              <MDBInput
                wrapperClass="mb-4"
                value={dataUser.contraseña}
                onChange={handleChange}
                label="Contraseña"
                name="contraseña"
                type="password"
              />
              <MDBInput
                wrapperClass="mb-4"
                value={dataUser.telefono}
                onChange={handleChange}
                type="tel"
                name="telefono"
                label="Telefono"
              />
              <MDBInput
                wrapperClass="mb-4"
                value={dataUser.url}
                onChange={handleChange}
                label="URL Imagen"
                name="url"
                type="url"
              />
              <MDBInput
                wrapperClass="mb-4"
                value={dataUser.usuarioAdm}
                onChange={handleChange}
                label="¿Es un usuario Adm?"
                name="usuarioAdm"
                type="text"
              />

              <MDBBtn className="mb-4" type="submit" block>
                Crear Nuevo Usuario
              </MDBBtn>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
