let currrentColor = "Black"
let brakeColor = "Black"
let stitchColor = "Blue"

var paragraph_1 = document.getElementById("selected-color");
var paragraph_2 = document.getElementById("selected-breaks");
var paragraph_3 = document.getElementById("selected-stitch");

paragraph_1.innerHTML = currrentColor;
paragraph_2.innerHTML = brakeColor;
paragraph_3.innerHTML = stitchColor;

const selectBlack = document.getElementById('art-color-1');
const selectWhite = document.getElementById('art-color-2');
const selectBLUE = document.getElementById('art-color-7');
const selectPurple = document.getElementById('art-color-8');
const selectGreen = document.getElementById('art-color-6');

const image = document.getElementById('product-image');
const image_02 = document.getElementById('product-image-2');
const image_03 = document.getElementById('product-image-3');
const image_04 = document.getElementById('product-image-4');
const image_05 = document.getElementById('product-image-5');
const summary_image = document.getElementById('summary-img');


const tyre_1 = document.getElementById('art-RIM-Z23-PE-Black');
const tyre_2 = document.getElementById('art-RIM-Z23-PE-Silver');
const tyre_3 = document.getElementById('art-RIM-Z23-PE');
const tyre_4 = document.getElementById('art-R12-Z23-PE-2');
const tyre_5 = document.getElementById('art-R12-Z23-PE-3');


const stitch = document.getElementById('art-stitch-PE');
const stitch_2 = document.getElementById('art-stitch-PE-2');
const stitch_3 = document.getElementById('art-stitch-PE-3');
const stitch_4 = document.getElementById('art-stitch-PE-4');

selectBlack.addEventListener('click', function() {
    currrentColor = "Black"
    paragraph_1.innerHTML = "Black";

    image.src = `images/Black/black/1.jpg`;
    image_02.src = `images/Black/black/2.jpg`;
    image_03.src = `images/Black/black/3.jpg`;
    image_04.src = `images/Black/black/4.jpg`;
    image_05.src = `images/Black/black/5.jpg`;

    summary_image.src = `images/Black/black/1.jpg`;
});

selectWhite.addEventListener('click', function() {
    currrentColor = "Frosted"
    paragraph_1.innerHTML = "Frosted"

    image.src = `images/FrostedGlassBlue/black/1.jpg`;
    image_02.src = `images/FrostedGlassBlue/black/2.jpg`;
    image_03.src = `images/FrostedGlassBlue/black/3.jpg`;
    image_04.src = `images/FrostedGlassBlue/black/4.jpg`;
    image_05.src = `images/FrostedGlassBlue/black/5.jpg`;

    summary_image.src = `images/blue/black/1.jpg`;
});

selectBLUE.addEventListener('click', function() {
    currrentColor = "Blue"
    paragraph_1.innerHTML = "Blue"

    image.src = `images/blue/black/1.jpg`;
    image_02.src = `images/blue/black/2.jpg`;
    image_03.src = `images/blue/black/3.jpg`;
    image_04.src = `images/blue/black/4.jpg`;
    image_05.src = `images/blue/black/5.jpg`;

    summary_image.src = `images/blue/black/1.jpg`;
});

selectPurple.addEventListener('click', function() {
    currrentColor = "Purple"
    paragraph_1.innerHTML = "Purple"

    image.src = `images/purple/black/1.jpg`;
    image_02.src = `images/purple/black/2.jpg`;
    image_03.src = `images/purple/black/3.jpg`;
    image_04.src = `images/purple/black/4.jpg`;
    image_05.src = `images/purple/black/5.jpg`;

    summary_image.src = `images/purple/black/1.jpg`;
});

