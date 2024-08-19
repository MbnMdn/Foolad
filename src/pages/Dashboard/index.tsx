import React, { useEffect, useState } from 'react';

import api from '../../scripts/api';
import DashboardSelectSection from './components/DashboardSelectSection';
import PictureSection from './components/PictureSection';
import TemperatureSection from './components/TemperatureSection';

const Index: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [dataRecordOn, setDataRecordOn] = useState<boolean>(true);
  const [pictureTypeOn, setPictureTypeOn] = useState<boolean>(true);
  const [pollingOn, setPollingOn] = useState<boolean>(false);

  const fetchData = async () => {
    try {
      const response = await api.get('/get_latest_slab/', {
        params: {},
      });

      setData(response?.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchSystemState = async () => {
    try {
      const systemState = await api.get('/system_state', {
        params: {},
      });

      setDataRecordOn(systemState?.data?.state);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchSystemState().then(() => setLoading(false));
    fetchData();

    let interval: NodeJS.Timeout | null = null;

    if (pollingOn) {
      interval = setInterval(() => {
        fetchData();
        console.log('calling api');
      }, 5000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [pollingOn]);

  if (loading) return <div>Loading...</div>;

  if (!loading)
    return (
      <div className="flex flex-col gap-5">
        <DashboardSelectSection
          pictureTypeOn={pictureTypeOn}
          setPictureTypeOn={setPictureTypeOn}
          pollingOn={pollingOn}
          setPollingOn={setPollingOn}
        />
        <PictureSection
          dataRecordOn={dataRecordOn}
          pictureTypeOn={pictureTypeOn}
          pollingOn={pollingOn}
          response={data}
        />
        <TemperatureSection response={data} />
      </div>
    );
};
export default Index;
