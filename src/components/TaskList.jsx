import { useTaskStore } from '../store';
import TaskItem from './TaskItem';

export default function TaskList() {
  const tasks = useTaskStore((state) => state.tasks);
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
}
