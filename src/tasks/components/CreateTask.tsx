import { Button, Input } from '@mui/material';
import { useState, ChangeEvent, FunctionComponent, FormEvent } from 'react';

type CreateTaskProps = {
    onSubmit: (task: string) => Promise<void>;
};

export const CreateTask: FunctionComponent<CreateTaskProps> = ({ onSubmit }) => {
    const [taskTitle, setTaskTitle] = useState<string>('');

    return (
        <form onSubmit={(e: FormEvent<HTMLFormElement>) => e.preventDefault()}>
            <Input
                value={taskTitle}
                onChange={(e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
                    e.preventDefault();
                    setTaskTitle(e.target.value);
                }}
            />
            <Button
                onClick={async () => {
                    if (taskTitle !== '') {
                        try {
                            await onSubmit(taskTitle);
                            setTaskTitle('');
                        } catch (e) {
                            console.log(e);
                        }
                    }
                }}
            >
                Create
            </Button>
        </form>
    );
};
