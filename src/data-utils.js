export function ageAndCountry(people) {
  const array = people.map(person => {
    return {
      location: person.location,
      age: person.age
    };
  });
  return array;
}

export function faveColor(people) {
  const colorHashMap = people.reduce((acc, curr) => {

    if (acc[curr.color]) {
      acc[curr.color]++;
    } else {
      acc[curr.color] = 1;
    }
    return acc;
  }, {});

  const colorsArray = Object.entries(colorHashMap);

  const newColorsArray = colorsArray.map(curr => (
    { x: curr[0], y: curr[1] }
  ));
  return newColorsArray;
}

export function favoriteColorByCountry(people) {

  
  const colorBreakdown = people.reduce((acc, curr) => {

    if (acc[curr.location]) {
      if (acc[curr.location][curr.color]) 
      {acc[curr.location][curr.color]++;
      } else {
        acc[curr.location][curr.color] = 1;
      }
    } else {
      acc[curr.location] = {};
      acc[curr.location][curr.color] = 1;
    }
    return acc;
  }, {});
  return colorBreakdown;
}
 
export function carsInCountry(people) {
  const country = people.filter(person => person.location === 'Indonesia');

  const carHashMap = country.reduce((acc, curr) => {

    if (acc[curr.car]) {
      acc[curr.car]++;
    } else {
      acc[curr.car] = 1;
    }
    return acc;
  }, {});

  const carsArray = Object.entries(carHashMap);

  const newCarsArray = carsArray.map(car => (
    { x: car[0], y: car[1] }
  ));
  return newCarsArray;
}

