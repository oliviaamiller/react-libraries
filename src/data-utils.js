export function ageAndCountry(people) {
  const array = people.map(person => {
    return {
      location: person.location,
      age: person.age
    };
  });
  return array;
}

export function mNamesLocation(people) {
  const mNames = people.filter(person => person.first_name.startsWith('N'));

  return mNames;

}
 
export function carsInFrance(people) {
  const france = people.filter(person => person.location === 'Indonesia');

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