export function colorBars(datum) {
  let returner;

  if (datum.x === 'Green') returner = 'green';
  if (datum.x === 'Pink') returner = 'pink';
  if (datum.x === 'Yellow') returner = 'yellow';
  if (datum.x === 'Puce') returner = '#CC8899';
  if (datum.x === 'Turquoise') returner = 'turquoise';
  if (datum.x === 'Violet') returner = 'violet';
  if (datum.x === 'Goldenrod') returner = 'goldenrod';
  if (datum.x === 'Blue') returner = 'blue';
  if (datum.x === 'Purple') returner = 'purple';
  if (datum.x === 'Khaki') returner = 'khaki';
  if (datum.x === 'Fuscia') returner = '#D9027D';
  if (datum.x === 'Aquamarine') returner = 'aquamarine';
  if (datum.x === 'Maroon') returner = 'maroon';
  if (datum.x === 'Mauv') returner = '#BB85AB';
  if (datum.x === 'Indigo') returner = 'indigo';
  if (datum.x === 'Orange') returner = 'orange';
  if (datum.x === 'Teal') returner = 'teal';
  if (datum.x === 'Crimson') returner = 'crimson';
  if (datum.x === 'Red') returner = 'red';

  return returner;
}