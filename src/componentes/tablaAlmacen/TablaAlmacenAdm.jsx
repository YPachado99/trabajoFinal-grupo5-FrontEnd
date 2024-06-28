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

  const [editProducto, setEditProducto] = useState();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEdit = (producto) => {
    setEditProducto(producto);
    handleShow();
  };

  const handleDelete = (_id) => {
    deleteProducto(_id);

    Swal.fire({
      icon: "success",
      title: "Producto Eliminado",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <>
      {usuarioLogueado.usuarioAdm.toLowerCase() === "si" ? (
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
                  <th scope="col">Editar</th>
                  <th scope="col">Eliminar</th>
                </tr>
              </MDBTableHead>

              <MDBTableBody>
                {productos === undefined ? (
                  <tr>
                    <td colSpan="6">Cargando...</td>
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
                            <p className="fw-bold mb-1">{producto.producto} </p>
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
                    </tr>
                  ))
                )}
              </MDBTableBody>
            </MDBTable>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Edicion de Producto</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <FormUpdateProductos
                  editProducto={editProducto}
                  handleClose={handleClose}
                />
              </Modal.Body>
            </Modal>
          </div>
        </>
      ) : (
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
                </tr>
              </MDBTableHead>

              <MDBTableBody>
                {productos === undefined ? (
                  <tr>
                    <td colSpan="6">Cargando...</td>
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
                            <p className="fw-bold mb-1">{producto.producto} </p>
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
                    </tr>
                  ))
                )}
              </MDBTableBody>
            </MDBTable>
          </div>
        </>
      )}
    </>
  );
}
