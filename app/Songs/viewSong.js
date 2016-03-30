var SongListItemView = Backbone.View.extend({
  tagName: 'tr',
   className: 'song-items',
  template: function(){
  var fn = _.template($('script#song-view-items').html());
   return fn.apply(this, arguments);
 },
  render: function () {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});

var SongsListView = Backbone.View.extend({

  template:_.template("<table class='song-items'></table>"),
  _nestedView: [],
  renderNestedView: function(view, el) {
    this._nestedView.push(view);
    el.append(view.el);
  },
  render: function () {
    this.$el.html(this.template);
    var that = this;
    var partEl = $(this.el.querySelector('.song-items'));
    this.collection.forEach(function(model) {
        var songView = new SongListItemView({
          model: model
        });
    songView.render();
     that.renderNestedView(songView, partEl);
    });
 }
});
