const SongModel = Backbone.Model.extend({
  defaults: {
    image: '../core/assets/up-all-night-small.png',
    songAuthor: 'Anonim',
    songLength: 0,
    songListened: 0,
    songTitle: 'Title Song',
  },
});

export { SongModel };
