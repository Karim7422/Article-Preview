let shareBtn = document.querySelector(".share-btn");
let socialIconsBox = document.querySelector(".share");

shareBtn.addEventListener("click", function () {
  socialIconsBox.classList.toggle("d-none");
  shareBtn.style.color="white"
  shareBtn.style.backgroundColor="hsl(214, 17%, 51%)"

  if(socialIconsBox.classList.contains("d-none")){
    shareBtn.removeAttribute("style")
  }
});
