/* 
Copyright Time at Task Aps 2013. All rights reserved. David Andersen owns all the code you create for this project.

The purpose of this script is to handle renamed smartlinks, call the real ultradox link and redirect the user to a target url.
This is done by substituting building a URL to call by appending the "id" query string parameter to "www.ultradox.com"

The script expects a query string parameter called "id" 
The script calls ultradox with this "id" (which was the original link before renaming) and redirects the user to a target url.
*/

<?php
//Rebuild original ultradox url using the 'id' parameter in the query string
$URL = "http://www.ultradox.com".htmlspecialchars($_GET["id"]);
//Call the ultradox url for processing
file_get_contents($URL);
//Redirect user to target url
header("Location: http://ebogholderen.dk");
?>