selectGreen.addEventListener('click', function() {
    currrentColor = "Green"
    paragraph_1.innerHTML = "Green"

    image.src = `images/green/black/1.jpg`;
    image_02.src = `images/green/black/2.jpg`;
    image_03.src = `images/green/black/3.jpg`;
    image_04.src = `images/green/black/4.jpg`;
    image_05.src = `images/green/black/5.jpg`;

    summary_image.src = `images/green/black/1.jpg`;
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
    tabContents.forEach(tabContent => {
        tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
        tab.classList.remove('active')
    })

    tyres.classList.add('active')
    brakes_tab.classList.add('active')
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
    goToSlide(0)
    brakeColor = "Black"
    paragraph_2.innerHTML = "Black"
    if(currrentColor == 'Black' ){
        image.src = `images/Black/black/1.jpg`;
        image_02.src = `images/Black/black/2.jpg`;
        image_03.src = `images/Black/black/3.jpg`;
        image_04.src = `images/Black/black/4.jpg`;
        // image_05.src = `images/Black/black/5.jpg`;

        summary_image.src = `images/Black/black/1.jpg`;;
    }
    else if(currrentColor == 'Frosted' ){
        image.src = `images/FrostedGlassBlue/black/1.jpg`;
        summary_image.src = `images/FrostedGlassBlue/black/1.jpg`;
        image_02.src = `images/FrostedGlassBlue/black/2.jpg`;
        image_03.src = `images/FrostedGlassBlue/black/3.jpg`;
        image_04.src = `images/FrostedGlassBlue/black/4.jpg`;
        // image_05.src = `images/FrostedGlassBlue/black/5.jpg`;
    }
    else if(currrentColor == 'Blue' ){
        image.src = `images/blue/black/1.jpg`;
        summary_image.src = `images/blue/black/1.jpg`;
        image_02.src = `images/blue/black/2.jpg`;
        image_03.src = `images/blue/black/3.jpg`;
        image_04.src = `images/blue/black/4.jpg`;
        // image_05.src = `images/blue/black/5.jpg`;
    }
    else if(currrentColor == 'Purple' ){
        image.src = `images/purple/black/1.jpg`;
        summary_image.src = `images/purple/black/1.jpg`;
        image_02.src = `images/purple/black/2.jpg`;
        image_03.src = `images/purple/black/3.jpg`;
        image_04.src = `images/purple/black/4.jpg`;
        // image_05.src = `images/purple/black/5.jpg`;
    }
    else if(currrentColor == 'Green' ){
        image.src = `images/green/black/1.jpg`;
        summary_image.src = `images/green/black/1.jpg`;
        image_02.src = `images/green/black/2.jpg`;
        image_03.src = `images/green/black/3.jpg`;
        image_04.src = `images/green/black/4.jpg`;
        // image_05.src = `images/green/black/5.jpg`;
    }
});

tyre_2.addEventListener('click', function() {
    goToSlide(0)
    brakeColor = "Silver"
    paragraph_2.innerHTML = "Silver"
    if(currrentColor == 'Black' ){
        image.src = `images/Black/silver/1.jpg`;
        summary_image.src = `images/Black/silver/1.jpg`;
        image_02.src = `images/Black/silver/2.jpg`;
        image_03.src = `images/Black/silver/3.jpg`;
        image_04.src = `images/Black/silver/4.jpg`;
        // image_05.src = `images/Black/silver/5.jpg`;
    }
    else if(currrentColor == 'Frosted' ){
        image.src = `images/FrostedGlassBlue/silver/1.jpg`;
        summary_image.src = `images/FrostedGlassBlue/silver/1.jpg`;
        image_02.src = `images/FrostedGlassBlue/silver/2.jpg`;
        image_03.src = `images/FrostedGlassBlue/silver/3.jpg`;
        image_04.src = `images/FrostedGlassBlue/silver/4.jpg`;
        // image_05.src = `images/FrostedGlassBlue/silver/5.jpg`;
    }
    else if(currrentColor == 'Blue' ){
        summary_image.src = `images/blue/silver/1.jpg`;
        image.src = `images/blue/silver/1.jpg`;
        image_02.src = `images/blue/silver/2.jpg`;
        image_03.src = `images/blue/silver/3.jpg`;
        image_04.src = `images/blue/silver/4.jpg`;
        // image_05.src = `images/blue/silver/5.jpg`;
    }
    else if(currrentColor == 'Purple' ){
        summary_image.src = `images/purple/silver/1.jpg`;
        image.src = `images/purple/silver/1.jpg`;
        image_02.src = `images/purple/silver/2.jpg`;
        image_03.src = `images/purple/silver/3.jpg`;
        image_04.src = `images/purple/silver/4.jpg`;
        // image_05.src = `images/purple/silver/5.jpg`;
    }
    else if(currrentColor == 'Green' ){
        summary_image.src = `images/green/silver/1.jpg`;
        image.src = `images/green/silver/1.jpg`;
        image_02.src = `images/green/silver/2.jpg`;
        image_03.src = `images/green/silver/3.jpg`;
        image_04.src = `images/green/silver/4.jpg`;
        // image_05.src = `images/green/silver/5.jpg`;
    }
});

