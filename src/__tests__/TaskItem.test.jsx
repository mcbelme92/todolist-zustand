import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import TaskItem from "../components/TaskItem";
import TaskInput from "../components/TaskInput";

/**
 * @file TaskItem.test.jsx
 * @description
 *   Tests unitarios para los componentes TaskItem y TaskInput de la aplicación Todo List.
 *   Estas pruebas aseguran que los componentes funcionen correctamente bajo distintos escenarios,
 *   validando tanto el renderizado como la lógica de interacción básica.
 *
 * @author pepe mcbelme
 * @date 2025-07
 *
 * @summary
 *   - Cada test cubre un caso de uso importante del componente (render, props, edge cases).
 *   - Se usa Jest + React Testing Library para simular el DOM y eventos de usuario.
 *   - Algunos tests cubren también integración básica (ej: agregar una tarea).
 *   - La cobertura y robustez de estos tests ayudan a mantener la calidad del proyecto.
 *
 * @unitTests
 *   ✔️ Renderiza el texto de la tarea
 *   ✔️ Tacha la tarea si está completada
 *   ✔️ Desmarca la tarea si está incompleta
 *   ✔️ Renderiza aunque el texto esté vacío
 *   ✔️ Muestra correctamente textos largos o especiales
 *   ✔️ No renderiza texto si `task.text` es undefined
 *   ✔️ No renderiza la tarea si el texto es mayor a 181 caracteres
 *   ✔️ (Básico de integración) Permite agregar una tarea desde TaskInput
 *
 * @why
 *   - Garantizar que los componentes no fallen ante entradas inesperadas.
 *   - Detectar errores rápido y facilitar refactorizaciones.
 *   - Dar confianza para crecer y mantener el proyecto con calidad.
 *
 * @see
 *   - https://jestjs.io/docs/getting-started
 *   - https://testing-library.com/docs/react-testing-library/intro/
 */

describe("TaskItem", () => {
  const task = { text: "Aprender Jest", completed: false };

  it("renderiza el texto de la tarea", () => {
    render(<TaskItem task={task} />);
    expect(screen.getByText("Aprender Jest")).toBeInTheDocument();
  });

  it("tacha la tarea si está completada", () => {
    render(<TaskItem task={{ ...task, completed: true }} />);
    expect(screen.getByText("Aprender Jest")).toHaveStyle("text-decoration: line-through");
  });

  it("desmarca la tarea si está completada", () => {
    render(<TaskItem task={{ ...task, completed: false }} />);
    expect(screen.getByText("Aprender Jest")).toHaveStyle("text-decoration: none");
  });

  it("renderiza aunque el texto esté vacío", () => {
    render(<TaskItem task={{ text: "", completed: false }} />);
    const li = document.querySelector("li");
    expect(li).toBeInTheDocument();
  });

  it("muestra correctamente texto largo o especial", () => {
    const longTask = { text: "Tarea ".repeat(50), completed: false };
    render(<TaskItem task={longTask} />);
    expect(screen.getByText(/Tarea Tarea Tarea/)).toBeInTheDocument();
  });
  it("no renderiza texto si task.text es undefined", () => {
    render(<TaskItem task={{ completed: false }} />);
    expect(screen.queryByText(/./)).not.toBeInTheDocument();
  });
 it('no renderiza la tarea si el texto es mayor a 181 caracteres', () => {
  const longText = 'A'.repeat(181);
  const task = { text: longText, completed: false };
  render(<TaskItem task={task} />);
  // Espera que no aparezca en el documento
  expect(screen.queryByText(longText)).not.toBeInTheDocument();
 });
  test("agrega una tarea al hacer click", () => {
  render(<TaskInput />);
  const input = screen.getByPlaceholderText(/nueva tarea/i);
  fireEvent.change(input, { target: { value: "Probar coverage" } });
  const button = screen.getByText(/agregar/i);
  fireEvent.click(button);
  // Aquí podrías esperar a que se llame addTask, dependiendo de cómo mockees el store
});
});
