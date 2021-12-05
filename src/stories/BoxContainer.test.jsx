import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Default } from './BoxContainer.stories';

test('Box Container is rendered', () => {
    const { container } = render(<Default>Random Text</Default>);
    expect(container.firstChild).toHaveClass('box-container');
    expect(container).not.toBeNull();
    expect(container).toBeInTheDocument();
    expect(container.firstChild).toHaveTextContent('Random Text');
});
