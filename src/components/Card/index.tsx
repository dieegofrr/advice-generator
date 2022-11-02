import useAdvice from '@/hooks/useAdvice';
import * as Styled from './style';

export const Card = () => {
  const { advice, getAdvice } = useAdvice();
  const { id, advice: text } = advice;
  const adviceLabelID = `advice number ${id}`;

  return (
    <Styled.Wrapper>
      <Styled.Title>advice #{id}</Styled.Title>
      <Styled.Content>{text}</Styled.Content>
      <Styled.Image />
      <Styled.Button>
        <Styled.Image src="/imgs/icon-dice.svg" alt="dice" aria-hidden />
      </Styled.Button>
    </Styled.Wrapper>
  );
};
