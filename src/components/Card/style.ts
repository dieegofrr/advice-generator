import styled, { css, keyframes } from 'styled-components';

export const Wrapper = styled.article`
  background-color: ${({ theme: { darkGrayishBlue } }) => darkGrayishBlue};
  min-height: 33.2rem;
  width: min(100%, 54rem);
  border-radius: 1.6rem;
  padding: 5.2rem 4.8rem 0 4.8rem;
  text-align: center;
  position: relative;
`;

const focus = css`
  &:focus-visible {
    border: 1px solid ${({ theme: { lightCyan } }) => lightCyan};
    border-radius: 0.8rem;
  }
`;

export const Title = styled.h1`
  color: ${({ theme: { neonGreen } }) => neonGreen};
  font-style: normal;
  font-weight: 800;
  font-size: 1.4rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  margin-bottom: 3.8rem;
  outline: none;

  ${focus};
`;

export const Content = styled.p`
  color: ${({ theme: { lightCyan } }) => lightCyan};
  font-style: normal;
  font-weight: 800;
  font-size: clamp(2.8rem, 5vw + 0.1rem, 2.4rem);
  text-align: center;
  margin-bottom: calc(4rem + 1.6rem + 7.2rem);
  outline: none;

  ${focus}

  &::before,
  &::after {
    content: '"';
  }
`;

export const Divider = styled.img`
  object-fit: contain;
  position: absolute;
  height: 1.6rem;
  bottom: 7.2rem;
  left: 50%;
  transform: translateX(-50%);
  /* margin-bottom: 7.2rem; */
`;

export const Dice = styled.img`
  width: 2.4rem;
  height: 2.4rem;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Button = styled.button`
  background-color: ${({ theme: { neonGreen } }) => neonGreen};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6.4rem;
  height: 6.4rem;
  border-radius: 50%;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
  outline: none;

  :disabled {
    background-color: ${({ theme: { lightCyan } }) => lightCyan};
    cursor: not-allowed;

    ${Dice} {
      animation: ${rotate} 0.5s linear infinite;
    }
  }

  &:hover:not(:disabled),
  &:focus-visible:not(:disabled) {
    filter: drop-shadow(0px 0px 12px ${({ theme: { neonGreen } }) => neonGreen})
      brightness(1.1);
  }
`;
