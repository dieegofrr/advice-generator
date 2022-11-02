import { useEffect, useState } from 'react';
import axios from 'axios';

interface SlipProps {
  id: number;
  advice: string;
}

interface DataProps {
  slip: SlipProps;
}

export const useAdvice = () => {
  const url = 'https://api.adviceslip.com/advice';
  const [slip, setSlip] = useState<SlipProps>({ id: 0, advice: '' });

  const getAdvice = async () => {
    try {
      const { data } = await axios.get<DataProps>(url);
      setSlip(data.slip);
    } catch {
      setSlip({ id: 0, advice: 'error, try again later' });
    }
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return { adviceId: slip.id, adviceContent: slip.advice, getAdvice };
};
