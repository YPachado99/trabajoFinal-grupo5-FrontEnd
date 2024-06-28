import { useState, useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { UsuariosContext } from "../../context/UserContext";
import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
const FormUpdateUsers = ({ editUser, handleClose }) => {
  const [user, setUsers] = useState(editUser);

  const { updateUser } = useContext(UsuariosContext);

  const handleChange = (e) => {
    setUsers({ ...user, [e.target.name]: e.target.value });
  };

  const handleEdit = (e) => {
    e.preventDefault();
    updateUser(user);
    Swal.fire({
      icon: "success",
      title: "Usuario Editado",
      showConfirmButton: false,
      timer: 1500,
    });
    handleClose();
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <form onSubmit={handleEdit}>
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={user.nombre}
                  onChange={handleChange}
                  name="nombre"
                  aria-describedby="nombre"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="apellido" className="form-label">
                  Apellido
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={user.apellido}
                  onChange={handleChange}
                  name="apellido"
                  aria-describedby="apellido"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="stock" className="form-label">
                  Imagen
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={user.url}
                  onChange={handleChange}
                  name="img"
                  aria-describedby="Imagen"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="mail" className="form-label">
                  Mail
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={user.mail}
                  onChange={handleChange}
                  name="mail"
                  aria-describedby="Mail"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="role" className="form-label">
                  Puesto
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={user.role}
                  onChange={handleChange}
                  name="role"
                  aria-describedby="role"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="usuarioAdm" className="form-label">
                  Es Usuario Adm?
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={user.usuarioAdm}
                  onChange={handleChange}
                  name="usuarioAdm"
                  aria-describedby="usuarioAdm"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="contraseña" className="form-label">
                  Contraseña
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={user.contraseña}
                  onChange={handleChange}
                  name="contraseña"
                  aria-describedby="contraseña"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="telefono" className="form-label">
                  Telefono
                </label>
                <input
                  type="number"
                  className="form-control"
                  value={user.telefono}
                  onChange={handleChange}
                  name="telefono"
                  aria-describedby="telefono"
                />
              </div>

              <Button type="submit" variant="outline-success">
                {" "}
                Editar Usuario{" "}
              </Button>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FormUpdateUsers;
