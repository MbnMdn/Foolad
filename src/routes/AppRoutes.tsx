import { Route, Routes } from 'react-router-dom';

import SlabDetails from '../components/Reports/SlabDetails';
import AI from '../pages/AI';
import Calibration from '../pages/Calibration';
import Index from '../pages/Dashboard';
import Export from '../pages/Export';
import PageNotFound from '../pages/PageNotFound';
import Pages from '../pages/Pages';
import Reports from '../pages/Reports';
import Settings from '../pages/Settings';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/reports" element={<Reports />} />
    <Route path="/reports/:slabNo" element={<SlabDetails />} />
    <Route path="/ai" element={<AI />} />
    <Route path="/calibration" element={<Calibration />} />
    <Route path="/export" element={<Export />} />
    <Route path="/settings" element={<Settings />} />
    <Route path="*" element={<PageNotFound />} />
  </Routes>
);

export default AppRoutes;
