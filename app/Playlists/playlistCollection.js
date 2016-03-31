import { PlaylistModel } from './playlistModel.js';
const PlaylistItems = Backbone.Collection.extend({
  model: PlaylistModel,
});

export { PlaylistItems };
