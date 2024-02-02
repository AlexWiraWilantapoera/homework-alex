// INISIALISASI
// Deklarasi Function - START

// fungsi membuat bilangan bulat random
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// fungsi generate array dengan nilai random
function generateArrayRandom(sum, sumInt) {
  const randomVal = [];
  for (i = 0; i < sum; i++) {
    randomVal[i] = getRandomInt(sumInt);
  }
  return randomVal;
}

// fungsi membagi array berdasarkan index ganjil
function splitArrayOdd(array, arrayLength) {
  const oddArray = [];
  for (i = 0; i < arrayLength; i++) {
    if (i % 2 != 0) {
      oddArray.push(array[i]);
    }
  }
  return oddArray;
}

// fungsi membagi array berdasarkan index genap
function splitArrayEven(array, arrayLength) {
  const evenArray = [];
  for (i = 0; i < arrayLength; i++) {
    if (i % 2 == 0) {
      evenArray.push(array[i]);
    }
  }
  return evenArray;
}

// fungsi total
function totalSum(array) {
  let total = 0;
  for (key in array) {
    total = total + array[key];
  }
  return total;
}

// fungsi rata-rata
function mean(array, sum) {
  let total = 0;
  for (key in array) {
    total = total + array[key];
  }
  let res = total / (sum / 2);
  return res;
}

// fungsi minimum
function min(array) {
  let minVal = 1000;
  for (val of array) {
    if (val < minVal) {
      minVal = val;
    }
  }
  return minVal;
}

// fungsi maximum
function max(array) {
  let maxVal = 0;
  for (val of array) {
    if (val > maxVal) {
      maxVal = val;
    }
  }
  return maxVal;
}
// Deklarasi Function - END

// Eksekusi Function - START
let arrayLen = 100;
let randInt = 50;

const arrayRandom = generateArrayRandom(arrayLen, randInt);
console.log(arrayRandom);

// split array
const arrayOdd = splitArrayOdd(arrayRandom, arrayLen);
const arrayEven = splitArrayEven(arrayRandom, arrayLen);

console.log("array dengan index ganjil = ", arrayOdd);
console.log("array dengan index genap = ", arrayEven);

// menghitung total
let sumOdd = totalSum(arrayOdd);
let sumEven = totalSum(arrayEven);

console.log("total nilai pada array dengan index ganjil = ", sumOdd);
console.log("total nilai pada array dengan index genap = ", sumEven);

if (sumOdd > sumEven) {
  console.log("total array ganjil > total array genap");
} else if (sumOdd < sumEven) {
  console.log("total array genap > total array ganjil");
} else {
  console.log("total nilai pada kedua array sama besar");
}
console.log("\n");

// menghitung rata-rata
let meanOdd = mean(arrayOdd, arrayLen);
let meanEven = mean(arrayEven, arrayLen);

console.log("rata-rata nilai pada array dengan index ganjil = ", meanOdd);
console.log("rata-rata nilai pada array dengan index genap = ", meanEven);

if (meanOdd > meanEven) {
  console.log("rata-rata array ganjil > rata-rata array genap");
} else if (meanOdd < meanEven) {
  console.log("rata-rata array genap > rata-rata array ganjil");
} else {
  console.log("nilai rata-rata pada kedua array sama besar");
}
console.log("\n");

// menghitung minimum
let minOdd = min(arrayOdd);
let minEven = min(arrayEven);

console.log("nilai minimum pada array dengan index ganjil = ", minOdd);
console.log("nilai minimum pada array dengan index genap = ", minEven);

if (minOdd > minEven) {
  console.log("nilai minimum pada array ganjil > nilai minimum pada array genap");
} else if (minOdd < minEven) {
  console.log("nilai minimum pada array genap > nilai minimum pada array ganjil");
} else {
  console.log("nilai minimum pada kedua array sama besar");
}
console.log("\n");

// maximum
let maxOdd = max(arrayOdd);
let maxEven = max(arrayEven);

console.log("nilai maximum pada array dengan index ganjil = ", maxOdd);
console.log("nilai maximum pada array dengan index genap = ", maxEven);

if (maxOdd > maxEven) {
  console.log("nilai maximum pada array ganjil > nilai maximum pada array genap");
} else if (maxOdd < maxEven) {
  console.log("nilai maximum pada array genap > nilai maximum pada array ganjil");
} else {
  console.log("nilai maximum pada kedua array sama besar");
}
// Eksekusi Function - END
