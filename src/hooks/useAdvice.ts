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
  const [isLoading, setIsLoading] = useState(false);

  const getAdvice = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get<DataProps>(url);
      setSlip(data.slip);
    } catch {
      setSlip({ id: 0, advice: 'error, try again later' });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return { isLoading, slip, getAdvice };
};
