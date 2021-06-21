import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

afterEach(cleanup)

describe('About component', () => {
    test('renders', () => {
        render(<About />);
    });
    test('matches napshot DOM node structure', () => {
        const { asFragment } = render(<About />)
        expect(asFragment()).toMatchSnapshot();
    })
})