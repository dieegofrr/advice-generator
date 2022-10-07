import { useEffect, useState } from 'react';

interface AdviceProps {
  id: number;
  advice: string;
}

interface DataProps {
  slip: AdviceProps;
}

const useAdvice = () => {
  const [advice, setAdvice] = useState<AdviceProps>({ id: 0, advice: '' });

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('https://api.adviceslip.com/advice');
        const data: DataProps = await response.json();
        setAdvice(data.slip);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return advice;
};

export default useAdvice;
