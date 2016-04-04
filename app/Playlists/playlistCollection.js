import { PlaylistModel } from './playlistModel.js';
import { SongsItem } from './../Songs/collectionSong.js';

const Playlists = Backbone.Collection.extend({
  model: PlaylistModel,
  url: 'http://localhost:3000/playlists',
  parse(playlistJSON) {
    return playlistJSON.map((val) => {
      const attrs = _.omit(val, 'songs');
      const play = new PlaylistModel(attrs);
      return play;
    });
    console.log(play)
  },
});

export { Playlists };
