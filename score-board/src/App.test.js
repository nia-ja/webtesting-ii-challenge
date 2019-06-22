import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each'; // auto clean up after each test
// import 'jest-dom/extend-expect';

import App from './App';

it('renders without crashing', () => {
  render(<App />);
});