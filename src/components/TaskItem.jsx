import { useCallback } from "react";
import { useTaskStore } from "../stores/store";

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
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") handleToggle();
        }}
        type="button"
        style={{ textDecoration: task.completed ? "line-through" : "none", cursor: "pointer" }}
      >
        {task.text}
      </li>
    </ul>
  );
}
