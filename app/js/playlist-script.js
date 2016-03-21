
var parsatPlaylist=JSON.parse(playlistsJSON);


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


  console.log(parsatPlaylist);

  for (var i=0; i < parsatPlaylist[0].songs.length; i++)
  {
    var song= new Song(parsatPlaylist[0].songs[i]);
  }
}

function Song(dataSong){
   this.image = dataSong.image;
   this.songAuthorauthor = dataSong.songAuthor;
   this.songLength = dataSong.songLength;
   this.songListened = dataSong.songListened;
   this.songTitle = dataSong.songTitle;
}

Song.prototype.getImagee(image){
   return image;
 }

 Song.prototype.getSongTitle(songTitle){
    return songTitle;
  }
Song.prototype.getSongLength(songLength){
   return songLength;
 }

 Song.prototype.getSongListened(songListened){
    return songListened;
  }

 Song.prototype.getSongAuthor(songAuthor){
   return songAuthor;
 }

function Playlist(dataPlaylist){
  this.id = dataPlaylist.id;
  this.songs = [];
  this.title = dataPlaylist.itle;
}

Playlist.prototype.addSong=function(songAdded){
  this.songs.push(songAdded);
}
