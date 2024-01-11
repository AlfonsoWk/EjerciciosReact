/* 1 . Crear una aplicación web con un componente que muestre en pantalla el mensaje
“Hello World”. */

/* import React from 'react'

const Ejercicios = () => {
  return (
    <div>
        <h1>Hola Mundo</h1>
    </div>
  )
}

export default Ejercicios */

/* 2. Modificar el component <h1>Hola Mundo</h1>e anterior y enviar mediante props el valor “My friend” */

/* import React from 'react'

const Ejercicios = (props) => {
  return (
    <div>
        <h1>{props.children}</h1>
    </div>
  )
}

export default Ejercicios */

/* 3. Modificar el programa anterior agregando al componente un state con la clave msj:
“(from changed state)”, además agregar un botón al presionar este botón (onClick), */

import React from 'react'

const Ejercicios = (props) => {
  return (
    <div>
      <h1>{props.children}</h1>
    </div>
  )
}

export default Ejercicios
