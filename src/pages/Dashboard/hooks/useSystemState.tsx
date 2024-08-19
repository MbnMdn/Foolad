import { useState, useEffect } from 'react';
import api from '../../../scripts/api';

const useSystemState = () => {
  const [dataRecordOn, setDataRecordOn] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchInitialState = async () => {
      try {
        const req = await api.get('/system_state/', { params: {} });
        setDataRecordOn(req?.data?.state);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchInitialState();
  }, []);

  const updateDataRecordState = async (newState: boolean) => {
    try {
      const req = await api.post('/system_state/', { params: {} });
      setDataRecordOn(req?.data?.state);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  return { dataRecordOn, updateDataRecordState, loading };
};

export default useSystemState;
