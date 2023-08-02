/**
 * A Map is a collection of key-value pairs, where each key can be any data type (including objects and primitive values).
 * It maintains the insertion order of its elements, meaning the elements are stored in the order they were added.
 * A key can only appear once in the Map, making it suitable for managing associations between unique keys and corresponding values.
 * Map allows easy retrieval of values based on their associated keys using the get() method.
 * Commonly used methods include set(), get(), has(), and delete() for manipulating the elements.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
 * @see https://javascript.info/map-set
 */
function MapDemo() {
  const myMap = new Map();
  myMap.set('name', 'Mikael');
  myMap.set('age', 37);
  console.log('Map demo: Has key "name"? ' + myMap.has('name')); // Output: "Map demo: Has key "name"? true"
  console.log('Map demo: Name is ' + myMap.get('name')); // Output: "Map demo: Name is Mikael"
  myMap.delete('name');
}
MapDemo();

/**
 * WeakMap is similar to Map but has some significant differences.
 * The keys in a WeakMap must be objects; primitive values are not allowed as keys.
 * Unlike Map, WeakMap's keys are weakly held, which means they do not prevent the key objects from being garbage collected if there are no other references to them. This makes WeakMap useful for scenarios where memory management is essential.
 * WeakMap does not have the full range of methods found in Map. It only supports get(), set(), has(), and delete().
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap
 * @see https://javascript.info/weakmap-weakset
 */
function WeakMapDemo() {
  const weakMap = new WeakMap();
  let obj: Record<string, any> | null = { name: 'Mikael' };
  weakMap.set(obj, 'some value');
  console.log('WeakMap demo: ' + weakMap.get(obj));
  obj = null; // Can now be garbage collected
}
WeakMapDemo();

/**
 * A Set is a collection of unique values, meaning it stores only distinct values, and duplicates are automatically removed.
 * It does not have any keys or values; each element in the Set is unique on its own.
 * Sets maintain the insertion order of elements, similar to Map.
 * Commonly used methods include add(), has(), and delete() for managing the elements.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @see https://javascript.info/map-set
 */
function SetDemo() {
  const set = new Set();
  set.add(1);
  set.add(2);
  set.add(1); // Duplicate value --> gets ignored
  console.log('Set demo: ' + new Array(...set).join(' ')); // Output: "Set demo: 1 2"

  // This demonstrates a nifty technique to get only unique values as a sorted array
  const bunchOfNumbers = [
    1, 2, 4, 5, 1, 5, 1, 2, 5, 6, 2, 3, 6, 2, 2, 7, 8, 9, 4, 4, 2, 3, 4
  ];
  const filteredArray = new Array(...new Set(bunchOfNumbers)).sort();
  console.log('Set demo: Unique filtered values are ', filteredArray); // Output: "Set demo: Unique filtered values are ",  [1, 2, 3, 4, 5, 6, 7, 8, 9]
}
SetDemo();

/**
 * WeakSet is similar to Set but with a few key differences.
 * Like WeakMap, WeakSet only accepts objects as elements and not primitive values.
 * WeakSet's elements are weakly held, which means they don't prevent the objects from being garbage collected if there are no other references to them.
 * WeakSet does not support many methods; it only allows add(), has(), and delete().
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet
 * @see https://javascript.info/weakmap-weakset
 */
function WeakSetDemo() {
  const weakSet = new WeakSet();
  let obj: Record<string, any> | null = { name: 'Mikael' };
  weakSet.add(obj);
  console.log('WeakSet demo: ' + weakSet.has(obj)); // Output: "WeakSet demo: true"
  obj = null; // Can now be garbage collected
}
WeakSetDemo();
