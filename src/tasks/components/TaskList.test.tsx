import { render, screen } from '@testing-library/react';
import { TaskList } from './TaskList';

describe('test TaskList component', () => {
    it('should render component', () => {
        render(<TaskList tasks={['First task']} />);

        expect(screen.getByText('First task')).toBeInTheDocument();
    });
});
