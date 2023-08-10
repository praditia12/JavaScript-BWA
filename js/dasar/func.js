// function
function belanja()
{
    var totalBelanja = 40.000;
    console.log("Total Belanja: " + totalBelanja)
    var uang = 100.000;
    console.log("Uang kamu: " + uang)

    console.log("transaksi...")

    uang -= totalBelanja;

    console.log("Sisa uang kamu: " + uang);
};

belanja();

// parameters function
function kenalan(nama, umur){
    console.log("Halo nama saya "+ nama + " saya umur "+ umur);
}

kenalan("Adit", 17);