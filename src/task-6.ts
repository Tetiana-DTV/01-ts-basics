function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

const n = getFirstElement<number>([1, 2, 3]);
const s = getFirstElement<string>(["a", "b", "c"]);
const b = getFirstElement<boolean>([true, false, true]);

console.log(n);  // 1
console.log(s);  // "a"
console.log(b); // true