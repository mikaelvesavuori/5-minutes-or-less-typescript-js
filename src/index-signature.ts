/**
 * Index signatures allow adding dynamic properties to objects.
 *
 * You will also encounter problems sometime when looping over objects
 * that have unclear keys. The solution then may be to add index signatures
 * to better understand what is allowed.
 *
 * @see https://www.typescriptlang.org/docs/handbook/2/objects.html#index-signatures
 * @see https://dmitripavlutin.com/typescript-index-signatures/
 */

const plainObject = {
  a: 1,
  b: '2'
};

type MyInterface = {
  // Adding an index signature for a string key with a string value; note that "key" is never used, it's just internal
  [key: string]: string;
};

const objectWithIndex: MyInterface = {
  c: '2'
};

console.log(plainObject);
console.log(objectWithIndex);
console.log(objectWithIndex.c);
