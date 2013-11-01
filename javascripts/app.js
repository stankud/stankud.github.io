var app = app || {};

$(function() {
	// fade the page in
	$('.container').fadeIn('slow');
	// fade in/out screenshots
	$('.screen-shot').on('mouseover', function(){
		$(this).animate({opacity: 1});
	});
	$('.screen-shot').on('mouseout', function(){
		$(this).animate({opacity: 0.4});
	});
	// projects data
	projects = [
		{
				name: "Swap Junky",
				description: "Swap your skills for other users' skills.",
				demo_url: "http://swapjunky.heroku.com/",
				github_url: "https://github.com/stankud/swap_junky",
				image_url: "images/swap_junky_screen.png"
			},
			{
				name: "Planetary Defense",
				description: "Defend the earth from asteroids and your friend's text messages.",
				demo_url: "http://planetarydefense.herokuapp.com/",
				github_url: "https://github.com/stankud/planetary_defender",
				image_url: "images/pd_screen.png"
			},
			{
				name: "Workout App",
				description: "Log your workout progress.",
				demo_url: "http://workout-app.herokuapp.com/",
				github_url: "https://github.com/stankud/workout",
				image_url: "images/workout_screen.png"
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