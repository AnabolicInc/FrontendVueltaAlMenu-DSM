# Vuelta al menu en 365 platos - Desarrollo de soluciones moviles.
Creacion de una aplicacion movil, cuyo contexto es el delivery de comida.
## Tecnologias y patron arquitectonico
Se utilizan las siguientes tecnologias: de <a href ="https://reactnative.dev/">React Native</a> y <a href ="https://www.typescriptlang.org/">Typescript</a> para el frontend y <a href="https://expressjs.com/">ExpressJS</a>
como framework para el backend. 
### Patron arquitectonico
MVVM
### Dependencias que se esta utilizando para el frontend:
* react-native-async-storage/async-storage
* react-native-community/blur
* react-navigation/bottom-tabs
* react-navigation/material-top-tabs
* react-navigation/native
* eact-navigation/stack
* types/jest
* types/node
* types/react
* types/react-dom
* axios
* expo
* expo-font
* expo-image-picker
* expo-linear-gradient
* expo-status-bar
* mime
* react
* react-native
* react-native-dotenv
* react-native-flash-message
* react-native-gesture-handler
* react-native-modal
* react-native-pager-view
* react-native-paper
* react-native-reanimated
* react-native-safe-area-context
* react-native-screens
* react-native-tab-view
* react-native-vector-icons
* typescript
* yup
* babel/core (devDependency)
* types/react-native (devDependency)
* types/react-native-vector-icons (devDependency)


## Step by step


Para clonar el proyecto:
```bash
git clone https://github.com/AnabolicInc/FrontendVueltaAlMenu-DSM.git
```

Posterior a clonar el repo siempre, se debe tener en cuenta que se debe ejecutar el siguiento comando para instalar/actualizar los modulos:
```bash
npm install
```

Posterior a la instacion/actualuacion del node_modules, se tiene que verificar si se tiene el archivo .env, del caso contrario
se debe utilizar este comando para generarlo: 
```bash
copy .env.example .env
```

Dentro del archivo .env se debe verificar las siguientes variables: 
(Puerto 8080 por defecto)
```bash
LOCAL_HOST=http://YourCurrentIP:port/api/
GOOGLE_MAPS_API_KEY=YOUR GOOGLE MAPS API KEY
MERCADO_PAGO_API_KEY= YOUR MERCADO PAGO API KEY
MERCADO_PAGO_PUBLIC_KEY= YOUR MERCADO PAGO PUBLIC KEY
```

## Comandos expo

Para iniciar sesion con expo: 
```bash
npx expo login -h
```

Iniciar el development server para trabajar en el proyecto:
```bash
npx expo start
```

