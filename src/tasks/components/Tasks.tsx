import { useState } from 'react';
import { CreateTask } from './CreateTask';

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
            <ul>
                {items.map((item: string) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    );
};