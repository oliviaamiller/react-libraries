/* eslint-disable no-unused-vars */
import { render, screen } from '@testing-library/react';
import App from './App';
import data from './data';
import { VictoryBar, 
  VictoryChart, 
  VictoryAxis, 
  VictoryLabel, 
  VictoryPortal, 
  VictoryPie,
  VictoryLine } from 'victory';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Color Popularity/i);
  expect(linkElement).toBeInTheDocument();
});
