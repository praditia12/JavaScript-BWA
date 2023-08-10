var fruit = document.getElementById('fruits');
var i = 0;

function saveFruits(){
    fruitName = document.getElementById('inputNameFruit').value;
    fruitPrice = document.getElementById('inputPriceFruit').value;
    fruitImage = document.getElementById('inputImageFruit').value;
    i++;
    fruit.innerHTML += `
    <div class="col-lg-3 col-md-6 col-sm-6 col-12">
        <img src="`+ fruitImage +`" class="img-fluid img-thumbnail" alt="">
            <h3 class="mt-3" >
                ` + fruitName +`  
            </h3>
            <p> 
                Rp. `+ fruitPrice +
            `</p>
            <p>
                <a href="#" class="btn-view-details btn btn-primary w-100">
                    View Detail
                </a>
                <a href="#" class="mt-2 btn btn-secondary w-100">
                    Book Now
                </a>
            </p>
    </div>`;
    
    fruitName = document.getElementById('inputNameFruit').value='';
    fruitPrice = document.getElementById('inputPriceFruit').value='';
    fruitImage = document.getElementById('inputImageFruit').value='';
}