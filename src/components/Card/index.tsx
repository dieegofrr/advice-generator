import { useAdvice } from '@/hooks/useAdvice';
import * as Styled from './style';

export const Card = () => {
  const { adviceContent, adviceId, getAdvice } = useAdvice();

  return (
    <Styled.Wrapper>
      <Styled.Title aria-label={`advice number ${adviceId}`}>
        advice #{adviceId || '00'}
      </Styled.Title>
      <Styled.Content>{adviceContent}</Styled.Content>
      <Styled.Divider
        src="/imgs/pattern-divider.svg"
        alt="pattern divider"
        aria-hidden
      />
      <Styled.Button onClick={getAdvice} aria-label="click to a new advice">
        <Styled.Dice src="/imgs/icon-dice.svg" alt="dice" aria-hidden />
      </Styled.Button>
    </Styled.Wrapper>
  );
};
