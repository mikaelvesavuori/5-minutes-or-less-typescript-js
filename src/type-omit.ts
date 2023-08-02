/**
 * Omit allows removing/omitting properties from a type, creating a new one.
 *
 * @see https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys
 */

type FormalizedBeing = {
  name: string;
  latinName: string;
};

// Omit 'latinName' properties from whichever number of properties that LivingBeing has
type Person = {
  [Property in keyof Omit<FormalizedBeing, 'latinName'>]: string;
};

const person: Person = {
  name: 'Sam'
};

console.log(person);
