
import { useMemo } from 'react';
import { useTaskStore } from '../stores/store';

export function useTaskStats() {
  const tasks = useTaskStore((state) => state.tasks);

  const completed = useMemo(
    () => tasks.filter((t) => t.completed).length,
    [tasks]
  );

  const pending = useMemo(
    () => tasks.filter((t) => !t.completed).length,
    [tasks]
  );

  return { completed, pending };
}
