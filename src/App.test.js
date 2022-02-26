/* eslint-disable no-unused-vars */
import { render, screen } from '@testing-library/react';
import App from './App';
import data from './data';
import './App.css';
import { VictoryBar, 
  VictoryChart, 
  VictoryAxis, 
  VictoryLabel, 
  VictoryPortal, 
  VictoryPie,
  VictoryLine } from 'victory';
import MaterialTable from 'material-table';
import { carsInCountry, faveColor, agesOverTime } from './data-utils';
import { colorBars } from './functions';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/My Charts/i);
  expect(linkElement).toBeInTheDocument();
});
