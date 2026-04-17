// ~/src/components/Details.test.jsx

import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Details from './Details';

test('displays resource details', () => {
    const resource = {
        title: 'Math Help Centre',
        category: 'Academic Support'
    };
    render(<Details resource={resource} />);

    const actual = screen.getByText('Math Help Centre');

    expect(actual).toBeInTheDocument();
});

test('shows placeholder when no resource is selected', () => {
    render(<Details resource={null} />);
    const actual = screen.getByText(/select a resource/i);
    expect(actual).toBeInTheDocument();
});


