# Prueba técnica Mercado libre

El proyecto hace parte de la prueba técnica para Mercado Libre. Se divide en dos partes fundamentales:

1. FrontEnd construido en React con Typescript.
2. Backend construido en nodejs.

## Prerequisitos

1. Node version > 13 (Ver documentación)[https://nodejs.org/en/]
2. Yarn (Ver documentación)[https://yarnpkg.com/]
3. Npm (Ver documentación)[https://www.npmjs.com/get-npm]

## Cómo correr el proyecto

Dado que el proyecto incluye dos partes, el frontend y el backend, ambos deben 

1. Clone on localhost.
2. Correr el comando `yarn start`. Este comando correrá ambas aplicaciones al tiempo.

## Distribución general de la aplicación

La aplicación está estructurada de manera lógica en varias folders que tienen un propósito específico y que se describe de manera general en la documentación de cada folder. 
### Documentación adicional de componentes
1. [Componentes](./components) : Contiene los componentes que pueden ser reutilizados a lo largo de toda la aplicación. 
1. [Servidor](./server): Es un subproyecto en donde se incluye la lógica del servidor. 
1. [Rutas](./Routes): Lógica de manejo de las rutas de la aplicación
1. [Store](./Store): Lógica de almacenamiento de la información 
1. [Páginas](./pages): Descripción de las diferentes páginas que se despliegan en la aplicación.


## Para tener en cuenta en versiones futuras

La presente aplicación tiene como objetivo servir como prueba técnica para el proceso de Mercado libre. Es necesario realizar algunas tareas adicionales para que la aplicación esté lista para producción:

1. Configurar el proceso de build para optimizar los recurso mediante webpack.
1. En un proceso de desarrollo es más práctico tener la aplicación de backend y de frontend en dos proyectos separados.
1. La aplicación de backend debería contar idealmente con pruebas unitarias
1. Se debería contar con pruebas de integración.
