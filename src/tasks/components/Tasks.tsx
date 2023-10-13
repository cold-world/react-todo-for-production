import { useState } from 'react';
import { CreateTask } from './CreateTask';
import { TaskList } from './TaskList';

export const Tasks = () => {
    const [items, setItems] = useState<string[]>([]);
    return (
        <div>
            <CreateTask
                onSubmit={(newItem: string) =>
                    new Promise((resolve) => {
                        setItems([...items, newItem]);
                        resolve(undefined);
                    })
                }
            />
            <TaskList tasks={items} />
        </div>
    );
};
