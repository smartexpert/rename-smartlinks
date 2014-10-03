<?php 
$json = file_get_contents('php://input');
$obj = json_decode($json,true);
$data = array("url"=>str_replace("www.ultradox.com","images.open-org.com/smartlink.php?id=",$obj['linkToTarget']));
echo json_encode($data);
?>