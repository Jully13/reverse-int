module.exports = function reverse (n) {
  let str = (Math.abs(n)).toString();
  let arr =[];

  let j = 0;
  for (let i=str.length-1; i>=0; i--) {
    arr[j] = str[i];
    j++;
  }
  return Number(arr.join(''));
}
