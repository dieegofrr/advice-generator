import styled from 'styled-components';

export const ConsiderationsContainer = styled.section`
  p {
    color: ${({ theme }) => theme.lightCyan};
    font-size: 1rem;

    a {
      color: ${({ theme }) => theme.neonGreen};
    }
  }
`;
