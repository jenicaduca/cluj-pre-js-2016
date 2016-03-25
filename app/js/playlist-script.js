
var parsedPlaylist=JSON.parse(playlistsJSON);

nrPlaylist = parsedPlaylist.length;



function Playlist(dataPlaylist){
  this.id = dataPlaylist.id;
  this.title = dataPlaylist.title;
  this.image = dataPlaylist.image;
  this.songs = [];
  for(var i=0; i< dataPlaylist.songs.length; i++){

       this.songs.push(new Song(dataPlaylist.songs[i]));
   }

}



function Song(dataSong){
   this.image = dataSong.image;
   this.songAuthorauthor = dataSong.songAuthor;
   this.songLength = dataSong.songLength;
   this.songListened = dataSong.songListened;
   this.songTitle = dataSong.songTitle;
}


// function get for Song
Song.prototype.getImage = function(){
   return this.image;
 };

 Song.prototype.getSongTitle = function(){
    return this.songTitle;
  };
Song.prototype.getSongLength = function(){
   return this.songLength;
 };

 Song.prototype.getSongListened = function(){
    return this.songListened;
  };

 Song.prototype.getSongAuthor = function(){
   return this.songAuthor;
 };

// function set for Song
Song.prototype.setImage = function(imag){
   this.image = imag;
 };

 Song.prototype.setSongTitle = function(titlu){
    this.songTitle = titlu;
  };
Song.prototype.setSongLength = function(len){
   this.songLength = len;
 };

 Song.prototype.getSongListened = function(lis){
    this.songListened = lis;
  };

 Song.prototype.getSongAuthor = function(auth){
   this.songAuthor = auth;
 };


var playlist=[];
var songList =[];

for( var i = 0; i < nrPlaylist; i++){
    playlist[i]=new Playlist(parsedPlaylist[i]);
    console.log(playlist[i]);
}

// pt playlist-page
function afisare(id){
  var obj = document.getElementById(id);
  var buton = document.getElementById('afiseaza');
  if(obj.style.visibility == 'visible')
    {
      obj.style.visibility = 'hidden';
  }  else
     {
     obj.style.visibility = 'visible';
  }
console.log(parsedPlaylist[0]);
var listEl =document.getElementById('mySongs');
createPlaylist(parsedPlaylist[0].songs, listEl);

}

// var nrSongs = parsedPlaylist[0].songs.length;

function createPlaylist(Playlist, listElement ){

  // for(var i=0; i < Playlist.length; i++){
        var newP = document.createElement("P");
        var newDiv = document.createElement('afisAtr');

        newP.innerHTML = Playlist[0].image;
        newP.innerHTML = Playlist[0].songTitle;
        newP.innerHTML = Playlist[0].songAuthor;
        newP.innerHTML = Playlist[0].songLength;
        newP.innerHTML = Playlist[0].songListened;

        // document.getElementById("afisAtr").appendChild(newP);           // Append <p> to <div> with id="afisAtr"
        newDiv.insertBefore(document.createElement("P"), newDiv.firstChild);
        // listElement.appendChild(newDiv);
  // }
}
