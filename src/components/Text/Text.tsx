import { Paragraph, Span } from './Text.styles';

interface TextProps {
  variant?: 'paragraph' | 'span';
  fontSize?: 'big' | 'small';
  content?: string;
  color?: string;
}

export const Text: React.FC<TextProps> = ({
  variant = 'span',
  fontSize = 'small',
  content = '...',
  color = 'white',
}) => (
  <>
    {variant === 'paragraph' && (
      <Paragraph fontSize={fontSize} color={color} data-testid="paragraph">
        {content}
      </Paragraph>
    )}
    {variant === 'span' && (
      <Span fontSize={fontSize} color={color} data-testid="span">
        {content}
      </Span>
    )}
  </>
);
