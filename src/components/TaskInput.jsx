import { useRef } from 'react';
import { useTaskStore } from '../store';

export default function TaskInput() {
  const inputRef = useRef(null);
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
