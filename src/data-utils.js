export function ageAndPet(people) {
  const array = people.map(person => {
    return {
      pet: person.pet,
      age: person.age
    };
  });
  return array;
}