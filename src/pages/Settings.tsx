import LivePictureSection from '../components/Settings/LivePictureSection';
import SettingsTable from '../components/Settings/SettingsTable';

export default function Settings() {
  return (
    <div className="flex flex-col gap-5 lg:flex-row lg:gap-24">
      <SettingsTable />
      <LivePictureSection />
    </div>
  );
}
