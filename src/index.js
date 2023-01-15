module.exports = function reverse (n) {
  let str = (Math.abs(n)).toString();
  let arr =[];

  for (let i=str.length-1; i>=0; i--) {
    arr.push(str[i]);
  }
  return Number(arr.join(''));
}
