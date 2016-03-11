# activeNav
Adds an active class to a tag in nav element if the link is current page.

Works on markup like this:

`<nav>
  <ul>
    <li>
      <a href="/">Home</a>
    </li>
    <li>
      <a href="/somewhere"><a>
    </li>
  </ul>
</nav>`
The script will automatically apply the class to the Home a tag if you are at the index, if you are at somewhere, then somewhere will have the class added to it instead.

The file is pure javascript. It targets all a tags within an ID, so if your main menu has an ID, all you do is supply that, and the file will target all the a tags within it.  If your home link is not apart of the main menu, you can disable it with targetHome = false;.
