// String problems
function reverseAndDisplay() {
    const str = document.getElementById('inputString').value;
    document.getElementById('output').textContent = str.split('').reverse().join('');
}
function findLongestWord() {
    const str = document.getElementById('longestWordInput').value;
    const words = str.match(/\w+/g) || [];
    let longest = "";
    words.forEach(word => { if (word.length > longest.length) longest = word; });
    document.getElementById('outputLongestWord').textContent = longest;
}
function checkPalindrome() {
    const str = document.getElementById('palindromeInput').value.replace(/[\W_]/g, '').toLowerCase();
    document.getElementById('outputPalindrome').textContent = str === str.split('').reverse().join('') ? "Palindrome" : "Not palindrome";
}
function countVowels() {
    const str = document.getElementById('vowelInput').value.toLowerCase();
    const count = (str.match(/[aeiou]/g) || []).length;
    document.getElementById('outputVowels').textContent = count;
}
function removeSpaces() {
    const str = document.getElementById('spacesInput').value;
    document.getElementById('outputSpaces').textContent = str.replace(/ /g, '');
}
function replaceAllOccurrences() {
    const str = document.getElementById('replaceInput').value;
    const ch = document.getElementById('replaceChar').value;
    const rep = document.getElementById('replaceWith').value;
    if (ch) document.getElementById('outputReplace').textContent = str.split(ch).join(rep);
    else document.getElementById('outputReplace').textContent = "Enter character to replace";
}
function charFrequency() {
    const str = document.getElementById('freqInput').value;
    let freq = {};
    for (let char of str) freq[char] = (freq[char] || 0) + 1;
    document.getElementById('outputFrequency').textContent = JSON.stringify(freq);
}

// Array problems
function Largest() {
    const arr = document.getElementById('arrayInputLargest').value.split(',').map(s => Number(s.trim())).filter(n => !isNaN(n));
    document.getElementById('outputLargest').textContent = arr.length ? Math.max(...arr) : "Invalid input";
}
function Smallest() {
    const arr = document.getElementById('arrayInputSmallest').value.split(',').map(s => Number(s.trim())).filter(n => !isNaN(n));
    document.getElementById('outputSmallest').textContent = arr.length ? Math.min(...arr) : "Invalid input";
}
function sumArray() {
    const arr = document.getElementById('sumArrayInput').value.split(',').map(s => Number(s.trim())).filter(n => !isNaN(n));
    document.getElementById('outputSum').textContent = arr.length ? arr.reduce((a, b) => a + b, 0) : "Invalid input";
}
function sortArrayAsc() {
    const arr = document.getElementById('sortArrayInput').value.split(',').map(s => Number(s.trim())).filter(n => !isNaN(n));
    document.getElementById('outputSort').textContent = arr.length ? arr.slice().sort((a, b) => a - b).join(", ") : "Invalid input";
}
function sortArrayDesc() {
    const arr = document.getElementById('sortArrayInput').value.split(',').map(s => Number(s.trim())).filter(n => !isNaN(n));
    document.getElementById('outputSort').textContent = arr.length ? arr.slice().sort((a, b) => b - a).join(", ") : "Invalid input";
}
function removeDuplicates() {
    const arr = document.getElementById('dupArrayInput').value.split(',').map(s => Number(s.trim())).filter(n => !isNaN(n));
    const uniqueArr = [...new Set(arr)];
    document.getElementById('outputDup').textContent = uniqueArr.length ? uniqueArr.join(", ") : "Invalid input";
}
function findSecondLargest() {
    const arr = document.getElementById('secArrayInput').value.split(',').map(s => Number(s.trim())).filter(n => !isNaN(n));
    const uniqueArr = [...new Set(arr)].sort((a, b) => b - a);
    document.getElementById('outputSecond').textContent = uniqueArr.length > 1 ? uniqueArr[1] : "Not enough unique elements";
}
function findSecondSmallest() {
    const arr = document.getElementById('secArrayInput').value.split(',').map(s => Number(s.trim())).filter(n => !isNaN(n));
    const uniqueArr = [...new Set(arr)].sort((a, b) => a - b);
    document.getElementById('outputSecond').textContent = uniqueArr.length > 1 ? uniqueArr[1] : "Not enough unique elements";
}
function mergeArrays() {
    const arr1 = document.getElementById('mergeArr1').value.split(',').map(s => Number(s.trim())).filter(n => !isNaN(n));
    const arr2 = document.getElementById('mergeArr2').value.split(',').map(s => Number(s.trim())).filter(n => !isNaN(n));
    const merged = arr1.concat(arr2).sort((a, b) => a - b);
    document.getElementById('outputMerge').textContent = merged.length ? merged.join(", ") : "Invalid input";
}
function findIndex() {
    const arr = document.getElementById('indexArrayInput').value.split(',').map(s => Number(s.trim())).filter(n => !isNaN(n));
    const num = Number(document.getElementById('indexElementInput').value);
    const idx = arr.indexOf(num);
    document.getElementById('outputIndex').textContent = idx !== -1 ? idx : "Element not found";
}
function reverseArray() {
    const arr = document.getElementById('reverseArrayInput').value.split(',').map(s => Number(s.trim())).filter(n => !isNaN(n));
    document.getElementById('outputReverseArray').textContent = arr.length ? arr.reverse().join(", ") : "Invalid input";
}
function findAverage() {
    const arr = document.getElementById('avgArrayInput').value.split(',').map(s => Number(s.trim())).filter(n => !isNaN(n));
    document.getElementById('outputAvgArray').textContent = arr.length ? (arr.reduce((a, b) => a + b, 0) / arr.length).toFixed(2) : "Invalid input";
}
function findMissingNumbers() {
    const arr = document.getElementById('missingArrayInput').value.split(',').map(s => Number(s.trim())).filter(n => !isNaN(n)).sort((a,b)=>a-b);
    if (arr.length < 2) { document.getElementById('outputMissing').textContent = "Invalid input"; return; }
    let missing = [];
    for (let i = arr[0]; i < arr[arr.length-1]; i++) {
        if (!arr.includes(i)) missing.push(i);
    }
    document.getElementById('outputMissing').textContent = missing.length ? missing.join(", ") : "No missing numbers";
}

