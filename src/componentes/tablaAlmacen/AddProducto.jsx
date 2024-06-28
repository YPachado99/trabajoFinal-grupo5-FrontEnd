import React, { useState, useContext } from "react";

import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Col, Container, Row } from "react-bootstrap";
import { ProductosContext } from "../../context/ProductsContext";
import Swal from "sweetalert2";

export default function AddProducto() {
  const { postProducto } = useContext(ProductosContext);

  const [productos, setProductos] = useState({
    img: "https://picsum.photos/200/300",
    producto: "",
    deposito: "",
    stockMinimo: 0,
    categoria: "",
    stock: 0,
    fechaControl: "",
    precio: 0,
    nota: "",
  });

  const handleChange = (e) => {
    setProductos({ ...productos, [e.target.name]: e.target.value }); //actualizo el estaco con el valor del input
  };

  const handleSudmit = (e) => {
    e.preventDefault();
    // Verificar campos obligatorios
  if (
    !productos.img ||
    !productos.producto ||
    !productos.deposito ||
    productos.stockMinimo === 0 ||
    !productos.categoria ||
    productos.stock === 0 ||
    !productos.fechaControl
  ) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Faltan completar algunos campos obligatorios",
    });
    return; // Detener el envío si hay campos obligatorios faltantes
  }

    try {
      postProducto(productos);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Producto agregado",
        showConfirmButton: false,
        timer: 1500,
      });
      setProductos({
        img: "https://picsum.photos/200/300",
        producto: "",
        deposito: "",
        stockMinimo: 0,
        categoria: "",
        stock: 0,
        fechaControl: "",
        precio: 0,
        nota: "",
      });
    } catch (error) {
      console.log(error);
    }
  }; //envio los datos a mi fake api

  return (
    <>
      <Container>
        <Row>
          <Col md="6" className="mx-auto text-center">
            <form onSubmit={handleSudmit}>
              <MDBRow className="mb-4">
                <MDBCol>
                  <MDBInput
                    value={productos.img}
                    onChange={handleChange}
                    name="img"
                    label="URL Imagen Producto"
                  />
                </MDBCol>
                <MDBCol>
                  <MDBInput
                    value={productos.producto}
                    onChange={handleChange}
                    name="producto"
                    label="Producto"
                  />
                </MDBCol>
                <MDBCol>
                  <MDBInput
                    value={productos.deposito}
                    onChange={handleChange}
                    name="deposito"
                    rows={4}
                    label="Deposito"
                  />
                </MDBCol>

                <MDBCol>
                  <MDBInput
                    value={productos.stockMinimo}
                    type="number"
                    onChange={handleChange}
                    name="stockMinimo"
                    label="Stock Minimo"
                  />
                </MDBCol>
              </MDBRow>

              <MDBRow className="mb-4">
                <MDBCol>
                  <MDBInput
                    value={productos.categoria}
                    onChange={handleChange}
                    name="categoria"
                    label="Categoria"
                  />
                </MDBCol>
                <MDBCol>
                  <MDBInput
                    value={productos.stock}
                    onChange={handleChange}
                    type="number"
                    name="stock"
                    label="N de Stock"
                  />
                </MDBCol>
                <MDBCol>
                  <MDBInput
                    value={productos.fechaControl}
                    onChange={handleChange}
                    name="fechaControl"
                    label="Fecha de Control"
                  />
                </MDBCol>
                <MDBCol>
                  <MDBInput
                    value={productos.precio}
                    onChange={handleChange}
                    type="number"
                    name="precio"
                    label="Precio"
                  />
                </MDBCol>
              </MDBRow>

              <MDBInput
                wrapperClass="mb-4 "
                value={productos.nota}
                onChange={handleChange}
                name="nota"
                rows={4}
                label="Informacion Adicional"
              />

              <MDBBtn className="mb-4" type="submit" block>
                Agregar Nuevo Producto
              </MDBBtn>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
