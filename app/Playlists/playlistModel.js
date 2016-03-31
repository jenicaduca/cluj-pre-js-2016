const PlaylistModel = Backbone.Model.extend({
  defaults: {
    id: 0,
    title: 'Playlist',
    image: '../core/assets/up-all-night-small.png',
    songs: ['song1', 'song2'],
  },
});

export { PlaylistModel };
