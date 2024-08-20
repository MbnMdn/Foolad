import React from 'react';

import ToggleSwitch from '../ui/ToggleSwitch';
import useSystemState from '../../hooks/useSystemState';

interface DashboardSelectSectionProps {
  pictureTypeOn: boolean;
  setPictureTypeOn: React.Dispatch<React.SetStateAction<boolean>>;
  pollingOn: boolean;
  setPollingOn: React.Dispatch<React.SetStateAction<boolean>>;
}

const DashboardSelectSection: React.FC<DashboardSelectSectionProps> = ({
  pictureTypeOn,
  setPictureTypeOn,
  pollingOn,
  setPollingOn,
}) => {
  const { dataRecordOn, updateDataRecordState, loading } = useSystemState();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-3 rounded-xl border-2 border-mainBlue p-5 lg:flex-row lg:gap-10">
      <ToggleSwitch
        label="Data Record"
        checked={dataRecordOn}
        onChange={() => updateDataRecordState(!dataRecordOn)}
        leftLabel="Off"
        rightLabel="On"
      />

      <ToggleSwitch
        label="Picture Type"
        checked={pictureTypeOn}
        onChange={() => setPictureTypeOn(!pictureTypeOn)}
        leftLabel="Raw"
        rightLabel="Processed"
      />

      <div className="flex items-center gap-2">
        <ToggleSwitch
          label="Polling"
          checked={pollingOn}
          onChange={() => setPollingOn(!pollingOn)}
          leftLabel="Off"
          rightLabel="On"
        />
        <div
          className={`h-6 w-6 rounded-full ${pollingOn ? 'bg-green-500' : 'bg-red-600'}`}
        />
      </div>
    </div>
  );
};

export default DashboardSelectSection;
