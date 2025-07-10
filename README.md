# 🕷️ Infernal ToDo List

Un proyecto **minimalista** pero **bien estructurado**, hecho para practicar y demostrar:
- 🧩 Manejo de estado global con **Zustand** (alternativa simple a Redux).
- ⚡ Hooks avanzados: `useMemo`, `useCallback`, `useRef`.
- ✅ Buenas prácticas: optimización de renders y patrón de componentes.

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
---

## 🔑 **Conceptos clave**

| Hook | Cómo se usa |
|------|--------------|
| `useRef` | Referencia el `<input>` para autofoco y guardar valores sin rerender. |
| `useCallback` | Memoriza handlers para evitar renders innecesarios en hijos (teórico). |
| `useMemo` | Memoriza cálculos (stats de tareas completadas/pending). |
| Zustand | Define el store global (`tasks`, `addTask`, `toggleTask`). |

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
