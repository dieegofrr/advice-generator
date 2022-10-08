import { useEffect, useState } from 'react';

interface AdviceProps {
  id: number;
  advice: string;
}

interface DataProps {
  slip: AdviceProps;
}

const useAdvice = () => {
  const url = 'https://api.adviceslip.com/advice';
  const [advice, setAdvice] = useState<AdviceProps>({ id: 0, advice: '' });

  const getAdvice = async () => {
    try {
      const response = await fetch(url);
      const data: DataProps = await response.json();
      setAdvice(data.slip);
    } catch {
      setAdvice({ id: 0, advice: 'error, try again later' });
    }
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return { advice, getAdvice };
};

export default useAdvice;
