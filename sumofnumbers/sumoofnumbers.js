// sumFor, sumWhile, sumRecursion, and sumTheSimpleWay
// eslint-disable-next-line no-unused-vars
function sumFor(list) {
  let total = 0;
  for (const nums of list) {
    total += nums;
  }
  return total;
}
// eslint-disable-next-line no-unused-vars
function sumWhile(list) {
  let total = 0;
  let i = 0;
  while (list[i] != null) {
    total += list[i];
    i++;
  }
  return total;
}
function sumRecursion(list) {
  if (list.length === 0) {
    return 0;
  }
  return list[0] + sumRecursion(list.slice(1, list.length));
}
function sumTheSimpleWay(list) {
  return _.reduce(list, function (memo, num) { return memo + num; }, 0);
}

const test = [1, 2, 3, 4];
console.log(`for loop: ${sumFor(test)}`);
console.log(`while loop: ${sumWhile(test)}`);
console.log(`recursion: ${sumRecursion(test)}`);
console.log(`underscore: ${sumTheSimpleWay(test)}`);
