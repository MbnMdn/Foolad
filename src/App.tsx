import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LayoutsWithNavbar from './components/LayoutsWithNavbar';
import SlabDetails from './components/Reports/SlabDetails';
import AI from './pages/AI';
import Calibration from './pages/Calibration';
import Dashboard from './pages/Dashboard';
import Export from './pages/Export';
import PageNotFound from './pages/PageNotFound';
import Pages from './pages/Pages';
import Reports from './pages/Reports';
import Settings from './pages/Settings';

export default function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#312E81',
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<div className="container">Loading...</div>}>
          <BrowserRouter>
            <div className="bg-mainBlue">
              <Routes>
                <Route path="/" element={<LayoutsWithNavbar />}>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/pages" element={<Pages />} />
                  <Route path="/reports" element={<Reports />} />
                  <Route path="/reports/:slabNo" element={<SlabDetails />} />
                  <Route path="/ai" element={<AI />} />
                  <Route path="/calibration" element={<Calibration />} />
                  <Route path="/export" element={<Export />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="*" element={<PageNotFound />} />
                </Route>
              </Routes>
            </div>
          </BrowserRouter>
        </Suspense>
      </ThemeProvider>
    </>
  );
}
