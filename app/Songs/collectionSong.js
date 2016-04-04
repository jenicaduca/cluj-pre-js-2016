import { SongModel } from './modelSong.js';
const SongsItem = Backbone.Collection.extend({
  model: SongModel,
});


export { SongsItem };
