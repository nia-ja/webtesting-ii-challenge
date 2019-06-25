import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each'; // auto clean up after each test

import Dashboard from './Dashboard';

it('should render', () => {
    render(<Dashboard />);
});

//provide a button that the person in charge can press every time there is a `strike`, `ball`, `foul` or `hit`.
// changes recorded on this component should update the information shown by the `Display` component.