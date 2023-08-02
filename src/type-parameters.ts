/**
 * Create a type from the parameters of a function.
 *
 * @see https://www.typescriptlang.org/docs/handbook/utility-types.html#parameterstype
 * @see https://fjolt.com/article/typescript-parameters-utility-type
 */

function makeDog(name: string, race: string) {
  return {
    name,
    race
  };
}

// This will contain the parameters from the `makeDog()` function
type DogParams = Parameters<typeof makeDog>;

const params: DogParams = ['Poppy', 'Husky']; // type DogParams = [name: string, race: string]
console.log(params);
