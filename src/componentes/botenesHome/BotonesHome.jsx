import "./styleBotenesHome.css"
import React from 'react';
import almacen from "../../assets/img/almacen.png"
import venta from "../../assets/img/venta.png"
import inventario from "../../assets/img/controlinventario.png"
import pedidos from "../../assets/img/gestionpedidos.png"
import informes from "../../assets/img/informes.png"
import usuarios from "../../assets/img/controlusuarios.png"

const usuarioLogueado=JSON.parse(localStorage.getItem("user"))

const BotonesHome = () => {


    return (
        
        <>
        {usuarioLogueado.usuarioAdm.toLowerCase() === "si" ? (
          <>
          <main className="bodyBotones">
            <section className="home row ">
            <article className='card-home col-md-4'>
              <a href="/almacen">
                <img src= {almacen} alt="" />
              </a>
                <span>Almacen</span>
              </article>

              <article className='card-home col-md-4'>
              <a href="">
                <img src= {venta} alt="" />
              </a>
                <span>Ventas</span>
              </article>

              <article className='card-home col-md-4'>
              <a href="">
                <img src={inventario} alt="" />
              </a>
                <span>Gestion Proveedores</span>
              </article>

              <article className='card-home'>
              <a href="">
                <img src= {pedidos} alt="" />
              </a>
              <span>Pedidos</span>
              </article>
          
              <article className='card-home'>
              <a href="">
                <img src= {informes} alt="" />
              </a>
              <span>Informe y Analisis</span>
              </article>

              

              <article className='card-home '>
              <a href="/users">
                <img src={usuarios} alt="" />
              </a>
              <span>Control Usuarios</span>
              </article>
        
            </section>

        </main>
          </>):(
            <>
            <main className="bodyBotones">
            <section className="home row ">
            <article className='card-home col-md-4'>
              <a href="/almacen">
                <img src={almacen} alt="" />
              </a>
                <span>Almacen</span>
              </article>

              <article className='card-home col-md-4'>
              <a href="">
                <img src={venta} alt="" />
              </a>
                <span>Ventas</span>
              </article>

              

              <article className='card-home'>
              <a href="">
                <img src= {pedidos}alt="" />
              </a>
              <span>Pedidos</span>
              </article>
          
              <article className='card-home'>
              <a href="">
                <img src={informes} alt="" />
              </a>
              <span>Informe y Analisis</span>
              </article>

              
            </section>

        </main>
            </>
          )
          }

        
        </>
    );
};

export default BotonesHome;