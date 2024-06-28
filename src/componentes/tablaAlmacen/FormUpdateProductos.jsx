import { useState, useContext } from "react";
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
    <>
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
                <label htmlFor="stock" className="form-label">
                  Imagen
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={producto.img}
                  onChange={handleChange}
                  name="img"
                  aria-describedby="Imagen"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="precio" className="form-label">
                  Deposito
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={producto.deposito}
                  onChange={handleChange}
                  name="deposito"
                  aria-describedby="Deposito"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="stock" className="form-label">
                  Stock
                </label>
                <input
                  type="number"
                  className="form-control"
                  value={producto.stockMinimo}
                  onChange={handleChange}
                  name="stockMinimo"
                  aria-describedby="stockmin"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="stock" className="form-label">
                  Categoria
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={producto.categoria}
                  onChange={handleChange}
                  name="categoria"
                  aria-describedby="Categoria"
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
                <label htmlFor="stock" className="form-label">
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
                <label htmlFor="stock" className="form-label">
                  Precio
                </label>
                <input
                  type="number"
                  className="form-control"
                  value={producto.precio}
                  onChange={handleChange}
                  name="precio"
                  aria-describedby="Precio"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="stock" className="form-label">
                  Nota
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={producto.nota}
                  onChange={handleChange}
                  name="nota"
                  aria-describedby="Nota"
                />
              </div>

              <Button type="submit" variant="outline-success">
                {" "}
                Editar Producto{" "}
              </Button>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FormUpdateProductos;
