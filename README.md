# 🕷️ Infernal ToDo List

Un proyecto **minimalista** pero **bien estructurado**, hecho para practicar y demostrar:
- 🧩 Manejo de estado global con **Zustand** (alternativa simple a Redux).
- ⚡ Hooks avanzados: `useMemo`, `useCallback`, `useRef`.
- ✅ Buenas prácticas: optimización de renders, patrón de componentes y principios **SOLID** adaptados a React.
- 🧪 Testing automatizado con Jest y React Testing Library. Las pruebas principales para el componente TaskItem se encuentran en /src/__tests__/TaskItem.test.jsx.
 

---

## 🚀 **¿Qué es esto?**

Una **ToDo List** que permite:
- Agregar tareas.
- Marcar tareas como completadas.
- Mostrar estadísticas de tareas completadas/pending.
- Mantener el input enfocado automáticamente (usando `useRef`).

Todo se hace con un **store global** definido en Zustand.  
No se usa Context API ni Redux → **código directo y limpio**.

---

## ⚙️ **Tecnologías**

- React (Vite o Create React App) v19.1.0
- Zustand v5.0.6
- Hooks (`useState`, `useMemo`, `useCallback`, `useRef`)
- Estilos básicos (puedes extender con Tailwind o Material UI)

---

## 🗂️ **Estructura**
```
/src
├── App.jsx
├── stores/
│ ├── store.jsx
├── components/
│ ├── TaskInput.jsx
│ ├── TaskList.jsx
│ ├── TaskItem.jsx
│ ├── Stats.jsx
├── views/
│ ├── TaskView.jsx
├── hooks
│ ├── useTaskStats.js
│ ├── useFocus.js

```
**¿Para qué sirve cada carpeta?**
- `components/`: UI “chiquita”, widgets reutilizables.
- `views/`: Vistas/páginas completas, usan componentes y hooks.
- `stores/`: Aquí viven los stores Zustand.
- `hooks/`: Hooks personalizados para lógica reutilizable.
---

## 🔑 **Conceptos clave**

| Hook/Zustand | ¿Para qué lo usas? |
|--------------|--------------------|
| `useRef`     | Autofoco en `<input>`, guardar valores sin rerender. |
| `useCallback`| Memorizar handlers, evitar renders extra. |
| `useMemo`    | Memorizar cálculos, ejemplo: stats de tareas. |
| `Zustand`    | Store global: tareas, acciones (add, toggle, remove). |
| `Custom Hooks` | Lógica y reutilización, ejemplo: estadísticas. |

---

## 📌 **¿Por qué existe?**

Este proyecto no es solo una lista de tareas:
- Sirve como **plantilla base** para apps que necesitan **estado global sin Redux**.
- Demuestra que entiendes **flujo de datos, optimización y hooks avanzados**.
- Es fácil de escalar → puedes agregar filtros, persistencia o API real.

---

## 🧙‍♂️ **Cómo correrlo**

```bash
# 1. Instala dependencias
npm install

# 2. Corre en dev
npm run dev

---

```

## 🦾 Principios SOLID en Infernal ToDo List

Aunque SOLID fue pensado para programación orientada a objetos, **también puede aplicarse al desarrollo con React y hooks**. Así los abordamos en este proyecto:

- **S — Single Responsibility Principle (Responsabilidad única):**  
  Cada componente tiene una única función:  
  `TaskInput` maneja el input, `TaskList` muestra la lista, `Stats` calcula y muestra estadísticas, `TaskView` solo compone vistas.

- **O — Open/Closed Principle (Abierto/cerrado):**  
  La app es **fácil de extender** (agregar más componentes, hooks o lógica), sin modificar el código base.  
  Por ejemplo, podrías añadir filtros o persistencia sin romper nada existente.

- **L — Liskov Substitution Principle:**  
  Puedes reemplazar componentes por otros que cumplan la misma función/salida, y el sistema sigue funcionando igual.  
  Ejemplo: podrías intercambiar `TaskList` por otra lista con diferente UI sin afectar el resto.

- **I — Interface Segregation Principle:**  
  Los componentes solo dependen de lo que usan.  
  No hay props innecesarios ni lógica de más; cada componente recibe solo lo necesario o consume el store directo.

- **D — Dependency Inversion Principle:**  
  Los componentes dependen de abstracciones (hooks y el store de Zustand), no de implementaciones directas.  
  Si cambias el store global por otro sistema, los componentes principales apenas necesitan cambios.

---

Este enfoque asegura que el código sea **modular, reutilizable, fácil de escalar y mantener**.  
Si quieres llevar estos principios al siguiente nivel, puedes usar TypeScript, testing o dividir en módulos/features aún más pequeños.

