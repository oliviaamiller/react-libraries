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
  const franceArray = people.filter(person => person.location === 'France');
  const carsInFranceArray = franceArray.map(france => {
    return {
      car: france.car
    };
  });
  return carsInFranceArray;
}