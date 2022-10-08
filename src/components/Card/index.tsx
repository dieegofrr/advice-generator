import useAdvice from '@/hooks/useAdvice';
import Button from '../Button';
import { CardContainer } from './style';

const Card = () => {
  const { advice, getAdvice } = useAdvice();
  const { id, advice: text } = advice;

  return (
    <CardContainer>
      <section className="data">
        <span tabIndex={0} aria-label="advice number {id}">
          {id ? `advice #${id}` : 'advice #000'}
        </span>
        <p tabIndex={0}>{text ? text : 'wait a sec'}</p>
      </section>
      <img
        src="/imgs/pattern-divider-mobile.svg"
        alt="divider"
        className="divider"
      />
      <Button onClick={getAdvice} />
    </CardContainer>
  );
};

export default Card;
