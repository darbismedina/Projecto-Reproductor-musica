const songList = [
{
   titulo:'Billie Jean',
   archivo:'Billie Jean.mp3',
   portada:'images.jpeg'
},

{
   titulo:'la flor',
   archivo:'la flor.mpeg',
   portada:'marcantony.jpeg'
},

{
   titulo:'voy a reir',
   archivo:'voyareir.mpeg',
   portada:'marcantony.jpeg'
},

]

// cancion atual
let  actualSong = null



//capturar elementos del Dom para trabajarlos con js
const songs = document.getElementById('songs');
const audio = document.getElementById("audio");
const cover = document.getElementById("cover");
const titulo = document.getElementById("titulo");
const play = document.getElementById("play");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

// Escuchar clicks en el boton play
play.addEventListener("click", () => {
   if(audio.paused){
      playSong();
   }else{
      pauseSong();
   }
})

//mostra listado de canciones
function loadSongs(){
   songList.forEach((song, index) => {
      //crear li
      const li = document.createElement("li");
      //criar a
      const link = document.createElement("a");
      // hidratar a 
      link.textContent = song.titulo
      link.href = "#"
      //escuchar click
      
      link.addEventListener("click", () => loadSong(index))  

      // añadir a li
      li.appendChild(link);
      // añadir li a ul
      songs.appendChild(li);
   })

}


// cargar cancion seleccionada
function loadSong(songIndex){
   if(songIndex !== actualSong){
   changeAtiveClas(actualSong, songIndex);
   actualSong = songIndex;
   audio.src = "./musica/" + songList[songIndex].archivo
   playSong()
   
   changeCover(songIndex);
   changeSongtitulo(songIndex);
   

   }
   
   

}

//actualizar controles
function updateControls(){
   if(audio.paused){
      play.classList.remove("fa-pause")
      play.classList.add("fa-play");
   }else{
      play.classList.add("fa-pause");
      play.classList.remove("fa-play");
}
  
}

// reproducir cancion
function playSong(){
   
  audio.play()
  updateControls();
}

// pausar cancion
function pauseSong(){
 
  audio.pause()
  updateControls();
}

// canviar classe activa
function changeAtiveClas(lasIndex, newIndex){
   const links = document.querySelectorAll("a");
   if(lasIndex !== null){
      links[lasIndex].classList.remove("active");
   }
   links[newIndex].classList.add("active");

}

//cambiar el cover a la cancion
function changeCover(songIndex){
   cover.src = "./imagen/" + songList[songIndex].portada
}

//cambiar titulo de la cancion
function changeSongtitulo(songIndex){
   titulo.innerText = songList[songIndex].titulo
}



// GO!

loadSongs()
