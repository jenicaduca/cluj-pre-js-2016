const SongListItemView = Backbone.View.extend({
  tagName: 'tr',
  className: 'song-items',
  template() {
    const fn = _.template($('script#song-view-items').html());
    return fn.apply(this, arguments);
  },
  render() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },
});

const SongsListView = Backbone.View.extend({
  template: _.template("<table class='song-items'></table>"),
  _nestedView: [],
  renderNestedView(view, el) {
    this._nestedView.push(view);
    el.append(view.el);
  },
  render() {
    this.$el.html(this.template);
    const that = this;
    const partEl = $(this.el.querySelector('.song-items'));
    this.collection.forEach(function(model) {
      const songView = new SongListItemView({
        model,
      });
      songView.render();
      that.renderNestedView(songView, partEl);
    });
  },
});

export { SongListItemView, SongsListView };
