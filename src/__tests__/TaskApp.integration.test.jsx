/**
 * @file TaskApp.integration.test.jsx
 * @description
 * Prueba de integración para el flujo completo de creación de tareas.
 * Se asegura de que el usuario pueda crear una tarea y que esta
 * aparezca correctamente en la lista después de agregarla.
 *
 * @author Pepe Mcbelme
 * @date 2025-07-11
 */

import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App"; // Componente raíz que orquesta TaskInput y TaskList

/**
 * @test Flujo completo de tareas
 * Este bloque describe un escenario típico de usuario final,
 * desde que escribe una tarea hasta que la ve reflejada en la UI.
 */
describe("Flujo completo de tareas", () => {

  /**
   * @testcase Crea una tarea y la muestra en la lista
   * 1. Renderiza el componente principal de la app.
   * 2. Simula que el usuario escribe una tarea nueva.
   * 3. Simula que el usuario da click en el botón "Agregar".
   * 4. Verifica que la tarea aparece en la lista de tareas.
   *
   * Esta prueba valida la integración entre el input, el botón
   * y la lista, y que la lógica de agregar tareas funciona.
   */
  it("crea una tarea y la muestra en la lista", () => {
    // Renderiza la app completa (incluye TaskInput y TaskList)
    render(<App />);

    // Busca el input de nueva tarea por el placeholder
    const input = screen.getByPlaceholderText(/nueva tarea/i);

    // Busca el botón "Agregar" por el texto visible
    const boton = screen.getByText(/agregar/i);

    // Simula que el usuario escribe "Tarea integración"
    fireEvent.change(input, { target: { value: "Tarea integración" } });

    // Simula que el usuario da click en el botón "Agregar"
    fireEvent.click(boton);

    // Verifica que la tarea aparece en la lista de la UI
    expect(screen.getByText("Tarea integración")).toBeInTheDocument();
  });

});
