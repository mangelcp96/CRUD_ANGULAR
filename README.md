# Autor
Miguel Ángel Cobo Pérez
# Blog CRUD con Angular

Este proyecto implementa un módulo CRUD (Crear, Leer, Actualizar, Eliminar) para las publicaciones de un blog. Utiliza Angular como framework principal y se integra con JSONPlaceholder, un servicio web para simular una API de backend.

## Características

- Listado de posts: Visualiza todos los posts disponibles.
- Vista individual de post: Muestra los detalles de un post específico.
- Inserción de post: Permite añadir nuevos posts.
- Actualización de post: Habilita la edición de los posts existentes.
- Eliminación de post: Permite borrar posts.

## Tecnologías Utilizadas

- Angular 17: Para la construcción del frontend.
- Bootstrap 5: Para el diseño y estilos globales del proyecto.
- JSONPlaceholder: Como API de backend simulada para el manejo de datos.

## Requisitos Previos

- Node.js y npm instalados.
- Angular CLI instalado.

## Instalación

1. Clona el repositorio a tu máquina local:
git clone https://github.com/mangelcp96/CRUD_ANGULAR.git


2. Navega al directorio del proyecto:
cd blog


3. Instala las dependencias necesarias:
npm install


4. Inicia el servidor de desarrollo:
ng serve


5. Abre tu navegador en `http://localhost:4200/` para ver la aplicación en funcionamiento.

## Estructura del Proyecto

- **Componentes CRUD**: Dentro de la carpeta `post`, se encuentran los componentes para cada acción del CRUD.
- **Modelo de datos**: Se define la interfaz `Post` en el archivo `post.ts`, que modela la estructura de datos de un post.
- **Servicio de conexión a la base de datos**: En la carpeta `post`, se incluye el servicio `post.service.ts` que gestiona las operaciones CRUD a través de la API de JSONPlaceholder.

## Uso

Puedes navegar entre las diferentes funcionalidades del CRUD a través de la barra de navegación o los botones proporcionados en la interfaz. La aplicación te permite:

- Ver todos los posts disponibles.
- Crear nuevos posts.
- Editar posts existentes.
- Eliminar posts.

## Contribuir

Si deseas contribuir al proyecto, por favor considera lo siguiente:

- Realiza un fork del repositorio.
- Crea una rama para tu característica o corrección.
- Envía un pull request con tus cambios.


## Contacto

Para más información o sugerencias, por favor abre un issue en el repositorio de GitHub.
