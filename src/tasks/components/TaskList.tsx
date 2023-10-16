import { FunctionComponent } from 'react';
import { Task } from '../models';
import { Checkbox, FormControlLabel, List, ListItem } from '@mui/material';

type TaskListProps = {
    tasks: Task[];
};

export const TaskList: FunctionComponent<TaskListProps> = ({ tasks }) => {
    return (
        <List>
            {tasks.map((task: Task) => (
                <ListItem key={task.getID()}>
                    <FormControlLabel control={<Checkbox />} label={task.getTitle()} labelPlacement="end" />
                </ListItem>
            ))}
        </List>
    );
};
