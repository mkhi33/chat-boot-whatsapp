# Guía del usuario para vincular WhatsApp con Venom y DialogFlow

## Paso 1: Crear una cuenta en WhatsApp

Para vincular WhatsApp con Venom y DialogFlow, necesitas tener una cuenta de WhatsApp. Si ya tienes una cuenta de WhatsApp, salta al paso 2. Si no, sigue estos pasos para crear una cuenta:

1. Descarga WhatsApp desde la tienda de aplicaciones de tu teléfono.
2. Abre WhatsApp y sigue las instrucciones para configurar una cuenta. Necesitarás verificar tu número de teléfono durante el proceso.

## Paso 2: Crear una cuenta en DialogFlow

Para utilizar DialogFlow con WhatsApp, necesitas tener una cuenta en DialogFlow. Si ya tienes una cuenta de DialogFlow, salta al paso 3. Si no, sigue estos pasos para crear una cuenta:

1. Visita la página de inicio de DialogFlow en https://dialogflow.cloud.google.com/.
2. Haz clic en "Iniciar sesión" en la esquina superior derecha de la página.
3. Si ya tienes una cuenta de Google, inicia sesión con esa cuenta. Si no, crea una cuenta de Google siguiendo las instrucciones en pantalla.
4. Una vez que hayas iniciado sesión, sigue las instrucciones en pantalla para crear una nueva cuenta de DialogFlow.

## Paso 3: Crear una nueva instancia de DialogFlow

Para utilizar DialogFlow con WhatsApp, necesitas crear una nueva instancia de DialogFlow. Sigue estos pasos para crear una nueva instancia:

1. Inicia sesión en DialogFlow utilizando la cuenta que creaste en el paso 2.
2. Haz clic en "Crear agente" en la página de inicio de DialogFlow.
3. Ingresa un nombre y una descripción para el agente.
4. Haz clic en "Crear" para crear el agente.

## Paso 4: Configurar una conexión entre Venom y WhatsApp

Para conectar WhatsApp con Venom, sigue estos pasos:

2. Abre una terminal en tu computadora y navega hasta el directorio raiz del proyecto.
3. Ejecuta el comando `npm run start`.

Esto abrirá una ventana de código QR en tu terminal. Escanea el código QR utilizando la cámara de tu teléfono y sigue las instrucciones en pantalla para vincular tu cuenta de WhatsApp con Venom.


# Guia técnica para la implementación del chatboot

## Descripción de las dependencias

Aquí se describen las dependencias utilizadas en la implementación del chatbot para WhatsApp utilizando Node.js, Venom y DialogFlow.

### Dependencias

- `dialogflow`: es una biblioteca de Node.js para interactuar con DialogFlow, una plataforma de procesamiento de lenguaje natural (NLP) desarrollada por Google. Esta dependencia se utiliza para enviar las consultas del usuario a DialogFlow y recibir las respuestas del bot.

- `dotenv`: es una biblioteca de Node.js que carga variables de entorno desde un archivo `.env`. Esta dependencia se utiliza para cargar las variables de entorno necesarias para la configuración de Venom y DialogFlow.

- `express`: es un marco de aplicación web de Node.js utilizado para crear API RESTful. Esta dependencia se utiliza para crear un servidor web que recibe las solicitudes del bot de DialogFlow y las envía a Venom.

- `uuid`: es una biblioteca de Node.js utilizada para generar identificadores únicos. Esta dependencia se utiliza para generar un identificador único para cada sesión de usuario.

- `venom-bot`: es una biblioteca de Node.js utilizada para interactuar con WhatsApp. Esta dependencia se utiliza para enviar y recibir mensajes en WhatsApp y para vincular una cuenta de WhatsApp con Venom.

## Descripción de las variables de entorno

Aquí se describen las variables de entorno utilizadas en la implementación del chatbot para WhatsApp utilizando Node.js, Venom y DialogFlow.

### Variables de entorno

- `DIALOGFLOW_PROJECT_ID`: es el ID del proyecto de DialogFlow que se está utilizando para procesar las consultas del usuario y generar respuestas. Este valor se puede encontrar en la página de configuración del proyecto en DialogFlow.

- `GOOGLE_CLIENT_EMAIL`: es la dirección de correo electrónico de la cuenta de servicio de Google utilizada para acceder al proyecto de DialogFlow. Esta cuenta de servicio debe tener permisos de acceso al proyecto de DialogFlow y a la API de DialogFlow.

- `GOOGLE_PRIVATE_KEY`: es la clave privada de la cuenta de servicio de Google utilizada para acceder al proyecto de DialogFlow. Esta clave se debe guardar en un archivo separado y cargarse como una cadena de caracteres en la variable de entorno. Se recomienda que esta clave privada se mantenga en secreto y no se comparta públicamente.

- `DF_LANGUAGE_CODE`: es el código de idioma utilizado por DialogFlow para procesar las consultas del usuario y generar respuestas. Este valor se debe establecer en función del idioma utilizado por los usuarios en la aplicación de WhatsApp.

- `PATH_FILE_CREDENTIALS`: es la ruta del archivo JSON que contiene las credenciales de acceso al proyecto de DialogFlow. Este archivo se debe descargar de la página de configuración del proyecto en DialogFlow y se debe guardar en un lugar seguro en el servidor. Esta variable se utiliza para cargar las credenciales en la aplicación de Node.js.

Es importante que todas estas variables de entorno se establezcan correctamente para que la aplicación de Node.js pueda acceder al proyecto de DialogFlow y generar respuestas precisas para las consultas de los usuarios en la aplicación de WhatsApp.
