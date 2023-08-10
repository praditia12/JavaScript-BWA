// Menampilkan Pop up
// alert("Hai, My name Adit");

// aritmatika Javascript
var hargaBarang = 700000;
var diskonBarang = 10;

var totalDiskon = hargaBarang * diskonBarang / 100;

console.log("Total diskon anda: " + totalDiskon);

// compareration operators
var numberSatu = 65;
var numberDua = 54;

var samaDengan = numberSatu == numberDua;
var tidakSamaDengan = numberSatu != numberDua;
var kurangDari = numberSatu < numberDua;
var lebihDari = numberSatu > numberDua;

console.log(samaDengan);
console.log(tidakSamaDengan);
console.log(kurangDari);
console.log(lebihDari);

// logical operator
var usernameRegistered = "admin";
var passwordRegistered = "12233";

var usernameIinput = "admin";
var passwordInput = "1223344"

var tryLogin = usernameIinput == usernameRegistered && passwordInput == passwordRegistered;

console.log("Login kamu: " + tryLogin);

// typeOf
console.log(typeof(hargaBarang));