const SongListItemView = Backbone.View.extend({
  // className: 'song-items',
  template() {
    const fn = _.template($('script#song-view-items').html());
    return fn.apply(this, arguments);
  },
  render() {
    console.log('????viewSong');
    this.$el.html(this.template(this.model.attributes));
    return this.model;
  },
});


export { SongListItemView };
