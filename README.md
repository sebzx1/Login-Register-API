<h1>Bienvenido  <img src="https://raw.githubusercontent.com/iampavangandhi/iampavangandhi/master/gifs/Hi.gif" width="30px"> 🚀</h1>
<h2>Creacion de API usando formularios</h2>

### DESCRIPCION
Este proyecto es una aplicación web de gestión de usuarios construida con Node.js y Express, que permite registrar, autenticar y gestionar usuarios a través de una API RESTful. Los usuarios pueden registrarse proporcionando un nombre de usuario y una contraseña, que se almacenan de forma segura utilizando hash. La aplicación también permite iniciar sesión para obtener un token de autenticación, facilitando el acceso a rutas protegidas. Además, los usuarios pueden ser consultados mediante una API que devuelve sus datos en formato JSON, todo ello respaldado por una base de datos MongoDB para el almacenamiento persistente de la información.


## INSTALACION 
- Se debe descargar el repositorio **https://github.com/sebzx1/Login-API.git**
- **Usa el comando git clone https://github.com/sebzx1/Login-API.git** 
#### *INSTALACION  DE TODAS LAS DEPENDENCIAS👇*
- npm install


## USO
Al momento de descargar o clonar el repositorio se debe agregar al visual code En VS Code, selecciona **File** > **Open Folder** (o **Archivo > Abrir Carpeta**) y abre la carpeta descargada.

- Puedes intalar todas las dependencias del proyecto usando este comando **npm install** el cual instalara todas las dependencia de acuerdo al archivo **package.json**

- Una ves descargada las dependencia inicializa el proyecto con el siguiente comando **node server.js** este comando dara inicio al proyecto el cual lo visualizaras con la sigueinte URL **https://localhost:3000** o solo escribiendo **localhost:3000**.

- Se visualizara un formulario de login el cual se llenara dependiendo de los datos registrados en la base de datos.

### USO DE POSTMAN PARA OBTENER LOS DATOS DE LA *API*

- Al momento de registrar un usuario en la base de datos, abres postman y creas una nueva coleccion,
creas una nueva *request* la cual usaras el metodo **GET** para obtener los datos a traves de solicitudes http el cual sera entregado por un archivo JSON, para la consulta en el postman usaras el siguiente comado: http://localhost:3000/api/users/ donde **api** es la ruta, **users** es la tabla de la base de datos **formularios**.

- Para insertar datos desde postman a la base de datos debes añadir otro **request** pero esta ves con el metodo **POST** donde pondras la siguiente URL http://localhost:3000/api/register e ingresaras el siguiente codigo en la ruta de **body** y seleccionas la casilla **raw** 👇

<img src="post.png" alt="">

**e ingresas el siguiente codigo:**

{
  
  "username": "usuario_prueba",

  "password": "contraseña_prueba"

}

### TECNOLOGIAS
  ![JavaScript](https://img.shields.io/badge/-JavaScript-333333?style=flat&logo=javascript)
  ![HTML5](https://img.shields.io/badge/-HTML5-333333?style=flat&logo=HTML5)
  ![CSS](https://img.shields.io/badge/-CSS-333333?style=flat&logo=CSS3&logoColor=1572B6)
  ![Node.js](https://img.shields.io/badge/-Node.js-333333?style=flat&logo=node.js)
  ![Express](https://img.shields.io/badge/-Express-333333?style=flat&logo=express)
  ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)