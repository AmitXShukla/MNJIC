<?php 
$server   = "xxxx";
$database = "xxxx";
$username = "xxxx";
$password = "xxxx";

$bd = mysql_connect($server, $username, $password);
if (!$conn)
{
  echo "Please try later.";
}
else
{
mysql_select_db($database, $bd);
//  echo "Connection done.";
}
?>