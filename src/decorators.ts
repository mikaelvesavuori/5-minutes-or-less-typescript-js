/**
 * Decorators allow adding extra functionality almost invisibly.
 *
 * TypeScript has received official support in version 5.0, finally closing
 * the book on many years of inofficial solutions to this problem.
 *
 * They might not be immediately intuitive but add something programmers
 * coming from other languages sometimes miss.
 *
 * The example below uses basic `any` types. Note that typing decorators can
 * be complicated if that's something you decide to use.
 *
 * @see https://www.typescriptlang.org/docs/handbook/decorators.html
 * @see https://devblogs.microsoft.com/typescript/announcing-typescript-5-0/#decorators
 */
class DecoratorDemo {
  @log
  public do() {
    console.log('BLIP');
  }
}

const d = new DecoratorDemo();
d.do();

function log(target: any, context: any) {
  const methodName = context.name || 'Unknown';

  function replacementMethod(this: any, ...args: any[]) {
    console.log(`Before "${methodName}"`);
    const result = target.call(this, ...args);
    console.log(`After "${methodName}"`);
    return result;
  }

  return replacementMethod;
}
