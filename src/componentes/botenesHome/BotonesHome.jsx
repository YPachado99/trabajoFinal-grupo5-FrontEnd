import "./styleBotenesHome.css"
import React from 'react';

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
                <img src="src/assets/img/almacen.png" alt="" />
              </a>
                <span>Almacen</span>
              </article>

              <article className='card-home col-md-4'>
              <a href="">
                <img src="src/assets/img/venta.png" alt="" />
              </a>
                <span>Ventas</span>
              </article>

              <article className='card-home col-md-4'>
              <a href="">
                <img src="src/assets/img/controlinventario.png" alt="" />
              </a>
                <span>Gestion Proveedores</span>
              </article>

              <article className='card-home'>
              <a href="">
                <img src="src/assets/img/gestionpedidos.png" alt="" />
              </a>
              <span>Pedidos</span>
              </article>
          
              <article className='card-home'>
              <a href="">
                <img src="src/assets/img/informes.png" alt="" />
              </a>
              <span>Informe y Analisis</span>
              </article>

              

              <article className='card-home '>
              <a href="/users">
                <img src="src/assets/img/controlusuarios.png" alt="" />
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
                <img src="src/assets/img/almacen.png" alt="" />
              </a>
                <span>Almacen</span>
              </article>

              <article className='card-home col-md-4'>
              <a href="">
                <img src="src/assets/img/venta.png" alt="" />
              </a>
                <span>Ventas</span>
              </article>

              

              <article className='card-home'>
              <a href="">
                <img src="src/assets/img/gestionpedidos.png" alt="" />
              </a>
              <span>Pedidos</span>
              </article>
          
              <article className='card-home'>
              <a href="">
                <img src="src/assets/img/informes.png" alt="" />
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