# API REST - Node.js + Express

Este proyecto es una API REST simple desarrollada con **Node.js** y **Express**, que permite gestionar productos y usuarios a través de operaciones CRUD (Crear, Leer, Actualizar y Eliminar). Los datos se almacenan en archivos JSON locales.

## 📁 Estructura del proyecto

```
cdruetta-nodejs-javascript/
├── README.md
├── index.js
├── package.json
├── controllers/
│   ├── products.controller.js
│   └── users.controller.js
├── db/
│   ├── products.json
│   └── users.json
├── routes/
│   ├── products.routes.js
│   └── users.routes.js
```
--------------------------------------------------------------------------------------------------------
## 🚀 Endpoints

### 📦 Productos

| Método | Ruta               | Descripción                          |
|--------|--------------------|--------------------------------------|
| GET    | `/productos`       | Obtener todos los productos          |
| GET    | `/productos/:id`   | Obtener un producto por su ID        |
| POST   | `/productos`       | Crear un nuevo producto              |
| PUT    | `/productos/:id`   | Actualizar un producto existente     |
| DELETE | `/productos/:id`   | Eliminar un producto por su ID       |

### 👤 Usuarios

| Método | Ruta               | Descripción                          |
|--------|--------------------|--------------------------------------|
| GET    | `/usuarios`        | Obtener todos los usuarios           |
| GET    | `/usuarios/:id`    | Obtener un usuario por su ID         |
| POST   | `/usuarios`        | Crear un nuevo usuario               |
| PUT    | `/usuarios/:id`    | Actualizar un usuario existente      |
| DELETE | `/usuarios/:id`    | Eliminar un usuario por su ID        |

## 🛠 Requisitos

- Node.js (versión 18 o superior recomendada)
- npm
--------------------------------------------------------------------------------------------------------

## 📦 Instalación

1. Clonar el repositorio:

```bash
git clone git@github.com:Cdruetta/nodejs-javascript.git
cd nodejs-javascript
```

2. Instalar dependencias:

```bash
npm install
```

3. Ejecutar el proyecto con nodemon:

```bash
npm run dev
```

El servidor se ejecutará en: [http://localhost:3000](http://localhost:3000)
-------------------------------------------------------------------------------------------------------- 

## 📝 Ejemplo de producto

```json
{
  "nombre": "Teclado Mecánico",
  "precio": 12000
}
```

## 📝 Ejemplo de usuario

```json
{
  "nombre": "Juan Pérez",
  "email": "juan.perez@example.com",
  "edad": 30
}
```
--------------------------------------------------------------------------------------------------------
## ✅ Tecnologías utilizadas

- Node.js
- Express
- Nodemon
- fs (para manejo de archivos)
- path (para rutas de archivos)

--------------------------------------------------------------------------------------------------------
## 🧪 Probar la API con Postman o Thunder Client

Puedes probar los endpoints de esta API utilizando herramientas como **Postman** o **Thunder Client** (una extensión de VS Code).

### Pasos para probar:

1. Inicia el servidor:

```bash
npm run dev
```

2. Abre Postman o Thunder Client.

3. Usa las siguientes URLs según el método deseado:

- Obtener todos los productos:
  ```
  GET http://localhost:3000/productos
  ```

- Crear un producto:
  ```
  POST http://localhost:3000/productos
  ```
  Body (JSON):
  ```json
  {
    "nombre": "Nuevo Producto",
    "precio": 9999
  }
  ```

- Obtener todos los usuarios:
  ```
  GET http://localhost:3000/usuarios
  ```

- Crear un usuario:
  ```
  POST http://localhost:3000/usuarios
  ```
  Body (JSON):
  ```json
  {
    "nombre": "Ana Torres",
    "email": "ana.torres@example.com",
    "edad": 28
  }
  ```

Estas herramientas te permiten realizar solicitudes HTTP fácilmente y ver las respuestas de la API.

--------------------------------------------------------------------------------------------------------
## 🚧 Futuras mejoras

- Integración con base de datos (MongoDB, PostgreSQL)
- Autenticación de usuarios
- Validaciones de datos
- Tests automáticos
- Documentación con Swagger

--------------------------------------------------------------------------------------------------------

## 📄 Licencia

Este proyecto se encuentra bajo la licencia MIT.

# P.-I.ReactJS-NodeJS-back
