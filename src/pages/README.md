# Pages

Este folder contiene la descripción básica de las páginas. Para el presente proyecto contamos con tres componentes diferentes que corresponden a las páginas de Búsqueda (`/`), a la página de despliegue de items (`/item?q=:query`) y a la página de detalle del item (`/item/:idItem`).

Cada una de las páginas hace uso del HOC [Page](../components/Containers/Page/README.md) y el contenido es pasado como children dentro del componente. De esta manera logramos crear páginas rápidamente sin entrar en detalles de cómo es la distribución de los diferentes elementos.

En las páginas, de manera general, se maneja la lógica de negocio. En este caso esto implica definir para cada caso los estados, y hacer los llamados correspondientes a la API externa.

De igual manera, las páginas definen de manera general, como debe ser renderizado el contenido haciendo uso de los componentes que se definieron en [Components](../components/).

