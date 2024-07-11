/*import axios from "axios";
import jwt_decode from "jwt-decode";
import { createContext, useEffect, useState } from "react";

export const UsuariosContext = createContext();

// eslint-disable-next-line react/prop-types
const UserContext = ({ children }) => {
  const [users, setUsers] = useState();
  const [userLogueado, setUserLogueado] = useState();

  const getUsers = async () => {
    try {
      const response = await axios.get(
        "https://back-codestockers.vercel.app/api/user/usuarios"
      );
      console.log(response);
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const login = async (mail, contraseña) => {
    //console.log(mail, contraseña, "login Context");
    const response = await axios.post("https://back-codestockers.vercel.app/api/user/login", {
      mail,
      contraseña,
    });
    //console.log(response);

    const jwtToken = response.data.data.token;
    const jwtDecode = jwt_decode(jwtToken);
    console.log(jwtDecode);

    //setUserLogueado(jwtDecode)

    const user = {
      id: jwtDecode.id,
      nombre: jwtDecode.nombre,
      apellido: jwtDecode.apellido,
      mail: jwtDecode.mail,
      role: jwtDecode.role,
      telefono: jwtDecode.telefono,
      url: jwtDecode.url,
      usuarioAdm: jwtDecode.usuarioAdm,
    };

    localStorage.setItem("user", JSON.stringify(user));
    setUserLogueado(user);
    //console.log(user);

    if (user.role === "admin") {
      window.location.href = "/home";
    } else {
      window.location.href = "/home";
    }
  };

  const postUsuario = async (user) => {
    try {
      let response = await axios.post(
        "https://back-codestockers.vercel.app/api/user/register",
        user
      );
      console.log(response);

      setProductos([...users, response.data]);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  const deleteUsuario = async (_id) => {
    //console.log(_id, "deleteUsuario");
    try {
      await axios.delete(`https://back-codestockers.vercel.app/api/user/usuarios/${_id}`);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const updateUser = async (updatedUsuario) => {
    //console.log(updatedUsuario, "este es el user");
    try {
      await axios.put(
        `https://back-codestockers.vercel.app/user/usuarios/${updatedUsuario._id}`,
        updatedUsuario
      );
      const newUsuarios = usuario.map((usuario) =>
        usuario._id === updatedUsuario._id ? updatedUsuario : usuario
      );
      setUsers(newUsuarios);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <UsuariosContext.Provider
      value={{
        users,
        setUsers,
        logout,
        deleteUsuario,
        postUsuario,
        updateUser,
        login,
        userLogueado,
      }}
    >
      {children}
    </UsuariosContext.Provider>
  );
};

export default UserContext;*/

import axios from "axios";
import jwt_decode from "jwt-decode";
import Swal from "sweetalert2";
import { createContext, useEffect, useState } from "react";

export const UsuariosContext = createContext();

// eslint-disable-next-line react/prop-types
const UserContext = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [userLogueado, setUserLogueado] = useState(null);

  const getUsers = async () => {
    try {
      const response = await axios.get(
        "https://back-codestockers.vercel.app/api/user/usuarios"
      );
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const login = async (mail, contraseña) => {
    try {
      const response = await axios.post(
        "https://back-codestockers.vercel.app/api/user/login",
        { mail, contraseña }
      );

      const jwtToken = response.data.data.token;
      const jwtDecode = jwt_decode(jwtToken);

      const user = {
        id: jwtDecode.id,
        nombre: jwtDecode.nombre,
        apellido: jwtDecode.apellido,
        mail: jwtDecode.mail,
        role: jwtDecode.role,
        telefono: jwtDecode.telefono,
        url: jwtDecode.url,
        usuarioAdm: jwtDecode.usuarioAdm,
      };

      localStorage.setItem("user", JSON.stringify(user));
      setUserLogueado(user);

      window.location.href = "/home";
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Error en el inicio de sesión",
        text: "Usuario y/o contraseña incorrecto",
      });
    }
  };

  const postUsuario = async (user) => {
    try {
      const response = await axios.post(
        "https://back-codestockers.vercel.app/api/user/register",
        user
      );

      setUsers((prevUsers) => [...prevUsers, response.data]);
      Swal.fire({
        icon: "success",
        title: "Usuario creado",
        text: "El usuario ha sido creado exitosamente.",
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Error al crear usuario",
        text: "Hubo un problema al crear el usuario. Inténtalo nuevamente.",
      });
    }
  };

  const deleteUsuario = async (_id) => {
    try {
      await axios.delete(`https://back-codestockers.vercel.app/api/user/usuarios/${_id}`);
      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== _id));
      Swal.fire({
        icon: "success",
        title: "Usuario eliminado",
        text: "El usuario ha sido eliminado exitosamente.",
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Error al eliminar usuario",
        text: "Hubo un problema al eliminar el usuario. Inténtalo nuevamente.",
      });
    }
  };

  const updateUser = async (updatedUsuario) => {
    try {
      await axios.put(
        `https://back-codestockers.vercel.app/user/usuarios/${updatedUsuario._id}`,
        updatedUsuario
      );
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user._id === updatedUsuario._id ? updatedUsuario : user
        )
      );
      Swal.fire({
        icon: "success",
        title: "Usuario actualizado",
        text: "El usuario ha sido actualizado exitosamente.",
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Error al actualizar usuario",
        text: "Hubo un problema al actualizar el usuario. Inténtalo nuevamente.",
      });
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <UsuariosContext.Provider
      value={{
        users,
        setUsers,
        logout,
        deleteUsuario,
        postUsuario,
        updateUser,
        login,
        userLogueado,
      }}
    >
      {children}
    </UsuariosContext.Provider>
  );
};

export default UserContext;

