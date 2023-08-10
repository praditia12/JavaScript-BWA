// for 
var data = [
    "kucing","kangguru","kuda","sapi","ayam","bebek"
];

for (let index = 0; index < data.length; index++) {
    console.log(data[index]);
};

// for in

var kucing = {
    berkaki: 4,
    berbulu: "iya",
    pemakan: "karnivora"
};

for (var i in kucing) {
    console.log(kucing[i])
}


// while 
var i =0;
while (i < data.length) {
    console.log(data[i]);
    i++;
}