tyre_3.addEventListener('click', function() {
    goToSlide(0)
    brakeColor = "Blue"
    paragraph_2.innerHTML = "Blue"
    if(currrentColor == 'Black' ){
        summary_image.src = `images/Black/blue/1.jpg`;
        image.src = `images/Black/blue/1.jpg`;
        image_02.src = `images/Black/blue/2.jpg`;
        image_03.src = `images/Black/blue/3.jpg`;
        image_04.src = `images/Black/blue/4.jpg`;
        // image_05.src = `images/Black/blue/5.jpg`;
    }
    else if(currrentColor == 'Frosted' ){
        summary_image.src = `images/FrostedGlassBlue/blue/1.jpg`;
        image.src = `images/FrostedGlassBlue/blue/1.jpg`;
        image_02.src = `images/FrostedGlassBlue/blue/2.jpg`;
        image_03.src = `images/FrostedGlassBlue/blue/3.jpg`;
        image_04.src = `images/FrostedGlassBlue/blue/4.jpg`;
        // image_05.src = `images/FrostedGlassBlue/blue/5.jpg`;
    }
    else if(currrentColor == 'Blue' ){
        summary_image.src = `images/blue/blue/1.jpg`;
        image.src = `images/blue/blue/1.jpg`;
        image_02.src = `images/blue/blue/2.jpg`;
        image_03.src = `images/blue/blue/3.jpg`;
        image_04.src = `images/blue/blue/4.jpg`;
        // image_05.src = `images/blue/blue/5.jpg`;
    }
    else if(currrentColor == 'Purple' ){
        summary_image.src = `images/purple/blue/1.jpg`;
        image.src = `images/purple/blue/1.jpg`;
        image_02.src = `images/purple/blue/2.jpg`;
        image_03.src = `images/purple/blue/3.jpg`;
        image_04.src = `images/purple/blue/4.jpg`;
        // image_05.src = `images/purple/blue/5.jpg`;
    }
    else if(currrentColor == 'Green' ){
        summary_image.src = `images/green/blue/1.jpg`;
        image.src = `images/green/blue/1.jpg`;
        image_02.src = `images/green/blue/2.jpg`;
        image_03.src = `images/green/blue/3.jpg`;
        image_04.src = `images/green/blue/4.jpg`;
        // image_05.src = `images/green/blue/5.jpg`;
    }
});


tyre_4.addEventListener('click', function() {
    goToSlide(0)
    brakeColor = "Yellow"
    paragraph_2.innerHTML = "Yellow"
    if(currrentColor == 'Black' ){
        summary_image.src = `images/Black/yellow/1.jpg`;
        image.src = `images/Black/yellow/1.jpg`;
        image_02.src = `images/Black/yellow/2.jpg`;
        image_03.src = `images/Black/yellow/3.jpg`;
        image_04.src = `images/Black/yellow/4.jpg`;
        // image_05.src = `images/Black/yellow/5.jpg`;
    }
    else if(currrentColor == 'Frosted' ){
        summary_image.src = `images/FrostedGlassBlue/yellow/1.jpg`;
        image.src = `images/FrostedGlassBlue/yellow/1.jpg`;
        image_02.src = `images/FrostedGlassBlue/yellow/2.jpg`;
        image_03.src = `images/FrostedGlassBlue/yellow/3.jpg`;
        image_04.src = `images/FrostedGlassBlue/yellow/4.jpg`;
        // image_05.src = `images/FrostedGlassBlue/yellow/5.jpg`;
    }
    else if(currrentColor == 'Blue' ){
        summary_image.src = `images/blue/yellow/1.jpg`;
        image.src = `images/blue/yellow/1.jpg`;
        image_02.src = `images/blue/yellow/2.jpg`;
        image_03.src = `images/blue/yellow/3.jpg`;
        image_04.src = `images/blue/yellow/4.jpg`;
        // image_05.src = `images/blue/yellow/5.jpg`;
    }
    else if(currrentColor == 'Purple' ){
        summary_image.src = `images/purple/yellow/1.jpg`;
        image.src = `images/purple/yellow/1.jpg`;
        image_02.src = `images/purple/yellow/2.jpg`;
        image_03.src = `images/purple/yellow/3.jpg`;
        image_04.src = `images/purple/yellow/4.jpg`;
        // image_05.src = `images/purple/yellow/5.jpg`;
    }
    else if(currrentColor == 'Green' ){
        summary_image.src = `images/green/yellow/1.jpg`;
        image.src = `images/green/yellow/1.jpg`;
        image_02.src = `images/green/yellow/2.jpg`;
        image_03.src = `images/green/yellow/3.jpg`;
        image_04.src = `images/green/yellow/4.jpg`;
        // image_05.src = `images/green/yellow/5.jpg`;
    }
});


