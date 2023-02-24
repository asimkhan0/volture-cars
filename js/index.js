let currrentColor = "Black"
let brakeColor = "Default"
let stitchColor = "Default"

var paragraph_1 = document.getElementById("selected-color");
var paragraph_2 = document.getElementById("selected-breaks");
var paragraph_3 = document.getElementById("selected-stitch");

paragraph_1.innerHTML = currrentColor;
paragraph_2.innerHTML = brakeColor;
paragraph_3.innerHTML = stitchColor;

const selectBlack = document.getElementById('art-color-1');
const selectWhite = document.getElementById('art-color-2');
const selectRed = document.getElementById('art-color-7');


const selectGreyMetallic= document.getElementById('art-color-8');

const image = document.getElementById('product-image');
const image_02 = document.getElementById('product-image-2');
const image_03 = document.getElementById('product-image-3');
const image_04 = document.getElementById('product-image-4');
const summary_image = document.getElementById('summary-img');
// const image_05 = document.getElementById('product-image-5');


const tyre_1 = document.getElementById('art-R12-Z23-PE');
const tyre_2 = document.getElementById('art-R12-Z23-PE-2');
const tyre_3 = document.getElementById('art-R12-Z23-PE-3');


const stitch = document.getElementById('art-stitch-PE');
const stitch_2 = document.getElementById('art-stitch-PE-2');
const stitch_3 = document.getElementById('art-stitch-PE-3');

selectBlack.addEventListener('click', function() {
    currrentColor = "black"
    paragraph_1.innerHTML = "Black";
    image.src = `images/offfront_black.jpg`;
    image_02.src = `images/side_black.jpg`;
    image_03.src = `images/offrear_black.jpg`;
    image_04.src = `images/tyre_black.jpg`;
    summary_image.src = `images/offfront_black.jpg`;
});

selectWhite.addEventListener('click', function() {
    currrentColor = "white"
    paragraph_1.innerHTML = "White"
    image.src = `images/offfront_polarwhite.jpg`;
    summary_image.src = `images/offfront_polarwhite.jpg`;
    image_02.src = `images/side_polarwhite.jpg`;
    image_03.src = `images/offrear_polarwhite.jpg`;
    image_04.src = `images/tyre_polarwhite.jpg`;
    // image_05.src = `images/seetpolarwhite.jpg`;
});

selectRed.addEventListener('click', function() {
    currrentColor = "metallic"
    paragraph_1.innerHTML = "Metallic"
    image.src = `images/offfront_cardinalredmetallic.jpg`;
    summary_image.src = `images/offfront_cardinalredmetallic.jpg`;
    image_02.src = `images/side_cardinalredmetallic.jpg`;
    image_03.src = `images/offrear_cardinalredmetallic.jpg`;
    image_04.src = `images/tyre_cardinalredmetallic.jpg`;
    // image_05.src = `images/seat_cardinalredmetallic.jpg`;
});

selectGreyMetallic.addEventListener('click', function() {
    currrentColor = "grey"
    paragraph_1.innerHTML = "Grey"
    image.src = `images/front_SeleniteGreyMetallic.jpg`;
    summary_image.src = `images/front_SeleniteGreyMetallic.jpg`;
    image_02.src = `images/side_SeleniteGreyMetallic.jpg`;
    image_03.src = `images/back_SeleniteGreyMetallic.jpg`;
    image_04.src = `images/tyre_SeleniteGreyMetallic.jpg`;
    // image_05.src = `images/seat_SeleniteGreyMetallic.jpg`;
});


// ..............................................................



var controls = document.querySelectorAll('.controls');
for(var i=0; i<controls.length; i++){
    controls[i].style.display = 'inline-block';
}

var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;

function nextSlide(){
    goToSlide(currentSlide+1);
}

function previousSlide(){
    goToSlide(currentSlide-1);
}

function goToSlide(n){
    slides[currentSlide].className = 'slide';
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].className = 'slide showing';
}

var next = document.getElementById('next');
var previous = document.getElementById('previous');

next.onclick = function(){
    nextSlide();
};
previous.onclick = function(){
    previousSlide();
};

// ...............................................................



const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')


