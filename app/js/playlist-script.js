
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
   this.songAuthor = dataSong.songAuthor;
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

var transformInMinutes = function (val){
  var min = val / 60;
  var minute = min.toFixed(0) + ":" + val % 60;
  return minute;
};

function createPlaylist(Playlist, listElement ){

  for(var i=0; i < Playlist.length; i++){
        // var newP = document.createElement("P");
        // var newDiv = document.createElement('afisAtr');
        var newDiv = document.createElement('div');

        newDiv.innerHTML =  '<img src= "' + Playlist[i].image +'"> '+ " title: "+ Playlist[i].songTitle + " Author: " + Playlist[i].songAuthor + " Length: " + transformInMinutes(Playlist[i].songLength) + " Listened " +  Playlist[i].songListened;

        // newP.innerHTML = Playlist[i].image;
        // newP.innerHTML = Playlist[i].songTitle;
        // newP.innerHTML = Playlist[i].songAuthor;
        // newP.innerHTML = Playlist[i].songLength;
        // newP.innerHTML = Playlist[i].songListened;

        document.getElementById("afisAtr").appendChild(newDiv);           // Append <p> to <div> with id="afisAtr"
        // newDiv.insertBefore(document.createElement("P"), newDiv.firstChild);
        // listElement.appendChild(newDiv);
  }
}
