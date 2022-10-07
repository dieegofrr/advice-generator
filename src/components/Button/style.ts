import styled from 'styled-components';

export const ButtonContainer = styled.button`
  background-color: ${({ theme }) => theme.neonGreen};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
`;
