import styled from 'styled-components';

interface Props {
  fontSize: 'big' | 'small';
  color: string;
}

export const Paragraph = styled.p<Props>`
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => (fontSize === 'small' ? '1rem' : '4rem')};
`;

export const Span = styled.span<Props>`
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => (fontSize === 'small' ? '1rem' : '4rem')};
`;
