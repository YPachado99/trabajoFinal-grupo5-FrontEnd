/*import { useState, useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { ProductosContext } from "../../context/ProductsContext";
import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
const FormUpdateProductos = ({ editProducto, handleClose }) => {
  const [producto, setProducto] = useState(editProducto);
  const { updateProducto } = useContext(ProductosContext);

  const handleChange = (e) => {
    setProducto({ ...producto, [e.target.name]: e.target.value });
  };

  const handleEdit = (e) => {
    e.preventDefault();

    // Validar campos obligatorios y entradas válidas
    if (
      !producto.producto ||
      !producto.img ||
      !producto.deposito ||
      producto.stockMinimo <= 0 ||
      !producto.categoria ||
      producto.stock <= 0 ||
      !producto.fechaControl ||
      producto.precio <= 0
    ) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Por favor, complete todos los campos obligatorios y asegúrese de que las entradas sean válidas.",
      });
      return;
    }

    updateProducto(producto);
    Swal.fire({
      icon: "success",
      title: "Producto Editado",
      showConfirmButton: false,
      timer: 1500,
    });
    handleClose();
  };

  return (
    <Container>
      <Row>
        <Col>
          <form onSubmit={handleEdit}>
            <div className="mb-3">
              <label htmlFor="producto" className="form-label">
                Producto
              </label>
              <input
                type="text"
                className="form-control"
                value={producto.producto}
                onChange={handleChange}
                name="producto"
                aria-describedby="producto"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="img" className="form-label">
                Imagen
              </label>
              <input
                type="text"
                className="form-control"
                value={producto.img}
                onChange={handleChange}
                name="img"
                aria-describedby="img"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="deposito" className="form-label">
                Deposito
              </label>
              <input
                type="text"
                className="form-control"
                value={producto.deposito}
                onChange={handleChange}
                name="deposito"
                aria-describedby="deposito"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="stockMinimo" className="form-label">
                Stock Minimo
              </label>
              <input
                type="number"
                className="form-control"
                value={producto.stockMinimo}
                onChange={handleChange}
                name="stockMinimo"
                aria-describedby="stockMinimo"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="categoria" className="form-label">
                Categoria
              </label>
              <input
                type="text"
                className="form-control"
                value={producto.categoria}
                onChange={handleChange}
                name="categoria"
                aria-describedby="categoria"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="stock" className="form-label">
                Stock
              </label>
              <input
                type="number"
                className="form-control"
                value={producto.stock}
                onChange={handleChange}
                name="stock"
                aria-describedby="stock"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="fechaControl" className="form-label">
                Fecha de Control Stock
              </label>
              <input
                type="text"
                className="form-control"
                value={producto.fechaControl}
                onChange={handleChange}
                name="fechaControl"
                aria-describedby="fechaControl"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="precio" className="form-label">
                Precio
              </label>
              <input
                type="number"
                className="form-control"
                value={producto.precio}
                onChange={handleChange}
                name="precio"
                aria-describedby="precio"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="nota" className="form-label">
                Nota
              </label>
              <input
                type="text"
                className="form-control"
                value={producto.nota}
                onChange={handleChange}
                name="nota"
                aria-describedby="nota"
              />
            </div>

            <Button type="submit" variant="outline-success">
              Editar Producto
            </Button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default FormUpdateProductos;*/

import React, { useContext, useState } from "react";
import { ProductosContext } from "../../context/ProductsContext";
import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBIcon,
} from "mdb-react-ui-kit";
import Swal from "sweetalert2";
import { Modal } from "react-bootstrap";
import FormUpdateProductos from "./FormUpdateProductos";

const usuarioLogueado = JSON.parse(localStorage.getItem("user"));

export default function TablaAlmacenAdm() {
  const { productos, setProductos, deleteProducto, updateProducto } =
    useContext(ProductosContext);

  const [editProducto, setEditProducto] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEdit = (producto) => {
    setEditProducto(producto);
    handleShow();
  };

  const handleDelete = async (_id) => {
    try {
      await deleteProducto(_id);
      Swal.fire({
        icon: "success",
        title: "Producto Eliminado",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un problema al eliminar el producto.",
      });
    }
  };

  if (!usuarioLogueado) {
    return <div>Usuario no logueado</div>;
  }

  const isAdmin = usuarioLogueado.usuarioAdm.toLowerCase() === "si";

  return (
    <>
      <div style={{ overflow: "auto", width: "100%", maxHeight: "400px" }}>
        <MDBTable align="middle" hover responsive>
          <MDBTableHead>
            <tr>
              <th scope="col">Producto</th>
              <th scope="col">Deposito</th>
              <th scope="col">Stock Minimo</th>
              <th scope="col">Categoria</th>
              <th scope="col">Stock</th>
              <th scope="col">Fecha de Control Stock</th>
              <th scope="col">Precio</th>
              <th scope="col">Nota</th>
              {isAdmin && <th scope="col">Editar</th>}
              {isAdmin && <th scope="col">Eliminar</th>}
            </tr>
          </MDBTableHead>

          <MDBTableBody>
            {productos === undefined ? (
              <tr>
                <td colSpan={isAdmin ? 10 : 8}>Cargando...</td>
              </tr>
            ) : productos.length === 0 ? (
              <tr>
                <td colSpan={isAdmin ? 10 : 8}>No hay productos</td>
              </tr>
            ) : (
              productos.map((producto) => (
                <tr key={producto._id}>
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src={producto.img}
                        alt=""
                        style={{ width: "45px", height: "45px" }}
                        className="rounded-circle"
                      />
                      <div className="ms-3">
                        <p className="fw-bold mb-1">{producto.producto}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className="text-muted mb-0">{producto.deposito}</p>
                  </td>
                  <td>
                    <p className="fw-normal mb-1">{producto.stockMinimo}</p>
                  </td>
                  <td>{producto.categoria}</td>
                  <td>{producto.stock}</td>
                  <td>{producto.fechaControl}</td>
                  <td>
                    <p className="fw-normal mb-1">$ {producto.precio}</p>
                  </td>
                  <td>
                    <p className="fw-normal mb-1">{producto.nota}</p>
                  </td>
                  {isAdmin && (
                    <td>
                      <MDBBtn
                        color="link"
                        rounded
                        size="sm"
                        onClick={() => handleEdit(producto)}
                      >
                        Edit
                      </MDBBtn>
                    </td>
                  )}
                  {isAdmin && (
                    <td>
                      <MDBBtn
                        color="link"
                        rounded
                        size="sm"
                        onClick={() => handleDelete(producto._id)}
                      >
                        <MDBIcon fas icon="trash" />
                      </MDBBtn>
                    </td>
                  )}
                </tr>
              ))
            )}
          </MDBTableBody>
        </MDBTable>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edición de Producto</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {editProducto && (
              <FormUpdateProductos
                editProducto={editProducto}
                handleClose={handleClose}
              />
            )}
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}

