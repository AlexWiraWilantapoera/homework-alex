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
function rataRata(array, sum) {
  let total = 0;
  for (key in array) {
    total = total + array[key];
  }
  let rerata = total / (sum / 2);
  return rerata;
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
const arrayGanjil = splitArrayOdd(arrayRandom, arrayLen);
const arrayGenap = splitArrayEven(arrayRandom, arrayLen);

console.log("array dengan index ganjil = ", arrayGanjil);
console.log("array dengan index genap = ", arrayGenap);

// menghitung total
let totalGanjil = totalSum(arrayGanjil);
let totalGenap = totalSum(arrayGenap);

console.log("total nilai pada array dengan index ganjil = ", totalGanjil);
console.log("total nilai pada array dengan index genap = ", totalGenap);

if (totalGanjil > totalGenap) {
  console.log("total array ganjil > total array genap");
} else if (totalGanjil < totalGenap) {
  console.log("total array genap > total array ganjil");
} else {
  console.log("total nilai pada kedua array sama besar");
}
console.log("\n");

// menghitung rata-rata
let rerataGanjil = rataRata(arrayGanjil, arrayLen);
let rerataGenap = rataRata(arrayGenap, arrayLen);

console.log("rata-rata nilai pada array dengan index ganjil = ", rerataGanjil);
console.log("rata-rata nilai pada array dengan index genap = ", rerataGenap);

if (rerataGanjil > rerataGenap) {
  console.log("rata-rata array ganjil > rata-rata array genap");
} else if (rerataGanjil < rerataGenap) {
  console.log("rata-rata array genap > rata-rata array ganjil");
} else {
  console.log("nilai rata-rata pada kedua array sama besar");
}
console.log("\n");

// menghitung minimum
let minGanjil = min(arrayGanjil);
let minGenap = min(arrayGenap);

console.log("nilai minimum pada array dengan index ganjil = ", minGanjil);
console.log("nilai minimum pada array dengan index genap = ", minGenap);

if (minGanjil > minGenap) {
  console.log("nilai minimum pada array ganjil > nilai minimum pada array genap");
} else if (minGanjil < minGenap) {
  console.log("nilai minimum pada array genap > nilai minimum pada array ganjil");
} else {
  console.log("nilai minimum pada kedua array sama besar");
}
console.log("\n");

// maximum
let maxGanjil = max(arrayGanjil);
let maxGenap = max(arrayGenap);

console.log("nilai maximum pada array dengan index ganjil = ", maxGanjil);
console.log("nilai maximum pada array dengan index genap = ", maxGenap);

if (maxGanjil > maxGenap) {
  console.log("nilai maximum pada array ganjil > nilai maximum pada array genap");
} else if (maxGanjil < maxGenap) {
  console.log("nilai maximum pada array genap > nilai maximum pada array ganjil");
} else {
  console.log("nilai maximum pada kedua array sama besar");
}
// Eksekusi Function - END
