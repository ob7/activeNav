//targets active class on main navigation menu items
navID = 'mainNav'; // main nav contain must have an ID, put it here
targetHome = true; // if home link is present in main nav, set this to true
var activeNav_nav_items = document.getElementById(navID).getElementsByTagName('a');
var activeNav_location = [window.location.protocol,window.location.host,window.location.pathname];

function activeNav() {
	console.log(activeNav_location[0]); //protocol;
	console.log(activeNav_location[1]); //base url
	console.log(activeNav_location[2]); //current link
	var currentLocation = activeNav_location[2];
	console.log("current location is " + currentLocation);

	if ( targetHome == true && currentLocation == '/' ) {
			console.log("you are at home");
			activeNav_nav_items[0].classList.add("active");
	} else {
		for (i = 0; i < activeNav_nav_items.length; i++) {
			//console.log("found link " + activeNav_nav_items[i]);
			var navItem = String(activeNav_nav_items[i]);
			//console.log("we have a navItem of " + navItem + " with type of " + typeof navItem);
			if ( ~navItem.indexOf(currentLocation)) {
				console.log("you are at " + activeNav_nav_items[i]);
				activeNav_nav_items[i].classList.add("active");
			} else {
				//console.log("no classes applied to main nav");
			}
		}
	}
}
window.addEventListener('load', function() {
	activeNav();
});
