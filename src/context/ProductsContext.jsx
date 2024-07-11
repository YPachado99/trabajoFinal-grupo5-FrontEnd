/*import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductosContext = createContext();

// eslint-disable-next-line react/prop-types
const ProductsContext = ({ children }) => {
  const [productos, setProductos] = useState();

  const getProductos = async () => {
    try {
      const response = await axios.get("https://back-codestockers.vercel.app/api/productos");
      console.log(response);
      setProductos(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const postProducto = async (producto) => {
    try {
      const response = await axios.post(
        "https://back-codestockers.vercel.app/api/productos",
        producto
      );
      console.log(response);
      setProductos([...productos, response.data]);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProducto = async (_id) => {
    try {
      await axios.delete(`https://back-codestockers.vercel.app/api/productos/${_id}`);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const updateProducto = async (updatedProducto) => {
    //console.log(updatedProducto, "updateProducto");
    try {
      await axios.put(
        `https://back-codestockers.vercel.app/api/productos/${updatedProducto._id}`,
        updatedProducto
      );
      const newProductos = productos.map((producto) =>
        producto._id === updatedProducto._id ? updatedProducto : producto
      );
      setProductos(newProductos);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductos();
  }, []);

  //console.log(productos, "---desde context");
  return (
    <ProductosContext.Provider
      value={{
        productos,
        setProductos,
        postProducto,
        deleteProducto,
        updateProducto,
      }}
    >
      {children}
    </ProductosContext.Provider>
  );
};

export default ProductsContext;*/

import axios from "axios";
import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

export const ProductosContext = createContext();

// eslint-disable-next-line react/prop-types
const ProductsContext = ({ children }) => {
  const [productos, setProductos] = useState([]);

  const getProductos = async () => {
    try {
      const response = await axios.get("https://back-codestockers.vercel.app/api/productos");
      setProductos(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const postProducto = async (producto) => {
    try {
      const response = await axios.post(
        "https://back-codestockers.vercel.app/api/productos",
        producto
      );
      setProductos((prevProductos) => [...prevProductos, response.data]);
      Swal.fire({
        icon: "success",
        title: "Producto creado",
        text: "El producto ha sido creado exitosamente.",
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Error al crear producto",
        text: "Hubo un problema al crear el producto. Inténtalo nuevamente.",
      });
    }
  };

  const deleteProducto = async (_id) => {
    try {
      await axios.delete(`https://back-codestockers.vercel.app/api/productos/${_id}`);
      setProductos((prevProductos) => prevProductos.filter((producto) => producto._id !== _id));
      Swal.fire({
        icon: "success",
        title: "Producto eliminado",
        text: "El producto ha sido eliminado exitosamente.",
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Error al eliminar producto",
        text: "Hubo un problema al eliminar el producto. Inténtalo nuevamente.",
      });
    }
  };

  const updateProducto = async (updatedProducto) => {
    try {
      await axios.put(
        `https://back-codestockers.vercel.app/api/productos/${updatedProducto._id}`,
        updatedProducto
      );
      setProductos((prevProductos) =>
        prevProductos.map((producto) =>
          producto._id === updatedProducto._id ? updatedProducto : producto
        )
      );
      Swal.fire({
        icon: "success",
        title: "Producto actualizado",
        text: "El producto ha sido actualizado exitosamente.",
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Error al actualizar producto",
        text: "Hubo un problema al actualizar el producto. Inténtalo nuevamente.",
      });
    }
  };

  useEffect(() => {
    getProductos();
  }, []);

  return (
    <ProductosContext.Provider
      value={{
        productos,
        setProductos,
        postProducto,
        deleteProducto,
        updateProducto,
      }}
    >
      {children}
    </ProductosContext.Provider>
  );
};

export default ProductsContext;
