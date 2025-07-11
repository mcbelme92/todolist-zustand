import { useCallback } from "react";
import { useTaskStore } from "../stores/store";

export default function TaskItem({ task }) {
  let displayText = "";
  if (typeof task.text === "string" && task.text.length > 0) {
    displayText = task.text.length > 170 ? task.text.substring(0, 1000) + "..." : task.text;
  }
  const toggleTask = useTaskStore((state) => state.toggleTask);

  // Memoriza la función, no se recrea en cada render:
  const handleToggle = useCallback(() => {
    toggleTask(task.id);
  }, [toggleTask, task.id]);

  return (
    <ul>
  <li>
    <button
      onClick={handleToggle}
      style={{
        textDecoration: task.completed ? "line-through" : "none",
        cursor: "pointer",
        background: "none",
        border: "none",
        padding: 0,
        font: "inherit",
      }}
    >
      {displayText}
    </button>
  </li>
</ul>
  );
}