---

---

## 🚦 Manifiesto de calidad: Simplicidad, Mantenibilidad y Escalabilidad

Antes de implementar cualquier funcionalidad, me hago estas preguntas para asegurar la calidad y el futuro del proyecto:

1. **¿Es simple?**
    - ¿Lo entiende cualquiera al leer el código?
    - ¿Evita pasos innecesarios o complejidad oculta?

2. **¿Es mantenible?**
    - ¿Será fácil de modificar, corregir o mejorar en el futuro?
    - ¿Está la lógica separada y clara?

3. **¿Es escalable?**
    - ¿Podría crecer el proyecto, duplicar funcionalidades, o agregar nuevas sin romper todo?
    - ¿Soporta la extensión sin volverse incontrolable?

> **Compromiso:**  
> Siempre argumento mis decisiones de arquitectura y estructura en función de estos tres principios. Cada sección del proyecto puede revisarse en esta sección para justificar si cumple o no cumple cada uno.

---

## 📊 Ejemplo aplicado a este proyecto

| Principio      | ¿Se cumple? | Justificación breve                                     |
|----------------|-------------|--------------------------------------------------------|
| Simplicidad    | ✅ Sí        | El código es directo, cada componente tiene un rol claro. |
| Mantenibilidad | ✅ Sí        | Está dividido en componentes, hooks y stores modulares.  |
| Escalabilidad  | ✅ Sí        | Se pueden agregar nuevas features o stores fácilmente.   |

---

## JEST: Resumen de pruebas y decisiones en TaskItem

Cobertura de casos importantes:
Se agregaron tests para verificar que:

Se renderiza el texto de la tarea correctamente.

Se tacha visualmente la tarea si está completada.

Muestra el estado "no tachado" cuando no está completada.

No truena si el texto está vacío o es undefined.

Soporta textos largos/speciales.

No renderiza tareas con texto mayor a X caracteres.

Motivo para quitar soporte de teclado (onKeyDown):
Se eliminó la lógica de interacción por teclado (onKeyDown) porque en la práctica el usuario solo interactúa con mouse/clic, y el componente está pensado únicamente para ese flujo.
Mantener ese código no aportaba valor ni se usaba en los tests, por lo que se optó por simplificar el componente y mejorar su mantenimiento.

Cobertura de pruebas:
Gracias a estos cambios, la cobertura del componente aumentó a más del 80%.

## JEST: Instalacion y dependencias

En resumen:
Todas las decisiones de simplificación y refactor en TaskItem se tomaron basadas en los resultados de los tests y en el análisis de cómo realmente se utiliza el componente en la aplicación.

Resumen de dependencias y configuración para testing en React
1. Jest
Paquete: jest

¿Para qué?
Es el framework de testing que ejecuta tus tests, muestra resultados, coverage y errores.

2. Babel y presets
Paquetes:

@babel/core

@babel/preset-env

@babel/preset-react

¿Para qué?
Babel transforma tu código moderno (JSX, ES6+) a JavaScript que Jest puede entender.

preset-env: para sintaxis moderna de JS.

preset-react: para transformar JSX a JS normal.

"runtime": "automatic" (en el preset react): para no tener que importar React manualmente en cada archivo.

3. jest-environment-jsdom
Paquete: jest-environment-jsdom

¿Para qué?
Permite a Jest simular un navegador, con objetos como window y document para poder probar componentes React en un entorno similar al real.

4. React Testing Library
Paquete: @testing-library/react

¿Para qué?
Facilita la prueba de componentes React simulando cómo los usaría un usuario real (busca por texto, etiquetas, etc.).

5. @testing-library/jest-dom
Paquete: @testing-library/jest-dom

¿Para qué?
Agrega matchers extra a Jest para hacer asserts más intuitivos en el DOM (por ejemplo, .toBeInTheDocument(), .toHaveStyle()).

6. Archivos de configuración
.babelrc:
Define cómo Babel debe transformar tu código.
Ejemplo:

json
Copiar
Editar
{
  "presets": [
    ["@babel/preset-react", { "runtime": "automatic" }],
    "@babel/preset-env"
  ]
}
jest.config.js o package.json "jest":
Configura Jest para usar el entorno jsdom:

js
Copiar
Editar
module.exports = {
  testEnvironment: 'jsdom'
}
O en package.json:

json
Copiar
Editar
"jest": {
  "testEnvironment": "jsdom"
}
¿Por qué se instala todo esto?
Para que Jest pueda entender tu código React y ejecutar los tests igual que en un navegador real.

Para poder escribir tests en JSX, con sintaxis moderna, y tener coverage y asserts completos.