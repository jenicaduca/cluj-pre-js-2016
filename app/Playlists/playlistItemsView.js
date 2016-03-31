const PlaylistItemView = Backbone.View.extend({
  className: 'playlist',
  template() {
    const fn = _.template($('script#playlist-view-items').html());
    return fn.apply(this, arguments);
  },
  render() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },
});


const PlaylistsView = Backbone.View.extend({
  template: _.template("<div class='playlist' id = 'align-box'></div>"),
  _nestedView: [],
  renderNestedView(view, el) {
    this._nestedView.push(view);
    el.append(view.el);
  },
  render() {
    this.$el.html(this.template);
    const that = this;
    const partEl = $(this.el.querySelector('.playlist'));
    this.collection.forEach(function(model) {
      const songView = new PlaylistItemView({
        model,
      });
      songView.render();
      that.renderNestedView(songView, partEl);
    });
  },
});

export { PlaylistItemView, PlaylistsView };
