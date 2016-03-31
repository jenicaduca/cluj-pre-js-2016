import { PlaylistItems } from './Playlists/playlistCollection.js';
import { PlaylistsView } from './Playlists/playlistItemsView.js';

import { SongsItem } from './Songs/collectionSong.js';
import { SongsListView } from './Songs/viewSong';

function playlistSongs() {
  const playlistJSON = [
    {
      id: 0,
      title: 'Playlist 1',
      image: '../core/assets/up-all-night-small.png',
      songs: ['song1', 'song2', 'song3'],
    },
    {
      id: 1,
      title: 'Playlist 2',
      image: '../core/assets/up-all-night-small.png',
      songs: ['song1', 'song2', 'song3'],
    },
    {
      id: 3,
      title: 'Playlist 3',
      image: '../core/assets/up-all-night-small.png',
      songs: ['song1', 'song2', 'song3'],
    },
  ];
  const play = new PlaylistItems();
  play.set(playlistJSON);
  // console.log(play);
  const playlistView = new PlaylistsView({
    el: document.getElementById('allPlaylists'),
    collection: play,
  });
  playlistView.render();
  const songJSON = [
    {
      image: '../core/assets/up-all-night-small.png',
      songAuthor: 'Smiley',
      songLength: 74,
      songListened: 82,
      songTitle: 'love love enemies love',
    },
    {
      image: '../core/assets/up-all-night-small.png',
      songAuthor: 'Dr. Dre',
      songLength: 186,
      songListened: 78,
      songTitle: 'love love enemies pierdut',
    },
    {
      image: '../core/assets/up-all-night-small.png',
      songAuthor: 'Andra',
      songLength: 303,
      songListened: 94,
      songTitle: 'ea money pierdut ea',
    },
  ];
  const song = new SongsItem();
  song.set(songJSON);
  // console.log(song);
  const songView = new SongsListView({
    el: document.getElementById('showSongs'),
    collection: song,
  });
  songView.render();
}
export { playlistSongs };
