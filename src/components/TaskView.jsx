import Stats from "./Stats";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

const TaskView = () => {
  return (
    <>
      <TaskInput />
      <TaskList />
      <Stats />
    </>
  );
};

export default TaskView;
