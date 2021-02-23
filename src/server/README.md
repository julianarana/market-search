# Aplicación de Servidor

Este folder contiene la aplicación en Node/Express para manejar los llamados al API de mercadolibre. Esta aplicación levanta un servidor en localhost:8080 que permite sencillamente hacer los llamados al API público y devolver los valores según el formato esperado en el frontend y de acuerdo a los requerimientos entregados para la prueba.

## Estructura

La aplicación se divide en dos carpetas:

### Folder `api`

Contiene la lógica para hacer los llamados al api público de mercado libre y la transformación de los objetos recibidos al formato que recibirá el front-end.

### Folder `services`

Contiene la lógica que maneja las peticiones provenientes del frontend.


## Temas pendientes o cosas por mejorar

1. Manejo de errores internos del servidor
2. Manejo de errores al hacer los llamados al API de Mercado Libre.