const tyreButton = document.getElementById('select-tyres-btn');
const configButton = document.getElementById('select-config-btn');
const stitchButton = document.getElementById('select-stitch-btn');
const tyres = document.getElementById('tyres');
const stitch_btn = document.getElementById('stitch');
const config_btn = document.getElementById('configuration');


const colors_tab = document.getElementById('colors_tab');
const brakes_tab = document.getElementById('brakes_tab');
const stitch_tab = document.getElementById('stitch_tab');
const config_tab = document.getElementById('configuration_tab');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
        tab.classList.add('active')
        target.classList.add('active')
    })
})


tyreButton.addEventListener("click",()=> {
    goToSlide(3)
    tabContents.forEach(tabContent => {
        tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
        tab.classList.remove('active')
    })

    tyres.classList.add('active')
    brakes_tab.classList.add('active')

    if(currrentColor === 'Black' ){
        image_04.src = `images/tyre_black.jpg`;
    }
    else if(currrentColor === 'white' ){
        image_04.src = `images/tyre_polarwhite.jpg`;
    }
    else if(currrentColor == 'metallic' ){
        image_04.src = `images/tyre_cardinalredmetallic.jpg`;
    }
    else if(currrentColor == 'grey' ){
        image_04.src = `images/tyre_SeleniteGreyMetallic.jpg`;
    }
})

stitchButton.addEventListener("click",()=> {
    tabContents.forEach(tabContent => {
        tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
        tab.classList.remove('active')
    })

    stitch_btn.classList.add('active')
    stitch_tab.classList.add('active')
})

configButton.addEventListener("click",()=> {
    tabContents.forEach(tabContent => {
        tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
        tab.classList.remove('active')
    })

    config_btn.classList.add('active')
    config_tab.classList.add('active')
})


// ............................................................................

tyre_1.addEventListener('click', function() {
    console.log("Clicked")
    brakeColor = "blue"
    paragraph_2.innerHTML = "Blue"
    if(currrentColor == 'Black' ){
        image_04.src = `images/tyre_black_blue.jpg`;
        goToSlide(3)
    }
    else if(currrentColor == 'white' ){
        image_04.src = `images/tyre_polarwhite_blue.jpg`;
        goToSlide(3)
    }
    else if(currrentColor == 'metallic' ){
        image_04.src = `images/tyre_cardinalredmetallic_blue.jpg`;
        goToSlide(3)
    }
    else if(currrentColor == 'grey' ){
        image_04.src = `images/tyre_SeleniteGreyMetallic.jpg`;
        goToSlide(3)
    }
});

tyre_2.addEventListener('click', function() {
    console.log("Clicked")
    brakeColor = "yellow"
    paragraph_2.innerHTML = "Yellow"
    if(currrentColor == 'Black' ){
        image_04.src = `images/tyre_black.jpg`;
        goToSlide(3)
    }
    else if(currrentColor == 'white' ){
        image_04.src = `images/tyre_polarwhite_yellow.jpg`;
        goToSlide(3)
    }
    else if(currrentColor == 'metallic' ){
        image_04.src = `images/tyre_cardinalredmetallic_Yellow.jpg`;
        goToSlide(3)
    }
    else if(currrentColor == 'grey' ){
        image_04.src = `images/tyre_SeleniteGreyMetallic_Yellow.jpg`;
        goToSlide(3)
    }
});

tyre_3.addEventListener('click', function() {
    console.log("Clicked")
    brakeColor = "orange"
    paragraph_2.innerHTML = "Orange"
    if(currrentColor == 'Black' ){
        image_04.src = `images/tyre_black_orange.jpg`;
        goToSlide(3)
    }
    else if(currrentColor == 'white' ){
        image_04.src = `images/tyre_polarwhite.jpg`;
        goToSlide(3)
    }
    else if(currrentColor == 'metallic' ){
        image_04.src = `images/tyre_cardinalredmetallic.jpg`;
        goToSlide(3)
    }
    else if(currrentColor == 'grey' ){
        image_04.src = `images/tyre_SeleniteGreyMetallic_orange.jpg`;
        goToSlide(3)
    }
});


// .........................................................................

