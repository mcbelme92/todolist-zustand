
import { useFocus } from '../hooks/useFocus';
import { useTaskStore } from '../stores/store';

export default function TaskInput() {
  const inputRef = useFocus();
  const addTask = useTaskStore((state) => state.addTask);
  const handleAdd = () => {
    const text = inputRef.current.value;
    if (text) {
      addTask({ id: Date.now(), text, completed: false });
      inputRef.current.value = '';
      inputRef.current.focus();
    }
  };

  

  return (
    <div>
      <input ref={inputRef} placeholder="Nueva tarea..." />
      <button onClick={handleAdd}>Agregar</button>
      
    </div>
  );
}
