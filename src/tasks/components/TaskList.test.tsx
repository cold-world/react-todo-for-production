import { render, screen } from '@testing-library/react';
import { TaskList } from './TaskList';
import { Task } from '../models';

describe('test TaskList component', () => {
    it('should render component', () => {
        render(<TaskList tasks={[new Task('First task')]} />);

        expect(screen.getByText('First task')).toBeInTheDocument();
    });
});
