import React from 'react';
import { render, getByTestId } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each'; // auto clean up after each test

import Display from '../components/Display';

it('should render', () => {
    render(<Display />);
});

it('should render 2 fields inside div', () => {
    const {getAllByTestId} = render(<Display />);
    const fields = [...getAllByTestId('balls'), ...getAllByTestId('strikes')];
    expect(fields.length).toBe(2);
});

it('should display count of balls and strikes', () => {
    // dummy props
    const testBalls = 0;
    const testStrikes = 2;
    // expected to render on the page
    const expectedFields = [`Balls: ${testBalls}`, `Strikes: ${testStrikes}`];

    const {getAllByTestId} = render(<Display balls={testBalls} strikes={testStrikes}/>);
    // get actual rendered fields
    const fields = [...getAllByTestId('balls'), ...getAllByTestId('strikes')];
    // create an array with rendered text
    const fieldsTexts = fields.map(f => f.textContent);
    // compare expected and actual results 
    expect(expectedFields).toEqual(fieldsTexts);
});