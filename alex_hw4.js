// INISIALISASI
// Deklarasi Function - START

// fungsi membuat bilangan bulat random
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// fungsi generate array dengan nilai random
function generateAngkaRandom(jumlah) {
  const angka_random = [];
  for (i = 0; i < jumlah; i++) {
    angka_random[i] = getRandomInt(jumlah);
  }
  return angka_random;
}

// fungsi membagi array berdasarkan index ganjil
function splitArrayOdd(list_angka, arrayLength) {
  const ganjil = [];
  for (i = 0; i < arrayLength; i++) {
    if (i % 2 != 0) {
      ganjil.push(list_angka[i]);
    }
  }
  return ganjil;
}

// fungsi membagi array berdasarkan index genap
function splitArrayEven(list_angka, arrayLength) {
  const genap = [];
  for (i = 0; i < arrayLength; i++) {
    if (i % 2 == 0) {
      genap.push(list_angka[i]);
    }
  }
  return genap;
}

// fungsi total
function totalJumlah(list_angka) {
  let total = 0;
  for (key in list_angka) {
    total = total + list_angka[key];
  }
  return total;
}

// fungsi rata-rata
function rataRata(list_angka, jumlah) {
  let total = 0;
  for (key in list_angka) {
    total = total + list_angka[key];
  }
  let rerata = total / (jumlah / 2);
  return rerata;
}

// fungsi minimum
function angkaMinimum(list_angka) {
  let angka_terkecil = 1000;
  for (val of list_angka) {
    if (val < angka_terkecil) {
      angka_terkecil = val;
    }
  }
  return angka_terkecil;
}

// fungsi maximum
function angkaMaximum(list_angka) {
  let angka_terbesar = 0;
  for (val of list_angka) {
    if (val > angka_terbesar) {
      angka_terbesar = val;
    }
  }
  return angka_terbesar;
}
// Deklarasi Function - END

// Eksekusi Function - START
let panjangArray = 100;

const arrayRandom = generateAngkaRandom(panjangArray);
console.log(arrayRandom);

// split array
const arrayGanjil = splitArrayOdd(arrayRandom, panjangArray);
const arrayGenap = splitArrayEven(arrayRandom, panjangArray);

console.log("array dengan index ganjil = ", arrayGanjil);
console.log("array dengan index genap = ", arrayGenap);

// menghitung total
let totalGanjil = totalJumlah(arrayGanjil);
let totalGenap = totalJumlah(arrayGenap);

console.log("total nilai pada array dengan index ganjil = ", totalGanjil);
console.log("total nilai pada array dengan index genap = ", totalGenap);

if (totalGanjil > totalGenap) {
  console.log("total array ganjil > total array genap");
} else if (totalGanjil < totalGenap) {
  console.log("total array genap > total array ganjil");
} else {
  console.log("total nilai pada kedua array sama besar");
}

// menghitung rata-rata
let rerataGanjil = rataRata(arrayGanjil, panjangArray);
let rerataGenap = rataRata(arrayGenap, panjangArray);

console.log("rata-rata nilai pada array dengan index ganjil = ", rerataGanjil);
console.log("rata-rata nilai pada array dengan index genap = ", rerataGenap);

if (rerataGanjil > rerataGenap) {
  console.log("rata-rata array ganjil > rata-rata array genap");
} else if (rerataGanjil < rerataGenap) {
  console.log("rata-rata array genap > rata-rata array ganjil");
} else {
  console.log("nilai rata-rata pada kedua array sama besar");
}

// menghitung minimum
let minGanjil = angkaMinimum(arrayGanjil);
let minGenap = angkaMinimum(arrayGenap);

console.log("nilai minimum pada array dengan index ganjil = ", minGanjil);
console.log("nilai minimum pada array dengan index genap = ", minGenap);

if (minGanjil > minGenap) {
  console.log("nilai minimum pada array ganjil > nilai minimum pada array genap");
} else if (minGanjil < minGenap) {
  console.log("nilai minimum pada array genap > nilai minimum pada array ganjil");
} else {
  console.log("nilai minimum pada kedua array sama besar");
}

// maximum
let maxGanjil = angkaMaximum(arrayGanjil);
let maxGenap = angkaMaximum(arrayGenap);

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
