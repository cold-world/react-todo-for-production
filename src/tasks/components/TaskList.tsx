import { FunctionComponent } from 'react';

type TaskListProps = {
    tasks: string[];
};

export const TaskList: FunctionComponent<TaskListProps> = ({ tasks }) => {
    return (
        <ul>
            {tasks.map((task: string) => (
                <li key={task}>{task}</li>
            ))}
        </ul>
    );
};
