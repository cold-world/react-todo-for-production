import { FunctionComponent } from 'react';
import { Task } from '../models';

type TaskListProps = {
    tasks: Task[];
};

export const TaskList: FunctionComponent<TaskListProps> = ({ tasks }) => {
    return (
        <ul>
            {tasks.map((task: Task) => (
                <li key={task.getID()}>{task.getTitle()}</li>
            ))}
        </ul>
    );
};
