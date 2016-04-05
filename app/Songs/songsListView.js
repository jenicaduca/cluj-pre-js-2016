import { SongListItemView } from './viewSong.js';
const SongsListView = Backbone.View.extend({
  // template: _.template("#tableSongs"),
  template() {
    const fn = _.template($('#songs-playlist').html());
    return fn.apply(this, arguments);
  },
  _nestedView: [],
  renderNestedView(view, el) {
    console.log(el, view, '/////');
    this._nestedView.push(view);
    el.append(view);
  },
  // _nestedView: [],
  // renderNestedView(view, el) {
  //   this._nestedView.push(view);
  //   el.append(view.el);
  // },
  // render() {
  //   this.$el.html(this.template);
  //   const that = this;
  //   const partEl = $(this.el.querySelector('.song-items'));
  // },
  render() {
    this.$el.html(this.template(this.collection));
    var self = this;
   // this.childView.$el = this.$('.showSongs');
   console.log('!!!!!', this, '////', this.collection);
    this.collection.models.forEach(function (model) {
      console.log(model);
      const songView = new SongListItemView({
        model,
        attributes: model.attributes
      });
      songView.$el = self.$('.showSongs');
      songView.render();
      self.renderNestedView(songView, self.$('.showSongs'));
    });

    return this.model;
  },
});

export { SongsListView }
