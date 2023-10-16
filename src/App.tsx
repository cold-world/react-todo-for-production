import { Container, CssBaseline } from '@mui/material';
import { Tasks } from './tasks';

export const App = () => {
    return (
        <Container maxWidth="lg" sx={{ marginTop: '16px' }}>
            <CssBaseline />
            <Tasks />
        </Container>
    );
};
