<?php
//Rebuild original ultradox url using the 'id' parameter in the query string
$URL = "http://www.ultradox.com".htmlspecialchars($_GET["id"]);
//Call the ultradox url for processing
file_get_contents($URL);
//Redirect user to target url
header("Location: http://www.google.ca/");
?>