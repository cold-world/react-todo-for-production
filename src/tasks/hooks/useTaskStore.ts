import { useState } from 'react';
import { Task } from '../models';

type TaskStore = {
    data: Task[];
    createTask: (taskTitle: string) => Promise<void>;
};

export const useTaskStore = (): TaskStore => {
    const [tasks, setTasks] = useState<Task[]>([]);

    return {
        data: tasks,
        createTask: (taskTitle: string) =>
            new Promise((resolve) => {
                setTasks([...tasks, new Task(taskTitle)]);
                resolve(undefined);
            }),
    };
};
