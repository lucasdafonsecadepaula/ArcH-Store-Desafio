import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import { App } from './App';

describe('App', () => {
  it('renders hello world', () => {
    render(<App />);
    const linkElement = screen.getByText(/hello world/i);
    expect(linkElement).toBeInTheDocument();
  });
});