stitch.addEventListener("click",function (){
    stitchColor = "Orange"
    paragraph_3.innerHTML = "Orange"
    image_04.src = `images/seat_cardinalredmetallic.jpg`;
    goToSlide(3)
})
stitch_2.addEventListener("click",function (){
    stitchColor = "Blue"
    paragraph_3.innerHTML = "Blue"
    image_04.src = `images/seat_SeleniteGreyMetallic.jpg`;
    goToSlide(3)
})
stitch_3.addEventListener("click",function (){
    stitchColor = "Yellow"
    paragraph_3.innerHTML = "Yellow"
    image_04.src = `images/seat_black.jpg`;
    goToSlide(3)
})



function toggleFullScreen(e) {
    e.preventDefault()
    document.body.style.overflow = 'hidden'

    var el = document.getElementById('video-full');
    var exit = document.getElementById('exit-btn');

    exit.style.zIndex = 3;

    el.classList.remove('video')
    el.classList.add('video-full')

    const next = document.getElementById("nextR")
    const prev = document.getElementById("previousR")
    const collection = document.getElementsByClassName("slide");
    for (let i = 0; i < collection.length; i++) {
        collection[i].style.top = "50%";
        collection[i].style.height = "90vh";
    }

    next.classList.remove('button-right')
    prev.classList.remove('button-left')

    next.classList.add('button-right-full')
    prev.classList.add('button-left-full')
}

function exitFullScreen(e){
    document.body.style.overflow = 'auto'
    var exit = document.getElementById('exit-btn');
    var el = document.getElementById('video-full');
    const next = document.getElementById("nextR")
    const prev = document.getElementById("previousR")

    exit.style.zIndex = 0;

    const collection = document.getElementsByClassName("slide");


    for (let i = 0; i < collection.length; i++) {
        collection[i].style.top = "0px";
        collection[i].style.height = "";
    }

    next.classList.remove('button-right-full')
    prev.classList.remove('button-left-full')

    next.classList.add('button-right')
    prev.classList.add('button-left')

    el.classList.remove('video-full')
    el.classList.add('video')
}


// ..........................................


const hamBurger = document.getElementById("check");
const close = document.getElementById("close");

const CloseBtnClass = document.getElementsByClassName("checkbtnclose");
const CloseNavItems = document.getElementsByClassName("navItems");



hamBurger.addEventListener("click",function (){
    for (let i = 0; i < CloseBtnClass.length; i++) {
        CloseBtnClass[i].style.display = "block";
    }
    for (let i = 0; i < CloseNavItems.length; i++) {
        CloseNavItems[i].style.left = "-20px";
    }
})

close.addEventListener("click",function (){
    for (let i = 0; i < CloseBtnClass.length; i++) {
        CloseBtnClass[i].style.display = "none";
    }
    for (let i = 0; i < CloseNavItems.length; i++) {
        CloseNavItems[i].style.left = "-110%";
    }
})


// On Tab Click ........................

brakes_tab.addEventListener("click",function (){
    goToSlide(3)
    if(currrentColor === 'Black' ){
        image_04.src = `images/tyre_black.jpg`;
    }
    else if(currrentColor === 'white' ){
        image_04.src = `images/tyre_polarwhite.jpg`;
    }
    else if(currrentColor == 'metallic' ){
        image_04.src = `images/tyre_cardinalredmetallic.jpg`;
    }
    else if(currrentColor == 'grey' ){
        image_04.src = `images/tyre_SeleniteGreyMetallic.jpg`;
    }
})

colors_tab.addEventListener("click",function (){
    goToSlide(0)

    if(currrentColor === 'Black' ){
        image_04.src = `images/tyre_black.jpg`;
    }
    else if(currrentColor === 'white' ){
        image_04.src = `images/tyre_polarwhite.jpg`;
    }
    else if(currrentColor == 'metallic' ){
        image_04.src = `images/tyre_cardinalredmetallic.jpg`;
    }
    else if(currrentColor == 'grey' ){
        image_04.src = `images/tyre_SeleniteGreyMetallic.jpg`;
    }
})


// ............MODAL.............
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myReqBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function(event) {
    event.preventDefault()
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

function SendButton(){
    modal.style.display = "none";
}

// When the user clicks anywhere outside the modal, close it
// window.onclick = function(event) {
//     event.preventDefault()
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
//     return true
// }