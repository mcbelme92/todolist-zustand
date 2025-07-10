import Stats from "../components/Stats";
import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";

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
