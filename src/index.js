// @flow

type Foo = {
  bar: string,
};

const foo: Foo = {
  bar: 3.0, // this should cause a flow error
};
