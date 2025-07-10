import { useTaskStats } from '../hooks/useTaskStats';

export default function Stats() {
  const { completed, pending } = useTaskStats();

  return (
    <div>
      <p>✅ Completadas: {completed}</p>
      <p>⌛ Pendientes: {pending}</p>
    </div>
  );
}
