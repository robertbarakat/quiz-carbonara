import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Default } from './Header.stories';

test('Header is rendered', () => {
    const { container } = render(<Default title='Title' subtitle='Subtitle' />);
    expect(container.firstChild).toHaveClass('header-container');
    expect(container).not.toBeNull();
    expect(container).toBeInTheDocument();
    expect(container.firstChild).toHaveTextContent('Title');
    expect(container.firstChild).toHaveTextContent('Subtitle');
});
