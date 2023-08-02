/**
 * Create a type from another, making all properties optional.
 *
 * @see https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype
 */

type LivingBeing<> = {
  name: string;
  habitat: string;
  age: number;
};

// Make all properties partial
type Person = Partial<LivingBeing>;

const person: Person = {
  age: 7
};

console.log(person);
