import { Button, TextField } from '@mui/material';
import { useState, ChangeEvent, FunctionComponent, FormEvent } from 'react';

type CreateTaskProps = {
    onSubmit: (task: string) => Promise<void>;
};

export const CreateTask: FunctionComponent<CreateTaskProps> = ({ onSubmit }) => {
    const [taskTitle, setTaskTitle] = useState<string>('');

    return (
        <form onSubmit={(e: FormEvent<HTMLFormElement>) => e.preventDefault()}>
            <TextField
                size="small"
                value={taskTitle}
                onChange={(e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
                    e.preventDefault();
                    setTaskTitle(e.target.value);
                }}
                sx={{
                    width: {
                        xs: '100%',
                        sm: '70%',
                    },
                }}
            />
            <Button
                variant="contained"
                size="large"
                sx={{
                    width: {
                        xs: '100%',
                        sm: 'unset',
                    },
                    marginTop: {
                        xs: '12px',
                        sm: 'unset',
                    },
                }}
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
