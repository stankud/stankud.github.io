var app = app || {};

app.ProjectCollectionView = Backbone.View.extend({
	render: function(){
		this.collection.forEach(function(project){
			var projectView = new app.ProjectView({model: project});
			this.$el.append(projectView.el);
		}, this);	
	}
});

