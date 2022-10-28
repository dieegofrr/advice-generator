import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Text } from './Text';

describe('Text component', () => {
  it('should be render a paragraph', () => {
    const { getByTestId } = render(<Text variant="paragraph" />);
    expect(getByTestId('paragraph')).toBeInTheDocument();
  });

  it('should be render a span', () => {
    const { getByTestId } = render(<Text variant="span" />);
    expect(getByTestId('span')).toBeInTheDocument();
  });
});
