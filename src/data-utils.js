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

  const carsHashMap = {};

  for (let french of france) {
    if (carsHashMap[french.car]) {
      carsHashMap[french.car]++;
    } else {
      carsHashMap[french.car] = 1;
    }
  }
  return carsHashMap;
}