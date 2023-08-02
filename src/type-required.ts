/**
 * Inverse of Partial; make everything required.
 *
 * @see https://www.typescriptlang.org/docs/handbook/utility-types.html#requiredtype
 */

type Dog = {
  name?: string;
  race?: string;
};

const dog: Required<Dog> = {
  name: 'Sam',
  race: 'Alsatian'
};

console.log(dog);
