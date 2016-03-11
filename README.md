# activeNav
Adds an active class to a tag in nav element if the link is current page.

Works on markup like this:

```
<nav>
  <ul>
    <li>
      <a href="/">Home</a>
    </li>
    <li>
      <a href="/somewhere"><a>
    </li>
  </ul>
</nav>
```
The script will automatically apply the class to the Home a tag if you are at the index, if you are at somewhere, then somewhere will have the class added to it instead.

The file is pure javascript. It targets all a tags within an ID, so if your main menu has an ID, all you do is supply that, and the file will target all the a tags within it.  If your home link is not apart of the main menu, you can disable it with targetHome = false;.

```
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
```
