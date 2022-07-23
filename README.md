# Traffic Light con React
<img src="src/img/PreviewTrafficLight.png">
  
  ## 📝Instrucciones
  Simulemos un semáforo [como este](https://github.com/breatheco-de/exercise-traffic-light-react/blob/master/preview.gif)
  - La luz tiene que brillar cuando se hace clic.
- Todo el propósito del componente es mostrar un semáforo con luces de lectura, amarillas y verdes.
- Cuando se hace clic (se selecciona) alguna luz, ésta debe brillar, pero las otras luces deben dejar de brillar.
- El componente debe tener un estado que almacene el color actual que debe brillar, por eso debes usar el hook useState.

## 🔥 Bonus
- +2 Crear un botón que al pulsarlo haga un ciclo del color del semáforo seleccionado entre rojo, verde y amarillo.
- +10 Tener un botón que al pulsarlo añada un color extra "morado" al semáforo.

El semaforo cuenta con ambos bonus, aunque he de reconocer que para mi debería puntuar +10 el ciclo de color y no el botón morado 😅

Para la luz morada decidí utilizar el renderizado condicional en vez de ocultarla/mostrarla con css ya que esto último no me parecía lo más optimo.
Para el ciclo de luces utilicé un setInerval probé diferentes tiempos y al final lo dejé en 1 seg. ya que se apreciaba bien.
<p>
  <a href="https://gitpod.io#https://github.com/4GeeksAcademy/react-hello.git"><img src="https://raw.githubusercontent.com/4GeeksAcademy/react-hello/master/open-in-gitpod.svg?sanitize=true" />
  </a>
</p>

Esta plantilla es similar a create-react-app pero está pensada para los estudiantes de la Academia 4Geeks.

##### Descargue el boilerplate usando git

```
$ git clone https://github.com/4GeeksAcademy/react-hello.git
$ cd react-hello
```

##### e instala el paquete npm:
```
$ npm install
```

## ¡Empieza a programar!

Para Windows, Mac, Linux o Gitpod, inicie el servidor webpack con live reload:
- `$ npm run start`

