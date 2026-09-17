import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import RoboticHero from './index';
import React from 'react';

test('renders RoboticHero component', () => {
  render(<RoboticHero />);
  const headingElement = screen.getByRole('heading', { name: /AI-Powered Robotic Engineering Notebook/i });
  expect(headingElement).toBeDefined();
});
