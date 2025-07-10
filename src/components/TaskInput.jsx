import { useState } from 'react';
import { useFocus } from '../hooks/useFocus';
import { useTaskStore } from '../stores/store';

export default function TaskInput() {
  const inputRef = useFocus();
  const addTask = useTaskStore((state) => state.addTask);
  const [inputLength, setInputLength] = useState(0);
  const MAX_LENGTH = 180;

  const handleAdd = () => {
    const text = inputRef.current.value;
    if (text) {
      addTask({ id: Date.now(), text, completed: false });
      inputRef.current.value = '';
      setInputLength(0);
      inputRef.current.focus();
    }
  };
  
  const handleInputChange = (e) => {
    setInputLength(e.target.value.length);
  };

  return (
    <div>
      <input
        ref={inputRef}
        placeholder="Nueva tarea..."
        maxLength={MAX_LENGTH}
        onChange={handleInputChange}
      />
      <button onClick={handleAdd}>Agregar</button>
      <div style={{ fontSize: '0.85em', color: inputLength === MAX_LENGTH ? 'tomato' : '#888' }}>
        {inputLength}/{MAX_LENGTH} caracteres (máximo)
      </div>
    </div>
  );
}
