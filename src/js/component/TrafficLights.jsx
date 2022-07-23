import React from "react";
import { useState } from "react";

//create your first component
const TrafficLights = () => {
  //Refactorizando código:
  //   const [greenLight, setColorGreen] = useState("");
  //   const [redLight, setColorRed] = useState("");
  //   const [yellowLight, setColorYellow] = useState("");

  // creo variable de estado para los colores del semaforo
  const [color, setColor] = useState("");
  
  // creo variable de estado para mostrar/ocultar el color morado
  const [active, setActive] = useState(false)

  //función para mostrar/activar la luz morada
  const handleActive = () =>{
	setActive(!active)
  }

  // creo una función que guarde el elemento "clickado"
  const elementClick = (e) => {
    const clicked = e.target.id;
    setColor(clicked);
  };

  return (
    <div className="wrapper">
      <div className="container-fluid">
        <div
          // creo operador ternario para activar las luces
          className={"red " + (color === "red" ? "lightRedOn" : "")}
          id="red"
          onClick={elementClick}
          // setColorRed("glow");
          // setColorGreen("");
          // setColorYellow("");
        ></div>
        <div
          className={"yellow " + (color === "yellow" ? "lightYellowOn" : "")}
          id="yellow"
          onClick={elementClick}
        ></div>
        <div
          className={"green " + (color === "green" ? "lightGreenOn" : "")}
          id="green"
          onClick={elementClick}
        ></div>
			{/* Creo renderizado condicional para que la luz morada solo se muestre al "clickar" el botón */}
		{
			active && <div
			className={"purple " + (color === "purple" ? "lightPurpleOn" : "")}
			id="purple"
			onClick={elementClick}
		  ></div>
		}	
        
        <div className="buttons">
          <button className="btn-hidden" onClick={handleActive}>Show me</button>
        </div>
      </div>
    </div>
  );
};

export default TrafficLights;

// crear boton "activa luz morada" con su corresponddiente evento
// conseguir crear Create one button that when you click on it, it cycles the traffic light selected color between red, green and yellow.
