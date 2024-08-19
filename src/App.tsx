import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { LoadingFallback } from './components/LoadingFallback';
import LayoutsWithNavbar from './layouts/LayoutsWithNavbar';
import AppRoutes from './routes/AppRoutes';

const theme = createTheme({
  palette: {
    primary: {
      main: '#312E81',
    },
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <Suspense fallback={<LoadingFallback />}>
      <BrowserRouter>
        <div className="bg-mainBlue">
          <LayoutsWithNavbar>
            <AppRoutes />
          </LayoutsWithNavbar>
        </div>
      </BrowserRouter>
    </Suspense>
  </ThemeProvider>
);

export default App;
