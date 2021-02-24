# Components folder

El folder de componentes contiene de una manera estructurada todos los componentes que se usaron para construir las páginas. Este folder tiene la intención de crecer dependiendo de la cantidad de lógica que requiera la aplicación. 

En una aplicación más grande podría estar dividido en componentes atómicos de tal manera que se puedan trabajar átomos o moléculas de acuerdo a los requerimientos del proyecto.

## Subdivisión de componentes

Para esta aplicación se dividieron los componentes en dos grandes subcategorías:

1. `Containers`: contiene todos los componentes que sirven para describir cómo debería mostrarse componentes clave. En su mayoría son High Order Components como es el caso de `Panel` y `Page` que tienen un layout general en donde luego se muestran los hijos de los components. Otros componentes como `ItemList`podían hacer parte de otra carpeta en donde se incluya componentes más de negocio.Dada la poca complejidad del presente proyecto se decidió incluirse en éste folder.

1. `Forms`: Contiene los elementos que son usados para despegar formularios. En el caso de la aplicación construimos un `Button`, un `SearchField` (que despliega la barra de búsqueda de la parte superior de la pantalla) y un `TextField` cuyo único propósito en este proyecto es desplegar un input controlado.

## Documentación adicional
1. [Component Panel](./Containers/Panel)
1. [Component Page](./Containers/Page)
1. [Component ItemList](./Containers/ItemList)