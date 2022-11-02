import styled from 'styled-components';

export const Wrapper = styled.section``;

export const Title = styled.h1``;

export const Content = styled.p``;

export const Button = styled.button`
  background-color: ${({ theme: { neonGreen } }) => neonGreen};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  position: absolute;
  top: 100%;
  transform: translateY(-50%);

  &:hover {
    filter: drop-shadow(0px 0px 12px ${({ theme: { neonGreen } }) => neonGreen})
      brightness(1.1);
  }
`;

export const Image = styled.img``;
