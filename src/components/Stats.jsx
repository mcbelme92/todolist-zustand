import { useMemo } from 'react';
import { useTaskStore } from '../store';

export default function Stats() {
  const tasks = useTaskStore((state) => state.tasks);

  const completed = useMemo(
    () => tasks.filter((task) => task.completed).length,
    [tasks]
  );

  const pending = useMemo(
    () => tasks.filter((task) => !task.completed).length,
    [tasks]
  );

  return (
    <div>
      <p>✅ Completadas: {completed}</p>
      <p>⌛ Pendientes: {pending}</p>
    </div>
  );
}
