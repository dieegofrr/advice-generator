import styled from 'styled-components';

export const Wrapper = styled.article`
  background-color: ${({ theme: { darkGrayishBlue } }) => darkGrayishBlue};
  min-height: 33.2rem;
  width: min(100%, 54rem);
  border-radius: 1.6rem;
  padding: 5.2rem 4.8rem 0 4.8rem;
  text-align: center;
  position: relative;
`;

export const Title = styled.h1`
  color: ${({ theme: { neonGreen } }) => neonGreen};
  font-style: normal;
  font-weight: 800;
  font-size: 1.4rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  margin-bottom: 3.8rem;
`;

export const Content = styled.p`
  color: ${({ theme: { lightCyan } }) => lightCyan};
  font-style: normal;
  font-weight: 800;
  font-size: clamp(2.8rem, 5vw + 0.1rem, 2.4rem);
  text-align: center;
  margin-bottom: 4rem;
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

  &:hover {
    filter: drop-shadow(0px 0px 12px ${({ theme: { neonGreen } }) => neonGreen})
      brightness(1.1);
  }
`;

export const Divider = styled.img`
  width: 100%;
  object-fit: contain;
  height: 1.6rem;
  margin-bottom: 7.2rem;
`;

export const Dice = styled.img`
  width: 2.4rem;
  height: 2.4rem;
`;
