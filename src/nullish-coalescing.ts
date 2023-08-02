/**
 * Nullish Coalescing
 *
 * Where the "||" operator checks if the first value is truthy,
 * the "??" operator checks if the first value is defined.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing
 * @see https://javascript.info/nullish-coalescing-operator
 */
function NullishCoalescingDemo() {
  // This will work pretty similar to the logical OR ("||") operator and isn't too useful
  const username = null;
  const defaultName = 'Guest';
  const resultName = username ?? defaultName;
  console.log('Nullish coalescing, name: ' + resultName); // Output: "Guest" (since username is null)

  // Here, however, you'll see a big difference in how nullish coalescing and OR operators differ
  const hasJoined = false;
  const defaultValue = true;
  const resultJoinOr = hasJoined || defaultValue;
  const resultJoinCoalesced = hasJoined ?? defaultValue;
  console.log(
    'Nullish coalescing, has joined ("||" operator): ' + resultJoinOr
  ); // Output: true (incorrect; the "false" value is deemed falsy and gets discarded)
  console.log(
    'Nullish coalescing, has joined (coalesced): ' + resultJoinCoalesced
  ); // Output: false (correct; TODO)
}
NullishCoalescingDemo();
