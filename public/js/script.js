const flipCardContainer = document.querySelector(".flip-card-container");
const no = document.querySelector(".no");
const info = document.querySelector(".info");
const yes = document.querySelector(".yes");
const return1 = document.querySelector(".return1");
const return2 = document.querySelector(".return2");
const no2 = document.querySelector(".no2");


no.addEventListener("click", function() {
    flipCardContainer.classList.add ("option-3");
    flipCardContainer.classList.add ("flip");
    console.log('NOPEE')
});

info.addEventListener("click", function() {
    flipCardContainer.classList.add ("option-2");
    flipCardContainer.classList.add ("flip");

    console.log('INFOOOOO')
});

yes.addEventListener("click", function() {
    flipCardContainer.classList.add ("option-1");
    flipCardContainer.classList.add ("flip");

    console.log('YESSSS')
});

return1.addEventListener("click", function() {
    flipCardContainer.classList.remove ("option-1");
    flipCardContainer.classList.remove ("flip");

    console.log('BACKKK')
});

no2.addEventListener("click", function() {
    flipCardContainer.classList.remove ("option-3");
    flipCardContainer.classList.remove ("flip");

    console.log('FRONTTT')
});

return2.addEventListener("click", function() {
    flipCardContainer.classList.remove ("option-2");
    flipCardContainer.classList.remove ("flip");

    console.log('FRONTTT')
});

$('a').mouseover(function(){
    $('span:first-child').hide();
  });
  $('a').mouseleave(function(){
    $('span:first-child').fadeIn(400);
  });
