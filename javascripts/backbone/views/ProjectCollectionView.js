var app = app || {};

app.ProjectCollectionView = Backbone.View.extend({
	render: function(){
		this.collection.forEach(function(project){
			var projectView = new app.ProjectView({model: project});
			console.log(this.$el);
			this.$el.append(projectView.el);
		}, this);	
	}
});

