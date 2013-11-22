var app = app || {};

$(function() {
	// fade the page in
	$('.container').fadeIn('slow');
	// skills slide in
	d3.selectAll('.skill').transition()
	.duration(1000)
	.delay(function(d,i){ return i * 350; })
	.style('margin-left', '0px');
	// first name slide
	d3.select('.name').transition()
	.duration(2000)
	.style('margin-left', '0px');
	// last name slide
	d3.select('.spacing').transition()
	.duration(2000)
	.style('margin', '0px 0px');

	// projects data
	projects = [
			{
				name: "Rynoq",
				description: "Scare and excite the financial sector with an animation of their role.",
				demo_url: "http://rynoq.com/stocks",
				github_url: "https://github.com/stankud/Rynoq",
				image_url: "images/ryn_550.png",
				tech1: " Rails 4",
				tech2: " Backbone.js/D3.js",
				tech3: " MongoDB"
			},
			{
				name: "Planetary Defense",
				description: "Defend the earth from asteroids and your friend's text messages.",
				demo_url: "http://planetarydefendr.com/",
				github_url: "https://github.com/stankud/planetary_defender",
				image_url: "images/pd_screen_550.png",
				tech1: " Rails/Devise",
				tech2: " Kinetic.js",
				tech3: " PostgreSQL"
			},
			{
				name: "Swap Junky",
				description: "Swap your skills for other users' skills.",
				demo_url: "http://swapjunky.heroku.com/",
				github_url: "https://github.com/stankud/swap_junky",
				image_url: "images/sj_screen_550.png",
				tech1: " Rails/Devise",
				tech2: " Twitter Boostrap",
				tech3: " PostgreSQL"
			}
	]
	// set up a project collection and add data
	app.projectCollection = new app.ProjectCollection();
	app.projectCollection.reset(projects);
	// setup and render a collection view
	app.projectCollectionView = new app.ProjectCollectionView(
		{collection: app.projectCollection, el: $('#project-list')}
	);
	app.projectCollectionView.render();
});