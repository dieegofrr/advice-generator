import useAdvice from '@/hooks/useAdvice';
import Button from '../Button';
import { CardContainer } from './style';

const Card = () => {
  const { advice, getAdvice } = useAdvice();

  return (
    <CardContainer>
      <span>advice #{advice.id}</span>
      <p>{advice.advice}</p>
      <Button onClick={getAdvice} />
    </CardContainer>
  );
};

export default Card;
