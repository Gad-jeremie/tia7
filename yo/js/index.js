var dropDown = document.querySelector(".viewMoreX");
var ele = document.querySelector(".dropDownX");
var wrapper = document.querySelector(".wrapperX");

wrapper.addEventListener("click", function(e){
  if(e.target == dropDown) {
    ele.classList.add("activeX");
    console.log('activate menu');
  }
  else {
    ele.classList.remove("activeX");
    console.log('de-activate menu');
  }
})