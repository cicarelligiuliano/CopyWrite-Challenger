# CopyWrite Challenger

En este proyecto tenemos dos aplicaciones, dentro de API nos encontramos con el backend desarrollado en NodeJs, y en la carpeta "client" se encuentra el frontend desarrollado en React.

## Como usarlo?

### API

Suponiendo que ya cuenta con NodeJs y npm instalado, debemos abrir una terminal y ejecutar los siguientes comandos:

```
cd api
npm install
npm start
```

Con esto el backend se inicia y se puede acceder a traves de la url: http://localhost:3001/

Para probar las respuestas del backend, podemos ingresar a la url: http://localhost:3001/ y utilizar la query text={strng} para probar la funcionalidad de la API. Por ejemplo para probar la reversividad de la palabra "hola" deberiamos ingresar a http://localhost:3001/?text=hola

Deberia recibir una respuesta como la siguiente:

```
{
"text": "aloh",
"original": "hola",
"palindrome": false
}
```

Esta respuesta incluye la palabra original con el flag "original", la palabra invertida con el flag "text" y el flag "palindrome" que indica si la palabra es o no palindroma.

Para correr los test de la API, podemos ejecutar el comando:

    npm test

### Client

Para probar la aplicacion, debemos abrir una terminal y ejecutar los siguientes comandos:

```
cd client
npm install
npm start
```

Esto deberia levantar una pagina en el navegador, en la url: http://localhost:3000/ y podemos probar la funcionalidad de la aplicacion.
