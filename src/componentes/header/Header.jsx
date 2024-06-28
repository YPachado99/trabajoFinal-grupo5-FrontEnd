import React, { useContext, useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBIcon,
  MDBBtn,
  MDBCollapse
} from 'mdb-react-ui-kit';
import { MDBNavbarNav } from 'mdb-react-ui-kit';

import  { UsuariosContext } from '../../context/UserContext';




const usuarioLogueado=JSON.parse(localStorage.getItem("user"))

export default function Header() {
  const [showNavExternal, setShowNavExternal] = useState(false);

  const {logout}=useContext(UsuariosContext)
  return (
    <>
    {usuarioLogueado.usuarioAdm.toLowerCase() === "si" ? (
      <>
      <MDBCollapse show={showNavExternal}>
        <div className='bg-dark p-4'>
        <MDBNavbarNav>
            <MDBNavbarLink href='/home' style={{ color: '#FFFFFF' }}>Home</MDBNavbarLink>
            <MDBNavbarLink active aria-current='' href='/almacen' style={{ color: '#FFFFFF' }} >
              Almacen
            </MDBNavbarLink>
            <MDBNavbarLink href='#' style={{ color: '#FFFFFF' }}>Ventas</MDBNavbarLink>
            <MDBNavbarLink href='#'style={{ color: '#FFFFFF' }}>Gestion Proveedores</MDBNavbarLink>
            <MDBNavbarLink href='#'style={{ color: '#FFFFFF' }}>Pedidos</MDBNavbarLink>
            <MDBNavbarLink href='#'style={{ color: '#FFFFFF' }}>Informe y Analisis</MDBNavbarLink>
            <MDBNavbarLink  href='/users'  style={{ color: '#FFFFFF' }}>
              Control de Usuarios
            </MDBNavbarLink>
            <MDBBtn outline className='mx-2' color='danger' onClick={logout}  >Cerrar Sesion</MDBBtn>
            
          </MDBNavbarNav>
        </div>
      </MDBCollapse>
      <MDBNavbar dark bgColor='dark'>
        <MDBContainer fluid>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarToggleExternalContent'
            aria-controls='navbarToggleExternalContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavExternal(!showNavExternal)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
        </MDBContainer>
      </MDBNavbar>
      
      
      </>
    ):(
      <>
      <MDBCollapse show={showNavExternal}>
        <div className='bg-dark p-4'>
        <MDBNavbarNav>
            <MDBNavbarLink href='/home' style={{ color: '#FFFFFF' }}>Home</MDBNavbarLink>
            <MDBNavbarLink active aria-current='' href='/almacen' style={{ color: '#FFFFFF' }} >
              Almacen
            </MDBNavbarLink>
            <MDBNavbarLink href='#' style={{ color: '#FFFFFF' }}>Ventas</MDBNavbarLink>
            
            <MDBNavbarLink href='#'style={{ color: '#FFFFFF' }}>Pedidos</MDBNavbarLink>
            <MDBNavbarLink href='#'style={{ color: '#FFFFFF' }}>Informe y Analisis</MDBNavbarLink>
            <MDBBtn outline className='mx-2' color='danger' onClick={logout}  >Cerrar Sesion</MDBBtn>
            
          </MDBNavbarNav>
        </div>
      </MDBCollapse>
      <MDBNavbar dark bgColor='dark'>
        <MDBContainer fluid>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarToggleExternalContent'
            aria-controls='navbarToggleExternalContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavExternal(!showNavExternal)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
        </MDBContainer>
      </MDBNavbar>
      </>
    )
    }
      
    </>
  );
}