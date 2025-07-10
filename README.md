# 🕷️ Infernal ToDo List

Un proyecto **minimalista** pero **bien estructurado**, hecho para practicar y demostrar:
- 🧩 Manejo de estado global con **Zustand** (alternativa simple a Redux).
- ⚡ Hooks avanzados: `useMemo`, `useCallback`, `useRef`.
- ✅ Buenas prácticas: optimización de renders, patrón de componentes y principios **SOLID** adaptados a React.

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