# Store

En este folder se definen los manejadores principales de los estados. 

Dada la poca complejidad del proyecto se crearon dos Custom Hooks `useItems` y `useItem` que almacenan la información que es consultada externamente para el caso de uso del listado de los items y los detalles de los items respectivamente.

Cada uno de los hooks hace uso del servicio externo correspondiente y maneja la respuesta, incluyendola en un state. 

Este state es manejado con el Hook `useState` en ambos casos. Bien podría hacerse uso de `useReducer` dependiendo de que tan complejo pueda llegar a ser el estado.

Adicionalmente se hace uso del hook `useEffect` con el fin de actualizar la información cada vez que los parámetros que se pasan al custom hook cambian.

Se definen tambien, en cada caso, tipos de typescript que manejan la información

## Para tener en cuenta en futuras versiones

Aunque los estados en el momento hacen uso de un espacio para manejar los errores, los mismos no están siendo desplegados al usuario en ningún caso. Se debe tener en cuenta que los errores deben manejarse adecuadamente con el fin de que el usuario final tenga información de transacciones que no pudieron ser completadas correctamente, como en este caso la consulta de información desde un servido externo a la aplicación.
