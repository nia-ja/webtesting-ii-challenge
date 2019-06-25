import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each'; // auto clean up after each test
import "jest-dom/extend-expect";

import Dashboard from './Dashboard';

it('should render', () => {
    render(<Dashboard />);
});

//provide a button that the person in charge can press every time there is a `strike`, `ball`, `foul` or `hit`.

it("renders the buttons (strike, foul, ball, hit)", () => {
    const { getAllByTestId } = render(<Dashboard />);
    const buttons = getAllByTestId("dashboard-button");
    const requiredButtons = ["Strike", "Ball", "Foul", "Hit"];
    const buttonsTexts = buttons.map(b => b.textContent);
    expect(requiredButtons).toEqual(buttonsTexts);
  });