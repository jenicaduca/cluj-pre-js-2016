
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

  var table1 = document.getElementsByTagName('table')[0];

  var atributes = [];

  for(var i=0; i < Playlist.length; i++){

        var row =  document.createElement('tr');
        atributes[0] = Playlist[i].image;
        atributes[1] = Playlist[i].songTitle;
        atributes[2] = Playlist[i].songAuthor;
        atributes[3] = transformInMinutes(Playlist[i].songLength);
        atributes[4] = Playlist[i].songListened;



        for (var j = 0; j < 5 ; j++){
              var element = document.createElement("td");
           if(j === 0){
             // for image
             element.innerHTML ='<img src= "'+ atributes[0]+'">';
           }
            else if( j === 1){
                 element.innerHTML = atributes[j] +'<br>'+ "by : " + '<style= "collor: #708090">'+atributes[j+1];
                j++;
            }
            else   element.innerHTML = atributes[j];
            row.appendChild(element);
            }
              table1.appendChild(row);

     document.getElementsByTagName("table")[0].appendChild(row);
  }
}
