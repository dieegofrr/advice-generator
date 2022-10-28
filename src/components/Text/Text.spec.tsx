import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Text } from './Text';

describe('Text component', () => {
  it('should be render', () => {
    render(<Text />);
  });
});
