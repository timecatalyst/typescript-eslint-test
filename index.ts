// This should NOT throw a 'no-unused-vars' error.
interface Foo {
  foo: string;
}

function MyDecorator() {
  // eslint-disable-next-line no-console
  return (target, _) => console.log(`MyDecorator(${target as string}): called`);
}

export default class FooClass {
  foo = 'foo';

  @MyDecorator()
  async doSomething(): Promise<Foo> {
    return Promise.resolve({ foo: this.foo });
  }
}
