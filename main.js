onload = () =>{
        document.body.classList.remove("container");
};

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

document.addEventListener("click", () => {
  const audio = document.getElementById("audioPlayer");
  audio.muted = false; 
  audio.play();
}, { once: true }); 
function hideButton() {
  document.getElementById("myButton").style.display = "none";
}