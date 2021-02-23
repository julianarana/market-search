# Services Folder

El folder services contiene los llamados a los api services en el servidor local. 

`index.ts` contiene el código para hacer los llamados a los servicos
`types.ts` contiene la definición de los tipos que usamos al resolver los llamados al servicio.

## Temas pendientePending issues or things to improve

1. Actualmente los servicios no están manejando apropiadamente los errores. Los errores deberían ser capturados para informarle al usuario que un habría habido un error en el momento de enviar la petición al servidor.
1. La url base `BASE_URL` se incluyó como una constante. en una apliclación real, este valor debería venir incluido en variables de entorno que la manejen de una mejor manera.
