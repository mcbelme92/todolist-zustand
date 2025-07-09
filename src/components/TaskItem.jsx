import { useCallback } from "react";
import { useTaskStore } from "../store";

export default function TaskItem({ task }) {
  const toggleTask = useTaskStore((state) => state.toggleTask);

  // Memoriza la función, no se recrea en cada render:
  const handleToggle = useCallback(() => {
    toggleTask(task.id);
  }, [toggleTask, task.id]);

  return (
    <ul>
      <li
        onClick={handleToggle}
        style={{ textDecoration: task.completed ? "line-through" : "none" }}
      >
        {task.text}
      </li>
    </ul>
  );
}
