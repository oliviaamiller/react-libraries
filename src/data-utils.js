export function ageAndCountry(people) {
  const array = people.map(person => {
    return {
      location: person.location,
      age: person.age
    };
  });
  return array;
}

export function carsInFrance(people) {
  const france = people.filter(person => person.location === 'France');

  const carHashMap = france.reduce((acc, french) => {

    if (acc[french.car]) {
      acc[french.car]++;
    } else {
      acc[french.car] = 1;
    }
    return acc;
  }, {});

  const carsArray = Object.entries(carHashMap);

  const newCarsArray = carsArray.map(car => (
    { x: car[0], y: car[1] }
  ));
  return newCarsArray;
}