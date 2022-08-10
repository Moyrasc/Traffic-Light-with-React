import React from "react";
import { useState } from "react";

//create your first component
const TrafficLights = () => {
  // variable de estado para los colores del semaforo
  const [color, setColor] = useState("");

  //variable de estado para mostrar/ocultar el color morado
  const [active, setActive] = useState(false);

  // función que guarde el elemento "clickado" 
    const elementClick = (e) => {
      const clicked = e.target.id;
      setColor(clicked);
    };

  //función para mostrar/activar la luz morada
  const handleActive = () => {
    setActive(!active);
  };

  //   función ciclo de luces..
  const automaticLights = () => {
    let colorIndex = 0;
    const colorLight = ["red", "yellow", "green"];
    setInterval(() => {
      if (colorIndex <= colorLight.length) {
        setColor(colorLight[colorIndex]);
        colorIndex++;
      } else {
        return false;
      }
    }, 1000);
  };

  return (
    <div className="wrapper">
      <div className="m-auto bg-black" id="traffic-light"></div>
      <div className="container">
        <div
          // creo operador ternario para activar las luces
          className={"red " + (color === "red" ? "lightRedOn" : "")}
		  id="red"
          onClick={elementClick}

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
        {active && (
          <div
            className={"purple " + (color === "purple" ? "lightPurpleOn" : "")}
			id="purple"
            onClick={elementClick}
          ></div>
        )}
      </div>
      <div
        className="d-grid gap-2 d-md-flex justify-content-md-center"
        id="buttons"
      >
        <button className="btn-lights" onClick={handleActive}>
          Show Me
        </button>
        <button className="btn-cycle" onClick={automaticLights}>
          Active Lights
        </button>
      </div>
    </div>
  );
};

export default TrafficLights;


