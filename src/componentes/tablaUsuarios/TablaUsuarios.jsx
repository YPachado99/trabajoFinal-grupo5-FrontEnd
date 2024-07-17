import React, { useContext, useState } from "react";
import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBIcon,
} from "mdb-react-ui-kit";
import Swal from "sweetalert2";
import { UsuariosContext } from "../../context/UserContext";
import { Modal } from "react-bootstrap";
import FormUpdateUsers from "./FormUpdateUsers";

export default function TablaUsuarios() {
  const { users, deleteUsuario, updateUser, userLogueado } = useContext(UsuariosContext);
  const [editUser, setEditUser] = useState();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEdit = (user) => {
    if (!userLogueado || userLogueado.usuarioAdm.toLowerCase() !== "si") {
      Swal.fire({
        icon: "error",
        title: "Acceso Denegado",
        text: "Solo los administradores pueden editar usuarios.",
      });
      return;
    }

    Swal.fire({
      title: "¿Editar usuario?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, editar!",
    }).then((result) => {
      if (result.isConfirmed) {
        setEditUser(user);
        handleShow();
      }
    });
  };

  const handleDelete = (_id, usuarioAdm) => {
    if (!userLogueado || userLogueado.usuarioAdm.toLowerCase() !== "si") {
      Swal.fire({
        icon: "error",
        title: "Acceso Denegado",
        text: "Solo los administradores pueden eliminar usuarios.",
      });
      return;
    }

    if (usuarioAdm.toLowerCase() === "si") {
      Swal.fire({
        icon: "error",
        title: "No se puede eliminar",
        text: "No se puede eliminar un usuario administrador.",
      });
      return;
    }

    Swal.fire({
      title: "¿Estás seguro?",
      text: "No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteUsuario(_id);
        Swal.fire("Eliminado!", "El usuario ha sido eliminado.", "success");
      }
    });
  };
  return (
    <>
      <div style={{ overflow: "auto", width: "100%", maxHeight: "400px" }}>
        <MDBTable align="middle" hover responsive>
          <MDBTableHead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Puesto</th>
              <th scope="col">Telefono</th>
              <th scope="col">Modificar</th>
              <th scope="col">Eliminar</th>
            </tr>
          </MDBTableHead>

          <MDBTableBody>
            {users === undefined ? (
              <tr>
                <td colSpan="6">Cargando...</td>
              </tr>
            ) : (
              users.map((user) => (
                <tr key={user._id}>
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src={user.url}
                        alt=""
                        style={{ width: "45px", height: "45px" }}
                        className="rounded-circle"
                      />
                      <div className="ms-3">
                        <p className="fw-bold mb-1">
                          {user.nombre} {user.apellido}
                        </p>
                        <p className="text-muted mb-0">{user.mail}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className="fw-normal mb-1">{user.role}</p>
                    <p className="text-muted mb-0">
                      Usuario Adm: {user.usuarioAdm}
                    </p>
                  </td>
                  <td>{user.telefono}</td>
                  <td>
                    <MDBBtn
                      color="link"
                      rounded
                      size="sm"
                      onClick={() => handleEdit(user)}
                    >
                      Edit
                    </MDBBtn>
                  </td>
                  <td>
                    <MDBBtn
                      color="link"
                      rounded
                      size="sm"
                      onClick={() => handleDelete(user._id)}
                    >
                      <MDBIcon fas icon="trash" />
                    </MDBBtn>
                  </td>
                </tr>
              ))
            )}
          </MDBTableBody>
        </MDBTable>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edicion de Usuario</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormUpdateUsers editUser={editUser} handleClose={handleClose} />
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}
