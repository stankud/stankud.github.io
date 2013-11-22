var app = app || {};

app.ProjectView = Backbone.View.extend({
	tagName: 'li',
	initialize: function(){
		this.render();
	},

	render: function(){
		var template = _.template($("#project-template").html());
		template = template(this.model.toJSON());
		this.$el.addClass('sixteen columns').append( template );
	},

	events: {
		"mouseover .screen-shot": "fadeIn",
		"mouseout .screen-shot": "fadeOut"
	},
	fadeIn: function ( event ){
		$(event.currentTarget).animate({opacity: 1});
	},
	fadeOut: function ( event ){
		$(event.currentTarget).animate({opacity: 0.4});
	}
});
