/* 
Copyright Time at Task Aps 2013. All rights reserved. David Andersen owns all the code you create for this project.

The purpose of this script is to rename smartlinks generated by ultradox by substituting "www.ultradox.com" with "images.open-org.com/smartlink.php?id="

The script expects to recieve a JSON object from Ultradox with a "linkToTarget" key which has the URL generated by Ultradox
The script outputs a JSON object with a key "url" the value of which is the renamed link
*/

<?php
//Read JSON input string
$json = file_get_contents('php://input');
//Decode JSON data
$obj = json_decode($json,true);
//Build a new array with a "url" parameter the value of whcih is a renamed link
$data = array("url"=>str_replace("www.ultradox.com","images.open-org.com/rename-smartlinks/smartlink.php?id=",$obj['linkToTarget']));
//Send encoded JSON back to caller
echo json_encode($data);
?>