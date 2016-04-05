import { SongsListView } from '../Songs/songsListView.js';
const PlaylistItemView = Backbone.View.extend({
  className: 'playlist',
  childView: new SongsListView(),
  template() {
    const fn = _.template($('script#playlist-view-items').html());
    return fn.apply(this, arguments);
  },
  render() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },
  events: {
  	'click button': 'displaySongs'
  },
  displaySongs: function(el) {
  	this.childView.$el = this.$('.playlist-details');
  	this.childView.collection = this.model.songs;
  	this.childView.model = this.model;
    this.childView.render();
  }
});

export { PlaylistItemView };
