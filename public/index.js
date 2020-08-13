var menu_button = document.getElementById("menu_button");
var close_btn = document.getElementById("close_btn");
var open_btn = document.getElementById("open_btn");
var mobile_wrapper = document.getElementById("mobile_wrapper");

menu_button.addEventListener("click", function(){
  if(close_btn.classList.contains("hide")){
    close_btn.classList.remove("hide");
    close_btn.classList.add("active");
    open_btn.classList.remove("avtive");
    open_btn.classList.add("hide");
    console.log("menu mobile active")
  }
  else{
    close_btn.classList.add("hide");
    close_btn.classList.remove("active");
    open_btn.classList.remove("hide");
    open_btn.classList.add("active");
    console.log("menu mobile hide")
  }
  if(mobile_wrapper.classList.contains("hide")){
    mobile_wrapper.classList.remove("hide");
  }
  else{
    mobile_wrapper.classList.add("hide");
  }
})
