// slider-code start
$(document).ready(function(){
    $('.frist-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay:true,
    autoplayTimeout:7000,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });

  $('.secend-slider').owlCarousel({
    loop:true,
    margin:15,
    nav:true,
    dots:false,
    autoplay:true,
    autoplayTimeout:5000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});

$('.slider-three').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    autoplay:true,
    autoplayTimeout:5000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})
  });
 

// slider-code end


// shurt three code start 
let number = document.getElementById("number1");
let counter = 0;

setInterval(()=>{
    if(counter == 2968){
        clearInterval();
    } else{
        counter += 1;
        number.innerHTML = counter;
    }
},0.00);

let number1 = document.getElementById("number2");
let counter1 = 0;

setInterval(()=>{
    if(counter1 == 540){
        clearInterval();
    } else{
        counter1 += 1;
        number1.innerHTML = counter;
    }
},10.00);

let number2 = document.getElementById("number3");
let counter2 = 0;

setInterval(()=>{
    if(counter2 == 4374){
        clearInterval();
    } else{
        counter2 += 1;
        number2.innerHTML = counter;
    }
},1);


let number3 = document.getElementById("number4");
let counter3 = 0;

setInterval(()=>{
    if(counter3 == 200){
        clearInterval();
    } else{
        counter3 += 1;
        number3.innerHTML = counter;
    }
},1);
// shurt three code end 





let getButton = document.getElementById("get-pro-btn");
let getBox = document.getElementById("get-pro-box");

getBox.style.right="-250px";
getButton.addEventListener("click",()=>{
    if(getBox.style.right=="-250px"){
        getBox.style.right="-0";
    }
    else{
        getBox.style.right="-250px";
    }

});



// preloader code 











