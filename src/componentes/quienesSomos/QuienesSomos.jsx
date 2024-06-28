import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./StyleQuienesSomos.css";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdbreact";
const data = [
  {
    id: 1,
    name: "Leandro Garcia",
    linkedin:
      "https://www.linkedin.com/in/leandro-federico-garc%C3%ADa-27015a20a/",
    github: "https://github.com/leandrogarcia1",
    instagram: "https://www.instagram.com/leandrogarcia1/",
    image: "public/img/leandro.jpeg",
  },
  {
    id: 2,
    name: "Esteban Samaniego",
    linkedin:
      "https://www.linkedin.com/in/esteban-maximiliano-samaniego-33b4a3263/",
    github: "https://github.com/MaxiSama12",
    instagram: "https://www.instagram.com/estebannn_______/",
    image: "public/img/esteban.jpeg",
  },
  {
    id: 3,
    name: "Yonathan Pachado",
    linkedin: "https://www.linkedin.com/in/yonathan-pachado/",
    github: "https://github.com/YPachado99",
    instagram: "https://www.instagram.com/ypachado99/",
    image: "public/img/Yonathan.jpg",
  },
  {
    id: 4,
    name: "Ricardo Silva",
    linkedin: "https://www.linkedin.com/in/franco-ricardo-silva-71048421b/",
    github: "https://github.com/ricardosilv1",
    instagram: "https://www.instagram.com/ricardosilv1/",
    image: "public/img/ricardo.jpeg",
  },
  {
    id: 5,
    name: "Luis Contreras",
    linkedin: "https://www.linkedin.com/in/persona3/",
    github: "https://github.com/LHContreras",
    instagram: "https://www.instagram.com/lhcontreras13/",
    image: "public/img/luis.jpeg",
  },
  {
    id: 6,
    name: "Nahuel Bardera",
    linkedin: "https://ar.linkedin.com/in/nahuel-francisco-bardera-889094252",
    github: "https://github.com/hermanito135",
    instagram:
      "https://instagram.com/itzhermanito135?utm_source=qr&igshid=ZGUzMzM3NWJiOQ%3D%3D",
    image: "public/img/nahuel.jpeg",
  },
];

const QuienesSomos = () => {
  return (
    <div>
      <div className="container-nosotros">
        <h1 className="titulo-nosotros">Quiénes Somos</h1>
        <div className="nosotros-cards">
          {data.map((person) => (
            <div key={person.id} className="nosotros-card">
              <MDBCol style={{ maxWidth: "22rem" }}>
                <MDBCard>
                  <MDBCardImage
                    className="img-fluid"
                    src={person.image}
                    waves
                    alt={person.name}
                  />
                  <MDBCardBody>
                    <MDBCardTitle 
                    className="nosotros-name">
                      {person.name}
                      </MDBCardTitle>
                    <MDBCardText>
                      
                        <a
                          href={person.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FontAwesomeIcon
                            className="nosotros-icon"
                            icon={faLinkedin}
                          />
                        </a>
                        <a
                          href={person.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FontAwesomeIcon
                            className="nosotros-icon"
                            icon={faGithub}
                          />
                        </a>
                        <a
                          href={person.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FontAwesomeIcon
                            className="nosotros-icon"
                            icon={faInstagram}
                          />
                        </a>
                      
                    </MDBCardText>
                    
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </div>
          ))}
        </div>
      </div>
    </div>
    /*
<div className="container-nosotros" >
        <h1 className="titulo-nosotros">Quiénes Somos</h1>
        <div className="nosotros-cards">
            {data.map((person) => (
            <div key={person.id} className="nosotros-card">
                <img className="nosotros-image" src={person.image} alt={person.name} />
                <h2>{person.name}</h2>
                <div className="nosotros-links">
                    <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="nosotros-icon" icon={faLinkedin} />
                    </a>
                    <a href={person.github} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="nosotros-icon" icon={faGithub} />
                    </a>
                    <a href={person.instagram} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="nosotros-icon" icon={faInstagram} />
                    </a>
                </div>
            </div>))}
        </div>
    </div>
       
    */
  );
};

export default QuienesSomos;
