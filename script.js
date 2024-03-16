let btn = document.getElementById('ordFood')
let burger = document.getElementById('burger')
let fries = document.getElementById('fries')
let biryani = document.getElementById('biryani')
let faluda = document.getElementById('faluda')

let myObj = {
    burger: 'https://media.istockphoto.com/id/1309352410/photo/cheeseburger-with-tomato-and-lettuce-on-wooden-board.jpg?s=612x612&w=0&k=20&c=lfsA0dHDMQdam2M1yvva0_RXfjAyp4gyLtx4YUJmXgg=',

    fries: 'https://media.istockphoto.com/id/966934632/photo/appetizing-french-fries-in-a-bowl.jpg?s=612x612&w=0&k=20&c=6mKRNQ-PWQRQg0RAXyCQZeRZRoSzohqVWhT-SKVXd04=',

    biryani: 'https://t3.ftcdn.net/jpg/04/41/20/18/360_F_441201852_XQqp1wbAQj9udOC3iT7D0ahKgaf71bns.jpg',

    faluda: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/sweet-mithai/e/r/o/400-jeet-kesar-kulfi-faluda-400grams-1-kesar-bati-jeet-by-kshs-original-imagpv42c6c4tyff.jpeg?q=90&crop=false'
};

function fetchData() {

    let food = undefined;

    if (!(burger.checked || fries.checked || biryani.checked || faluda.checked)) {
        alert('Please select atleast one item')
        return;
    }

    if (burger.checked) {
        food = burger.value;
    } else if (fries.checked) {
        food = fries.value;
    } else if (biryani.checked) {
        food = biryani.value;
    } else if (faluda.checked) {
        food = faluda.value;
    } else if (burger.checked || fries.checked || biryani.checked || faluda.checked) {
        const foods = Object.keys(myObj);
        food = foods[Math.floor(Math.random() * foods.length)];
    }

    let promise = new Promise((res, rej) => {
        setTimeout(() => {
            res();
        }, 1000)
    })

    promise.then(() => {
        let img = document.getElementById("image")
        img.src = myObj[food];
    }).catch((e) => {
        console.log(e);
    })

}

btn.addEventListener('click', fetchData);
