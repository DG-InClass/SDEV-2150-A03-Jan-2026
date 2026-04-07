import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Details from './Details';

test('displays resource details', () => {
  const resource = {
    title: 'Math Help Centre',
    category: 'Academic Support'
  };

  render(<Details resource={resource} />);

  expect(screen.getByText(resource.title)).toBeTruthy();
});

test('shows placeholder when no resource is selected', () => {
  render(<Details resource={null} />); // no resource prop

  expect(screen.getByText(/select a resource/i)).toBeTruthy();
});