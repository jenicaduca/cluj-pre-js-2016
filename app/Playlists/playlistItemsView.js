var PlaylistItemView = Backbone.View.extend({
   className: 'playlist-items',
  template: function(){
  var fn = _.template($('script#playlist-view-items').html());
   return fn.apply(this, arguments);
 },
  render: function () {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});


var PlaylistsView = Backbone.View.extend({
  template:_.template("<div class='playlist-items'></div>"),
  _nestedView: [],
  renderNestedView: function(view, el) {
    this._nestedView.push(view);
    el.append(view.el);
  },
  render: function () {
    this.$el.html(this.template);
    var that = this;
    var partEl = $(this.el.querySelector('.playlist-items'));
    this.collection.forEach(function(model) {
        var songView = new PlaylistItemView({
          model: model
        });
    songView.render();
     that.renderNestedView(songView, partEl);
    });
 }
});
