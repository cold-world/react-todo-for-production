import { render, screen } from '@testing-library/react';
import { App } from './App';

test('test App root component', function () {
    render(<App />);
    expect(screen.getByText(/Hello!/)).toBeInTheDocument();
});
