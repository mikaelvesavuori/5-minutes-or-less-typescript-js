/**
 * Create a new type from another, picking all required properties.
 *
 * @see https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys
 */

type Dog = {
  name: string;
  race: 'Husky' | 'Chihuahua';
  age: number;
};

// Pick out only 'name' as required property
type Person = Pick<Dog, 'name' | 'age'>;

const person: Person = {
  name: 'Sam',
  age: 25
};

console.log(person);
