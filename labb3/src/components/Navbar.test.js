/**
 * @jest-environment jsdom
 */

import React from 'react';
import {expect, test} from '@jest/globals';
import Navbar from './Navbar';
import { render, screen, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom'
// import '@jest-environment'

test('renders Start button text', () => {
  const { getByText } = render(<Navbar />);
  const StartText = getByText('Start');
  expect(StartText).toBeInTheDocument();
});

test('renders Jokes button text', () => {
    const { getByText } = render(<Navbar />);
    const StartText = getByText('Jokes');
    expect(StartText).toBeInTheDocument();
  });

  test('renders Dogs button text', () => {
    const { getByText } = render(<Navbar />);
    const StartText = getByText('Dogs');
    expect(StartText).toBeInTheDocument();
  });

  test('renders Contacts button text', () => {
    const { getByText } = render(<Navbar />);
    const StartText = getByText('Contacts');
    expect(StartText).toBeInTheDocument();
  });

  test('renders Back button text', () => {
    const { getByText } = render(<Navbar />);
    const StartText = getByText('Back');
    expect(StartText).toBeInTheDocument();
  });