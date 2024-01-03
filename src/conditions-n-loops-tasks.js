/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (a > b && a > c) {
    return a;
  }
  if (b > a && b > c) {
    return b;
  }
  return c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (
    queen.x === king.x ||
    queen.y === king.y ||
    (queen.x === queen.y && king.x === king.y) ||
    Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)
  ) {
    return true;
  }
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a === 0 || b === 0 || c === 0) {
    return false;
  }
  if (a === b || a === c || b === c) {
    if (Math.max(a, b, c) > Math.min(a, b, c) * 2) {
      return false;
    }
    return true;
  }
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let result = '';
  if (Math.floor(num / 10) === 3) {
    result += 'XXX';
  }
  if (Math.floor(num / 10) === 2) {
    result += 'XX';
  }
  if (Math.floor(num / 10) === 1) {
    result += 'X';
  }
  if (num % 10 === 1) {
    result += 'I';
  }
  if (num % 10 === 2) {
    result += 'II';
  }
  if (num % 10 === 3) {
    result += 'III';
  }
  if (num % 10 === 4) {
    result += 'IV';
  }
  if (num % 10 === 5) {
    result += 'V';
  }
  if (num % 10 === 6) {
    result += 'VI';
  }
  if (num % 10 === 7) {
    result += 'VII';
  }
  if (num % 10 === 8) {
    result += 'VIII';
  }
  if (num % 10 === 9) {
    result += 'IX';
  }
  return result;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let res = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    switch (numberStr[i]) {
      case '-':
        res += 'minus ';
        break;
      case '0':
        if (i !== numberStr.length - 1) {
          res += 'zero ';
        }
        if (i === numberStr.length - 1) {
          res += 'zero';
        }
        break;
      case '1':
        if (i !== numberStr.length - 1) {
          res += 'one ';
        }
        if (i === numberStr.length - 1) {
          res += 'one';
        }
        break;
      case '2':
        if (i !== numberStr.length - 1) {
          res += 'two ';
        }
        if (i === numberStr.length - 1) {
          res += 'two';
        }
        break;
      case '3':
        if (i !== numberStr.length - 1) {
          res += 'three ';
        }
        if (i === numberStr.length - 1) {
          res += 'three';
        }
        break;
      case '4':
        if (i !== numberStr.length - 1) {
          res += 'four ';
        }
        if (i === numberStr.length - 1) {
          res += 'four';
        }
        break;
      case '5':
        if (i !== numberStr.length - 1) {
          res += 'five ';
        }
        if (i === numberStr.length - 1) {
          res += 'five';
        }
        break;
      case '6':
        if (i !== numberStr.length - 1) {
          res += 'six ';
        }
        if (i === numberStr.length - 1) {
          res += 'six';
        }
        break;
      case '7':
        if (i !== numberStr.length - 1) {
          res += 'seven ';
        }
        if (i === numberStr.length - 1) {
          res += 'seven';
        }
        break;
      case '8':
        if (i !== numberStr.length - 1) {
          res += 'eight ';
        }
        if (i === numberStr.length - 1) {
          res += 'eight';
        }
        break;
      case '9':
        if (i !== numberStr.length - 1) {
          res += 'nine ';
        }
        if (i === numberStr.length - 1) {
          res += 'nine';
        }
        break;
      default:
        res += 'point ';
        break;
    }
  }
  return res;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let strPl = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    strPl += str[i];
  }
  return strPl === str;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  let index = -1;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      index = i;
      break;
    }
  }
  return index;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  const str = `${num}`;
  for (let i = 0; i < str.length; i += 1) {
    if (+str[i] === digit) {
      return true;
    }
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  for (let i = 1; i < arr.length; i += 1) {
    let left = 0;
    let right = 0;
    for (let l = 0; l < i; l += 1) {
      left += arr[l];
    }
    for (let r = i + 1; r < arr.length; r += 1) {
      right += arr[r];
    }
    if (left === right) {
      return i;
    }
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const arr = [];
  let n = size;
  let direction = 2;
  let count = 1;
  for (let i = 0; i < n; i += 1) {
    arr[i] = [];
    if (i === 0) {
      for (let j = 1; j < n; j += 1) {
        if (j === 1) {
          arr[i][0] = 1;
        }
        arr[i][j] = arr[i][j - 1] + 1;
      }
    } else {
      arr[i][n - 1] = arr[i - 1][n - 1] + 1;
      if (i === n - 1) {
        for (let j = n - 2; j >= 0; j -= 1) {
          arr[i][j] = arr[i][j + 1] + 1;
        }
        let a = i - 1;
        while (arr[a][0] === undefined) {
          arr[a][0] = arr[a + 1][0] + 1;
          a -= 1;
        }
      }
    }
  }
  n -= 1;
  for (let i = count; i < n; i += 1) {
    if (direction === 2) {
      for (let j = count; j < n; j += 1) {
        arr[i][j] = arr[i][j - 1] + 1;
      }
      direction = 3;
    } else {
      arr[i][n - 1] = arr[i - 1][n - 1] + 1;
      if (i === n - 1) {
        for (let j = n - 2; j >= count; j -= 1) {
          arr[i][j] = arr[i][j + 1] + 1;
        }
        let a = i - 1;
        while (arr[a][count] === undefined) {
          arr[a][count] = arr[a + 1][count] + 1;
          a -= 1;
        }
        direction = 2;
        count += 1;
        n -= 1;
        i = count - 1;
      }
    }
  }
  return arr;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const arr = Object.assign([], matrix);
  let arrUp = [];
  let arrDown = [];
  let arrLeft = [];
  let arrRight = [];
  let count = 0;

  for (let i = count; i < Math.floor(matrix.length / 2); i += 1) {
    arrUp = [];
    arrDown = [];
    arrLeft = [];
    arrRight = [];
    for (let j = count; j < matrix.length - count; j += 1) {
      arrUp[j] = matrix[i][j];
      arrDown[j] = matrix[matrix.length - 1 - count][j];
    }
    for (let j = matrix.length - 1 - count, k = count; j >= i; j -= 1, k += 1) {
      arrLeft[k] = matrix[j][count];
      arrRight[k] = matrix[j][matrix[j].length - 1 - count];
    }
    for (let d = count; d < arr.length - count; d += 1) {
      arr[d][arr.length - 1 - count] = arrUp[d];
      arr[d][count] = arrDown[d];
      for (let c = count; c < arr.length - count; c += 1) {
        if (d === count) {
          arr[d][c] = arrLeft[c];
          arr[arr.length - 1 - count][c] = arrRight[c];
        }
      }
    }
    count += 1;
  }
  return arr;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const a = arr;
  for (let i = 0; i < arr.length - 1; i += 1) {
    for (let j = 0; j < arr.length - 1 - i; j += 1) {
      if (a[j + 1] < a[j]) {
        const b = a[j + 1];
        a[j + 1] = a[j];
        a[j] = b;
      }
    }
  }
  return a;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let res = str;
  for (let i = 0; i < iterations; i += 1) {
    let a = '';
    let b = '';
    for (let j = 0; j < res.length; j += 1) {
      if (j % 2 !== 0) {
        b += res[j];
      } else {
        a += res[j];
      }
    }
    res = a + b;
  }
  return res;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const arr = Array.from(`${number}`);
  let first = [];
  let res = [];
  for (let i = arr.length - 1; i >= 0; i -= 1) {
    if (arr[i - 1] !== undefined && arr[i] > arr[i - 1]) {
      const copyFirst = Object.assign([], arr);
      first = copyFirst.splice(0, i - 1);
      const arrLast = arr.splice(i).sort((a, b) => a - b);
      const x = arrLast.find((a) => a > arr[i - 1]);
      const index = arrLast.findIndex((a) => a === x);
      arrLast[index] = arr[i - 1];
      res = [...first, x, ...arrLast];
      break;
    }
    res = [...arr];
  }
  return Number(res.join(''));
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
