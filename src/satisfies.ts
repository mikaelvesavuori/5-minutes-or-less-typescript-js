// "The new satisfies operator lets us validate that the type of an expression matches some type, without changing the resulting type of that expression."
// See: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-9.html#the-satisfies-operator
type Something = {
  asdf: number
};

const something = {
  asdf: 1,
  qwerty: '1' // Won't work
} satisfies Something;
