const songList = [
{
   titulo:'Billie Jean',
   archivo:'Billie Jean.mp3',
   portada:'pizzacalabresa.png'
},

{
   titulo:'la flor',
   archivo:'la flor.mpeg',
   portada:'pizzacalabresa.png'
},

{
   titulo:'voy a reir',
   archivo:'voyareir.mpeg',
   portada:'Meu projeto.png'
},

]

//capturar elementos del Dom para trabajarlos con js
const songs = document.getElementById('songs');
const audio = document.getElementById("audio");

//mostra listado de canciones
function loadSongs(){
   songList.forEach((song, index) => {
      
      const li = document.createElement("li");
      const link = document.createElement("a");
      link.textContent = song.titulo
      link.href = "#"
      link.addEventListener("click", () => loadSong(index))
      li.appendChild(link);
      songs.appendChild(li);
   })

}


// cargar cancion seleccionada
function loadSong(songIndex){
   audio.src = "./musica/" + songList[songIndex].archivo
   audio.play()
   

}

// GO!

loadSongs()
