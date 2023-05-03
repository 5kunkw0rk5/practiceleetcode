// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII,
// which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV.
// Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances
// where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given an integer, convert it to a roman numeral.

// 1 <= num <= 3999
function intToRoman(num: number): string {
  const strNumbers = num.toString().split("").reverse();
  let romanStrs: string[] = strNumbers.map(_ => "")
  strNumbers.forEach((strNumber, i) => {
    let remainder = parseInt(strNumber) * 10**i
    if(i === 0){
      if(numDict[remainder]){
        romanStrs[0] += numDict[remainder]
        remainder -= remainder
      }
      if(remainder > 5){
        romanStrs[0] += "V"
      }
      while(remainder < 9 && remainder > 5){
        romanStrs[0] += "I"
        remainder -= 1
      }
      while(remainder <= 3 && remainder > 0){
        romanStrs[0] += "I"
        remainder -= 1
      }
    }
    else if(i === 1){
      if(numDict[remainder]){
        romanStrs[1] += numDict[remainder]
        remainder -= remainder
      }
      if(remainder > 50){
        romanStrs[1] += "L"
      }
      while(remainder < 90 && remainder > 50){
        romanStrs[1] += "X"
        remainder -= 10
      }
      while(remainder <= 30 && remainder > 0){
        romanStrs[1] += "X"
        remainder -= 10
      }
    }
    else if(i === 2){
      if(numDict[remainder]){
        romanStrs[2] += numDict[remainder]
        remainder -= remainder
      }
      if(remainder > 500){
        romanStrs[2] += "D"
      }
      while(remainder < 900 && remainder > 500){
        romanStrs[2] += "C"
        remainder -= 100
      }
      while(remainder <= 300 && remainder > 0){
        romanStrs[2] += "C"
        remainder -= 100
      }
    }
    else{
      while(remainder <= 3000 && remainder > 0){
        romanStrs[3] += "M"
        remainder -= 1000
      }
    }
  
  })
  return romanStrs.reverse().join("");
  
}

const numDict: Record<number, string> = {
  1: "I",
  4: "IV",
  5: "V",
  9: "IX",
  10: "X",
  40: "XL",
  50: "L",
  90:  "XC",
  100: "C",
  1000: "M",
  900: "CM",
  500: "D",
  400: "CD",
  }



console.log(intToRoman(555))
console.log(intToRoman(2008))
console.log(intToRoman(1706))
console.log(intToRoman(97))
