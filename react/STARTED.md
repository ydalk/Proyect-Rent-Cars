# Inicializar el proyecto

Crear archivo de configuración base del app

> Realizar solo Cuando se clona el proyecto por primera vez

```
touch src/config/config.json
```

Promover cambios del API-MOCK al archovo de config base

> Ejecutar cada vez que se modifica el archivo de mock.json

```
cp src/config/local.json src/config/config.json
```


> Ejecutar estos comandos para tener instalado font awesome ( lo utilizamos para iconos)

```
npm i --save @fortawesome/fontawesome-svg-core
npm install --save @fortawesome/free-solid-svg-icons
npm install --save @fortawesome/react-fontawesome

```


> Ejecutar este comando para instalar la librería de react select

```
npm i --save react-select
```

> Ejecutar este comando para instala la libreria del carrusel 

```
npm install react-material-ui-carousel --save
```

>Compilar el proyecto modo dev

```
npm start
```