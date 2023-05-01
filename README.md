# Clase-48-Proyecto-Final
Profesor: Marcos Santiago Villanueva</br>
Alumno: Brotzu Maximiliano

## Descripción
Proyecto creado utilizando Express.js. Se basa en un E-Commerce con conección a base de datos Mongo Atlas. Cuenta con métodos con Passport para inicios de sesión y autenticadores en las diferentes páginas. Mediante el archivo env se puede seleccionar el método de persistencia que se utilizará en las diferentes Factories. Estas se conectan a Mongo Atlas en donde se encuentra una base de datos para usuarios, productos y órdenes de compra. Al finalizar una compra, se envía un email a la dirección admin guardada en el archivo env.

## Server.js
Contiene las configuraciones principales para el lanzamiento del servidor.

### Passport
Se inicializa y se aplican las estrategias para loguear y registrarse. Estas se importan de un archivo en passportStrategies.js

### Redirecciones
Contiene una función básica para redirigir cualquier página no encontrada en el servidor. Esta redirecciona a /home y, si el usuario no está logueado, redirecciona a /session/login.

## Base de datos
El servidor utiliza métodos de Factory, Daos, Dtos y Repositories. Cada collección (USERS, ORDERS y PRODUCTS) contiene su propia factory, en donde mediante la opción env (Unicamente MONGO) genera el Dao correspondiente. Estos métodos utilizan sistemas de instancias para el control de cración de nuevas instancias.

**productsDaoMongoose.js** Contiene todos los métodos necesarios para CRUD de productos en la base de datos.
**productsRepo.js** Convierte los objetos Dao en Dto y viceversa.
**productsApi.js** Actúa de intermediario entre la lógica de los controladores y el repository.

Igual que estos funcionan **ordersDaoMongoose** y **usersDaoMongoose** siendo utilizados en los controladores del servidor.

## Routes
### sessionRouter.js
Utiliza el prefijo de **/session/** y se encarga de los métodos de Login y Signup. Si las autenticaciones fallan, se cargan nuevamente las vistas con un alerta que avisa del error.

También contiene la dirección **/logout** que cierra la sesión del usuario.

### homeRouter.js
Utiliza el prefijo de **/home** y se encarga de la lógica principal del servidor

**home/** GET -> Se utiliza para leer los productos de la base de datos y los muestra en la página.
**home/** POST -> Se utiliza para el envío de productos hacia el carrito. Se utiliza el email guardado en la sesión para poder decidir en que usuario guardar los productos.

**home/cart** GET -> Muestra los productos guardados en el carrito del usuario. Cada uno contiene un boton para eliminarlo de este, junto con un método que limpia el carrito completamente.
**home/cart** DELETE -> Es el encargado de eliminar los productos del carrito, tanto grupal como individualmente.

**home/cart/newPurchase** POST -> Genera una nueva orden de compra, esta contiene el Email del comprador, la fecha y hora de la compra realizada, número de orden y los productos a comprar, junto con su precio final. Luego de completarse la compra se limpia el carrito del usuario y se envía un Email al correo guardado en .env con los detalles de la orden utilizando la dependencia de **Nodemailer**.

# Railway
El proyecto está subido a Railways con el siguiente link:
*https://railway.app/project/f31b1e8c-774b-44b0-8676-422302b3a787/service/ffb878d1-e11c-4f7a-8be6-76bd7deb53a5*

# Aclaraciones
Al ser un proyecto dedicado completamente al desarrollo Back-end, los estilos y diseño de la página no están incorporados. Solo se encuentra lo escencial para que todos los métodos puedan ser utilizados en un navegador.