// Basic Number and Condition
function checkEvenOdd() {
    const num = Number(document.getElementById('evenOddInput').value);
    document.getElementById('outputEvenOdd').textContent = num % 2 === 0 ? "Even" : "Odd";
}
function findFactorial() {
    let n = Number(document.getElementById('factorialInput').value);
    if (n < 0) {
        document.getElementById('outputFactorial').textContent = "Negative not allowed";
        return;
    }
    let fact = 1;
    for (let i = 2; i <= n; i++) fact *= i;
    document.getElementById('outputFactorial').textContent = fact;
}
function printFibo() {
    let n = Number(document.getElementById('fiboInput').value);
    let res = [];
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
        res.push(a);
        [a, b] = [b, a + b];
    }
    document.getElementById('outputFibo').textContent = res.join(", ");
}
function sumDigits() {
    let num = Math.abs(Number(document.getElementById('sumDigitsInput').value));
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    document.getElementById('outputSumDigits').textContent = sum;
}
function reverseInteger() {
    let num = Number(document.getElementById('revIntInput').value);
    let rev = 0, sign = num < 0 ? -1 : 1;
    num = Math.abs(num);
    while (num > 0) {
        rev = rev * 10 + (num % 10);
        num = Math.floor(num / 10);
    }
    document.getElementById('outputRevInt').textContent = sign * rev;
}
function checkPrime() {
    let num = Number(document.getElementById('primeInput').value);
    if (num < 2) { document.getElementById('outputPrime').textContent = "Not prime"; return; }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            document.getElementById('outputPrime').textContent = "Not prime";
            return;
        }
    }
    document.getElementById('outputPrime').textContent = "Prime";
}
function primesInRange() {
    let start = Number(document.getElementById('rangePrimeStart').value);
    let end = Number(document.getElementById('rangePrimeEnd').value);
    if (start > end) [start, end] = [end, start];
    let res = [];
    for (let n = start; n <= end; n++) {
        let isPrime = n > 1;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) res.push(n);
    }
    document.getElementById('outputRangePrimes').textContent = res.length ? res.join(", ") : "No primes found";
}
function swapNumbers() {
    let a = Number(document.getElementById('swapA').value);
    let b = Number(document.getElementById('swapB').value);
    [a, b] = [b, a];
    document.getElementById('outputSwap').textContent = `A: ${a}, B: ${b}`;
}
function multiplicationTable() {
    let num = Number(document.getElementById('multTableNum').value);
    let t = [];
    for (let i = 1; i <= 10; i++) t.push(`${num} x ${i} = ${num * i}`);
    document.getElementById('outputMultTable').textContent = t.join("\n");
}
function countDigitOccurrences() {
    let num = Math.abs(Number(document.getElementById('countDigitNum').value)).toString();
    let digit = document.getElementById('digitToCount').value;
    let count = 0;
    for (let ch of num) if (ch === digit) count++;
    document.getElementById('outputCountDigit').textContent = count;
}
function print1to100() {
    let res = [];
    for (let i = 1; i <= 100; i++) res.push(i);
    document.getElementById('output1to100').textContent = res.join(", ");
}
function printOdds() {
    let res = [];
    for (let i = 1; i <= 100; i++) if (i % 2 !== 0) res.push(i);
    document.getElementById('outputOddsEvens').textContent = res.join(", ");
}
function printEvens() {
    let res = [];
    for (let i = 1; i <= 100; i++) if (i % 2 === 0) res.push(i);
    document.getElementById('outputOddsEvens').textContent = res.join(", ");
}
function multiplesOfNumber() {
    let num = Number(document.getElementById('multN_Num').value);
    let count = Number(document.getElementById('multN_Count').value);
    let res = [];
    for (let i = 1; i <= count; i++) res.push(num * i);
    document.getElementById('outputMultiples').textContent = res.join(", ");
}
function findPower() {
    let base = Number(document.getElementById('powerBase').value);
    let exp = Number(document.getElementById('powerExp').value);
    document.getElementById('outputPower').textContent = Math.pow(base, exp);
}
function findGCDLCM() {
    let a = Number(document.getElementById('gcdA').value);
    let b = Number(document.getElementById('gcdB').value);
    if (!a || !b) { document.getElementById('outputGCDLCM').textContent = "Enter both numbers"; return; }
    let gcd = (x, y) => {
        while (y) [x, y] = [y, x % y];
        return x;
    };
    let lcm = (x, y) => x * y / gcd(x, y);
    document.getElementById('outputGCDLCM').textContent = `GCD: ${gcd(a, b)}, LCM: ${lcm(a, b)}`;
}
