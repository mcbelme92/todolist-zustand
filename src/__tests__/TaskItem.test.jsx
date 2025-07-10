import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import TaskItem from "../components/TaskItem";

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
});
