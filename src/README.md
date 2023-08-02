# Tienda Total-Fashion
Es un proyecto de ecommerce básico utilizado para el curso de React. Esta aplicación permite ver una lista de productos de compras de una tienda de tipo shopping de ropa en línea. Los productos y las órdenes de compra se almacenan en Firebase.

## Tecnologías utilizadas
- Vite
- React
- React Router
- Firebase

## Funcionalidades
- Ver una lista de productos disponibles.
- Agregar productos al carrito de compras.
- Ver el carrito de compras.
- Realizar una orden de compra.

## Instalación

### Para instalar y ejecutar la aplicación en tu máquina local, sigue los siguientes pasos:

1. Clonar el repositorio a tu máquina local.
2. Abrir una terminal en el directorio del proyecto.
3. Ejecutar el comando npm install para instalar las dependencias.
4. Ejecutar el comando npm run dev para iniciar la aplicación.
5. Abrir tu navegador y navegar a http://localhost:5173 para ver la aplicación en acción.

## Configuración de Firebase

### Para utilizar Firebase en esta aplicación, debes seguir los siguientes pasos:

1. Crear una cuenta en Firebase y crea un nuevo proyecto.
2. En la sección "Authentication" de Firebase, habilitar el proveedor de autenticación de correo electrónico y contraseña.
3. En la sección "Firestore" de Firebase, crear una nueva base de datos y configura las reglas de seguridad para permitir lectura/ 
   escritura solamente a usuarios autenticados.
4. En la sección "Project settings" de Firebase, hacer clic en "Add app" y seguir las instrucciones para agregar una nueva 
   aplicación web.
5. Copiar las credenciales de Firebase y configurar las variables de entorno en el archivo .env de tu proyecto.

## Licencia
Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo LICENSE para obtener más información.