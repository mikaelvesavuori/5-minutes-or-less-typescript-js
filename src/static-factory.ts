/**
 * This is less TS and more general object-oriented programming.
 *
 * A way of creating a "nicer" factory function is to make the creation/factory
 * function static. This of course has certain side effects as always with static
 * methods, but if there is no clear drawback in your use case, then this
 * might be a way of making factories _in_ classes nicer to use.
 */
class Thing {
  thingName: string;

  constructor() {
    this.thingName = 'Original';
  }
}

class StaticThing {
  thingName: string;

  constructor(thingName: string) {
    this.thingName = thingName;
  }

  static create() {
    return new StaticThing('StaticThing');
  }
}

const thing = new Thing();
const staticThing = StaticThing.create();

console.log(thing);
console.log(staticThing);
