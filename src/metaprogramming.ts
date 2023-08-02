/**
 * Less magical than it sounds. Wikipedia writes:
 *
 * > "Metaprogramming is a programming technique in which computer programs have the ability to treat other programs as their data.
 * This means that a program can be designed to read, generate, analyze, or transform other programs, and even modify itself while running."
 *
 * Both reflection and proxies are somewhat related, in that they utilize essentially the same mannerisms and APIs.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Meta_programming
 * @see https://www.freecodecamp.org/news/what-is-metaprogramming-in-javascript-in-english-please/
 * @see https://isamatov.com/metaprogramming-in-javascript/
 */

const data = {
  age: 37,
  firstName: 'Same',
  lastName: 'Person',
  something: 123
};

/**
 * Reflection in modern JS is in many ways an elaboration of already-existing ways of achieving the same thing.
 *
 * With the Reflect API it becomes simpler to do them, though, and a lot less convoluted.
 */
function reflection(obj: Record<string, any>) {
  const key = 'something';
  Reflect.deleteProperty(obj, key);
  const hasKey = Reflect.has(obj, key);
  console.log('Has key?', hasKey);
  console.log(obj);
}

/**
 * Instead of directly interacting with an object, use the proxy which will intercept calls with "traps".
 */
function proxy(obj: Record<string, any>) {
  const handler = {
    // Get is a "trap"
    get(target: any, property: string) {
      return property in target
        ? `Property is: "${target[property]}"`
        : `Property does not exist: "${property}"`;
    }
  };

  const proxy = new Proxy(obj, handler);

  console.log(proxy['age']);
  console.log(proxy['asdf']);
}

reflection(data);
proxy(data);
