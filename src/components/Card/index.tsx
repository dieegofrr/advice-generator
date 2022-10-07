import useAdvice from '@/hooks/useAdvice';
import { CardContainer } from './style';

const Card = () => {
  const { advice, id } = useAdvice();

  return (
    <CardContainer>
      <span>advice #{id}</span>
      <p>{advice}</p>
    </CardContainer>
  );
};

export default Card;
