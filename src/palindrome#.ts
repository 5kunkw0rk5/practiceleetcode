// Given an integer x, return true if x is a palindrome, and false otherwise.
function isPalindrome(x: number): boolean {
  const numberString = x.toString();
  const reversedNumber = numberString.split("").reverse().join("");
  if (numberString === reversedNumber) {
    return true;
  }
  return false;
}
const test1 = 1441;
console.log(isPalindrome(test1));
