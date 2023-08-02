/**
 * Exclude allows removing one or more values from a type.
 *
 * @see https://www.typescriptlang.org/docs/handbook/utility-types.html#excludeuniontype-excludedmembers
 */

type Fruit = 'melon' | 'grapes' | 'apple' | 'orange' | 'durian' | 'noni';

type GoodFruit = Exclude<Fruit, 'durian' | 'noni'>;

const fruits: GoodFruit[] = ['melon', 'grapes', 'apple', 'orange'];

console.log('Good fruits are', fruits);
