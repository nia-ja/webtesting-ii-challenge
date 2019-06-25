import React from 'react';
import { render, getNodeText, fireEvent } from "@testing-library/react";
import '@testing-library/react/cleanup-after-each'; // auto clean up after each test
// import 'jest-dom/extend-expect';

import App from '../App';

it('renders without crashing', () => {
  render(<App />);
});

it('displays wrapper divs for display and dashboard', () => {
  const { getAllByTestId } = render(<App />);
  const wrapperDivs = getAllByTestId('wrapper'); 
  expect(wrapperDivs.length).toBe(2);
});

it("updates the display when the button is clicked", () => {
  const { getByText, getByTestId } = render(<App />);
  const strikeButton = getByText("Strike");
  const ballButton = getByText("Ball");
  const strikes = getByTestId("strikes");
  const balls = getByTestId("balls");

  const initialStrikes = Number(getNodeText(strikes));
  const initialBalls = Number(getNodeText(balls));

  fireEvent.click(strikeButton);
  fireEvent.click(ballButton);

  expect(Number(getNodeText(strikes))).toBe(initialStrikes + 1);
  expect(Number(getNodeText(balls))).toBe(initialBalls + 1);
});

it("does not increase ball or strike counter beyond limit", () => {
  const { getByText, getByTestId } = render(<App />);
  const strikeButton = getByText("Strike");
  const ballButton = getByText("Ball");
  const strikes = getByTestId("strikes");
  const balls = getByTestId("balls");

  for(let i = 0; i < 5; i++) {
    fireEvent.click(strikeButton);
    fireEvent.click(ballButton);
  }

  const strikesCount = getNodeText(strikes);
  const ballsCount = getNodeText(balls);


  expect(strikesCount).toBe('Strikes: 1');
  expect(ballsCount).toBe('Balls: 0');
});