tyre_5.addEventListener('click', function() {
    goToSlide(0)
    brakeColor = "orange"
    paragraph_2.innerHTML = "Orange"
    if(currrentColor == 'Black' ){
        summary_image.src = `images/Black/orange/1.jpg`;
        image.src = `images/Black/orange/1.jpg`;
        image_02.src = `images/Black/orange/2.jpg`;
        image_03.src = `images/Black/orange/3.jpg`;
        image_04.src = `images/Black/orange/4.jpg`;
        // image_05.src = `images/Black/orange/5.jpg`;
    }
    else if(currrentColor == 'Frosted' ){
        summary_image.src = `images/FrostedGlassBlue/orange/1.jpg`;
        image.src = `images/FrostedGlassBlue/orange/1.jpg`;
        image_02.src = `images/FrostedGlassBlue/orange/2.jpg`;
        image_03.src = `images/FrostedGlassBlue/orange/3.jpg`;
        image_04.src = `images/FrostedGlassBlue/orange/4.jpg`;
        // image_05.src = `images/FrostedGlassBlue/orange/5.jpg`;
    }
    else if(currrentColor == 'Blue' ){
        summary_image.src = `images/blue/orange/1.jpg`;
        image.src = `images/blue/orange/1.jpg`;
        image_02.src = `images/blue/orange/2.jpg`;
        image_03.src = `images/blue/orange/3.jpg`;
        image_04.src = `images/blue/orange/4.jpg`;
        // image_05.src = `images/blue/orange/5.jpg`;
    }
    else if(currrentColor == 'Purple' ){
        summary_image.src = `images/purple/orange/1.jpg`;
        image.src = `images/purple/orange/1.jpg`;
        image_02.src = `images/purple/orange/2.jpg`;
        image_03.src = `images/purple/orange/3.jpg`;
        image_04.src = `images/purple/orange/4.jpg`;
        // image_05.src = `images/purple/orange/5.jpg`;
    }
    else if(currrentColor == 'Green' ){
        summary_image.src = `images/green/orange/1.jpg`;
        image.src = `images/green/orange/1.jpg`;
        image_02.src = `images/green/orange/2.jpg`;
        image_03.src = `images/green/orange/3.jpg`;
        image_04.src = `images/green/orange/4.jpg`;
        // image_05.src = `images/green/orange/5.jpg`;
    }
});


// .........................................................................

stitch.addEventListener("click",function (){
    stitchColor = "Orange"
    paragraph_3.innerHTML = "Orange"
    image_05.src = `images/blue/black/6.jpg`;
    goToSlide(3)
})
stitch_2.addEventListener("click",function (){
    stitchColor = "Blue"
    paragraph_3.innerHTML = "Blue"
    image_05.src = `images/blue/black/5.jpg`;
    goToSlide(4)
})
stitch_3.addEventListener("click",function (){
    stitchColor = "Yellow"
    paragraph_3.innerHTML = "Yellow"
    image_05.src = `images/blue/black/8.jpg`;
    goToSlide(4)
})
stitch_4.addEventListener("click",function (){
    stitchColor = "Red"
    paragraph_3.innerHTML = "Red"
    image_05.src = `images/blue/black/7.jpg`;
    goToSlide(4)
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

// brakes_tab.addEventListener("click",function (){
//     goToSlide(0)
//     if(currrentColor === 'Black' ){
//         image_04.src = `images/tyre_black.jpg`;
//     }
//     else if(currrentColor === 'white' ){
//         image_04.src = `images/tyre_polarwhite.jpg`;
//     }
//     else if(currrentColor == 'metallic' ){
//         image_04.src = `images/tyre_cardinalredmetallic.jpg`;
//     }
//     else if(currrentColor == 'grey' ){
//         image_04.src = `images/tyre_SeleniteGreyMetallic.jpg`;
//     }
// })

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

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five-digit number for the contact_number variable
        // this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps

        let lastName = document.getElementById('lastname').value
        let email = document.getElementById('email').value
        let number = document.getElementById('number').value
        let code = document.getElementById('code').value
        let municipality = document.getElementById('municipality').value

        var templateParams = {
            lastname: lastName,
            email: email,
            number: number,
            code: code,
            municipality: municipality,
            colour: currrentColor,
            brakeColour: brakeColor,
            stitchColor: stitchColor,
        };

        console.log(templateParams)

        emailjs.send('service_cbj0pau', 'template_ij0n8ef', templateParams)
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}