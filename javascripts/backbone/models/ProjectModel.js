var app = app || {};

app.ProjectModel = Backbone.Model.extend({
	defaults: {
		name: "Not Specified",
		description: "Not Specified",
		demo_url: "#",
		github_url: "#",
		image_url: "#"
	}
});