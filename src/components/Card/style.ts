import styled from 'styled-components';

export const CardContainer = styled.section`
  background-color: ${({ theme }) => theme.darkGrayishBlue};
  width: 100%;
  max-width: 33.75rem;
  min-height: 20.75rem;
  border-radius: 0.875rem;
  padding: 3.25rem 3rem;

  span {
    color: ${({ theme }) => theme.neonGreen};
    text-transform: uppercase;
  }

  p {
    color: ${({ theme }) => theme.lightCyan};
    font-size: ${({ theme }) => theme.defaultFontSize};
    font-weight: ${({ theme }) => theme.defaultFontWeight};
  }
`;
