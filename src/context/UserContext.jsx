import axios from "axios";
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
        "http://localhost:3000/api/user/usuarios"
      );
      console.log(response);
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const login = async (mail, contraseña) => {
    //console.log(mail, contraseña, "login Context");
    const response = await axios.post("http://localhost:3000/api/user/login", {
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
    console.log(user);

    if (user.role === "admin") {
      window.location.href = "/home";
    } else {
      window.location.href = "/home";
    }
  };

  const postUsuario = async (user) => {
    try {
      let response = await axios.post(
        "http://localhost:3000/api/user/register",
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
    console.log(_id, "deleteUsuario");
    try {
      await axios.delete(`http://localhost:3000/api/user/usuarios/${_id}`);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const updateUser = async (updatedUsuario) => {
    console.log(updatedUsuario, "este es el user");
    try {
      await axios.put(
        `http://localhost:3000/user/usuarios/${updatedUsuario._id}`,
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

export default UserContext;
