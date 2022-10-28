import { Paragraph, Span } from './Text.styles';

interface TextProps {
  variant?: 'paragraph' | 'span';
  fontSize?: 'big' | 'small';
  children?: React.ReactNode;
  color?: string;
}

export const Text: React.FC<TextProps> = ({
  variant = 'span',
  fontSize = 'small',
  children = '...',
  color = 'white',
}) => (
  <>
    {variant === 'paragraph' && (
      <Paragraph fontSize={fontSize} color={color} data-testid="paragraph">
        {children}
      </Paragraph>
    )}
    {variant === 'span' && (
      <Span fontSize={fontSize} color={color} data-testid="span">
        {children}
      </Span>
    )}
  </>
);
