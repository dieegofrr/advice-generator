import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Text } from './Text';

describe('Text component', () => {
  it('should be render a span if no variant prop is provided', () => {
    const { getByTestId } = render(<Text />);
    expect(getByTestId('span')).toBeInTheDocument();
  });

  it('should be render a paragraph', () => {
    const { getByTestId } = render(<Text variant="paragraph" />);
    expect(getByTestId('paragraph')).toBeInTheDocument();
  });

  it('should be render a span', () => {
    const { getByTestId } = render(<Text variant="span" />);
    expect(getByTestId('span')).toBeInTheDocument();
  });

  it('should be render ... text if no content prop is provided', () => {
    const { getByText } = render(<Text />);
    expect(getByText('...')).toBeInTheDocument();
  });

  it('should be render the text provided by children prop', () => {
    const { getByText } = render(<Text>Any text</Text>);
    expect(getByText(/any text/i)).toBeInTheDocument();
  });

  it('should render text with white color', () => {
    const { getByTestId } = render(<Text />);

    expect(getByTestId('span')).toHaveStyle('color: white');
  });
});
