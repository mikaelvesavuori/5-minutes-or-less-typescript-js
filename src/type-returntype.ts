/**
 * Create a type from the return type of a function.
 *
 * @see https://www.typescriptlang.org/docs/handbook/utility-types.html#returntypetype
 */

function makeDog(name: string) {
  return {
    name,
    race: 'Alsatian',
    city: 'Someville'
  };
}

// This will contain the return type from the `makeDog()` function
type DogReturnType = ReturnType<typeof makeDog>;

const params: DogReturnType = {
  name: 'Pooch',
  race: 'Golden Retriever',
  city: 'Cityville'
};
console.log(params);
