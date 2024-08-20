import CalibrationSelectSection from '../components/Calibration/CalibrationSelectSection';
import CroppedPictureSection from '../components/Export/CroppedPictureSection';
import ExportForm from '../components/Export/ExportForm';
import ExportSelectSection from '../components/Export/ExportSelectSection';
import RawPictureSection from '../components/Export/RawPictureSection';

export default function Calibration() {
  return (
    <div className="flex flex-col gap-5">
      <CalibrationSelectSection />
    </div>
  );
}
