import { Playlists } from './Playlists/playlistCollection.js';
import { PlaylistsView } from './Playlists/playlistView.js';
import { SongsListView } from './Songs/songsListView.js';
import { SongsItem } from './Songs/collectionSong.js';


function playlistSongs() {
  const playlists = new Playlists();
  playlists.fetch().done(() => {
    const playlistView = new PlaylistsView({
      el: document.querySelector('.playlists-container'),
      collection: playlists,
    });

    playlistView.render();
  });


  console.log(playlists);
}

export { playlistSongs };
