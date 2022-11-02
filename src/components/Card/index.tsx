import useAdvice from '@/hooks/useAdvice';
import * as Styled from './style';

export const Card = () => {
  const { advice, getAdvice } = useAdvice();
  const { id, advice: text } = advice;

  return (
    <Styled.Wrapper>
      <Styled.Title aria-label={`advice number ${id}`}>
        advice #{id || '00'}
      </Styled.Title>
      <Styled.Content>{text}</Styled.Content>
      <Styled.Divider src="/imgs/pattern-divider.svg" alt="pattern divider" />
      <Styled.Button>
        <Styled.Dice src="/imgs/icon-dice.svg" alt="dice" aria-hidden />
      </Styled.Button>
    </Styled.Wrapper>
  );
};
