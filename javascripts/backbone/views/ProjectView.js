var app = app || {}

app.ProjectView = Backbone.View.extend({
	initialize: function(){
		this.render();
	},

	render: function(){
		var template = _.template($("#project-template").html(), {});
		console.log(template);
		this.$el.append( template );
	},

	events: {
		"mouseover .screen-shot": "fadeIn",
		"mousout": "fadeOut"
	},
	fadeIn: function ( event ){
		console.log('fadein');
	},
	fadeIn: function ( event ){
		console.log('fadeout');
	}
});