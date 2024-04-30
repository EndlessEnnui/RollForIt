let song = document.querySelector("#song");
let playBtn = document.querySelector("play-button");

play.addEventListener('click', function (){
    song.play();
})

song.onloadeddata = function(){
    play.style.visibility = "visible";
}