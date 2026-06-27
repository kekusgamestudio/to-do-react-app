# TO-DO List React App

Aplicación web de gestión de tareas desarrollada como POC. Permite crear, completar y eliminar tareas con persistencia local en el navegador.

## Funcionalidad

### Gestión de tareas
- **Agregar tareas** desde un formulario integrado en el panel principal.
- **Marcar como completada o pendiente** haciendo clic en la tarea o en su checkbox.
- **Eliminar tareas** de forma individual.
- **Validación de entrada**: no se pueden crear tareas con menos de 2 caracteres (el botón *Agregar* permanece deshabilitado hasta cumplir esa condición).

### Información por tarea
Cada tarea almacena y muestra:
- Descripción.
- Fecha y hora de **creación**.
- Fecha y hora de **finalización** (solo cuando está completada).

### Orden y resumen
- Las tareas se muestran ordenadas de forma **descendente por fecha de creación** (la más reciente arriba).
- El encabezado muestra contadores de tareas **totales**, **pendientes** y **completadas**.

### Persistencia
- Las tareas se guardan automáticamente en `localStorage` del navegador.
- Al recargar la página, el estado se restaura sin pérdida de datos.
- Las tareas guardadas con versiones anteriores de la app se migran automáticamente para incluir la fecha de creación; las tareas ya completadas sin `completedAt` conservan su estado pero no muestran fecha de finalización hasta volver a completarse.

## Stack tecnológico

| Área | Tecnología |
|------|------------|
| UI | React 18 |
| Lenguaje | TypeScript |
| Build tool | Vite 5 |
| Estilos | CSS Modules + design tokens propios |
| Tipografía | [Red Hat Display](https://fonts.google.com/specimen/Red+Hat+Display) (Google Fonts) |
| Estado | `useReducer` + custom hook (`useTodo`) |
| Persistencia | `localStorage` |
| Linting | ESLint + `@typescript-eslint` |

### Arquitectura

```
src/
├── hooks/           # useTodo, useForm
├── interfaces/      # Tipos Todo y Action
├── styles/          # Design tokens (paleta Kira)
├── todo-list/       # Componentes y reducer de la app
└── utils/           # Formateo de fechas y normalización de datos
```

El diseño visual sigue los criterios del backoffice **Kira** (`procer-backoffice-site`): gradiente de fondo, paneles con bordes redondeados, tipografía y tokens de color compartidos.

## Requisitos previos

- [Node.js](https://nodejs.org/) 18 o superior
- [Yarn](https://yarnpkg.com/) 1.x

## Cómo ejecutarlo

### 1. Instalar dependencias

```bash
yarn
```

### 2. Modo desarrollo

```bash
yarn dev
```

Vite levantará el servidor local (por defecto en `http://localhost:5173`). La URL exacta se muestra en la terminal.

### 3. Build de producción

```bash
yarn build
```

Compila TypeScript y genera los archivos estáticos en la carpeta `dist/`.

### 4. Vista previa del build

```bash
yarn preview
```

Sirve localmente el contenido de `dist/` para verificar el build de producción.

### 5. Lint

```bash
yarn lint
```

Ejecuta ESLint sobre los archivos `.ts` y `.tsx` del proyecto.

## Scripts disponibles

| Comando | Descripción |
|---------|-------------|
| `yarn dev` | Servidor de desarrollo con HMR |
| `yarn build` | Compilación para producción |
| `yarn preview` | Previsualización del build |
| `yarn lint` | Análisis estático con ESLint |
