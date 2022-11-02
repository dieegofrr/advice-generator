import { MutableRefObject, useRef } from 'react';
import { useAdvice } from '@/hooks/useAdvice';
import * as Styled from './style';

export const Card = () => {
  const contentRef = useRef() as MutableRefObject<HTMLObjectElement>;

  const {
    isLoading,
    getAdvice,
    slip: { advice, id },
  } = useAdvice();

  const getAdviceAndFocusIt = () => {
    getAdvice();
    contentRef.current.focus();
  };

  return (
    <Styled.Wrapper>
      <Styled.Title aria-label={`advice number ${id}`} tabIndex={0}>
        advice #{isLoading ? '00' : id}
      </Styled.Title>
      <Styled.Content tabIndex={0} ref={contentRef}>
        {isLoading ? 'wait a sec...' : advice}
      </Styled.Content>
      <Styled.Divider
        aria-hidden
        src="/imgs/pattern-divider.svg"
        alt="pattern divider"
      />
      <Styled.Button
        aria-label="click to a new advice"
        tabIndex={0}
        onClick={getAdviceAndFocusIt}
        disabled={isLoading}
      >
        <Styled.Dice src="/imgs/icon-dice.svg" alt="dice" aria-hidden />
      </Styled.Button>
    </Styled.Wrapper>
  );
};
