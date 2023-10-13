import { TaskList } from './TaskList';
import { useTaskStore } from '../hooks/useTaskStore';
import { CreateTask } from './CreateTask';

export const Tasks = () => {
    const { data, createTask } = useTaskStore();
    return (
        <div>
            <CreateTask onSubmit={(newTaskTitle: string) => createTask(newTaskTitle)} />
            <TaskList tasks={data} />
        </div>
    );
};
