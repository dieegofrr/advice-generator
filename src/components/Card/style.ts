import styled from 'styled-components';

export const CardContainer = styled.section`
  background-color: ${({ theme }) => theme.darkGrayishBlue};
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 33.75rem;
  min-height: 20.75rem;
  border-radius: 0.875rem;
  padding: 3.25rem 3rem;

  section.data {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.25rem;
    padding-bottom: 2.25rem;

    span {
      color: ${({ theme }) => theme.neonGreen};
      font-size: 1.25rem;
      text-transform: uppercase;
      letter-spacing: 2px;
    }

    p {
      color: ${({ theme }) => theme.lightCyan};
      font-size: clamp(
        1rem,
        2.5vw + 0.1rem,
        ${({ theme }) => theme.defaultFontSize}
      );
      font-weight: ${({ theme }) => theme.defaultFontWeight};
      text-align: center;

      &::before {
        content: '“';
      }

      &::after {
        content: '”';
      }
    }
  }

  img.divider {
    width: 100%;
  }
`;
