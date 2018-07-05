<?php
// below access-control-allow-origin allows all domains to access this API
// this code needs to updated to reflect appropriate domain security.
header("Access-Control-Allow-Origin: *");
include('connection.php');
//error_reporting(0); // turn off sql errors/warnings in production

// error code 0=no error, 1=no action, 2=no data
$failvalue [] = array("error" => "1", "num_rows" => "0", "data" => "no action found");
$passvalue [] = array("error" => "0", "num_rows" => "1", "data" => "data");

// g= get, p=profile, d=delete, n=none, v=validate, u=update
$action = isset($_GET["action"]) ? $_GET["action"] : '-';

switch ($action):
    case "v":
    // read data
        fetchData();
        break;
    case "u":  
    // update data 
    // make sure your HTML form looks like <form action="your-php-domain/connection_api.php?action=u" method="post">
        updateData();
        break;
    default:
        echo json_encode($failvalue);
endswitch;

function fetchData() {
$successreturn [] = array("SSAD_ID" => "NULL", "STD_NM" => "NULL");
$sql  = "SELECT SSAD_ID,SESSION_ID,ROLLNO,STD_NM,FATH_NM,CLS,PERCENT FROM SSBYSRSS";
    $objQuery = mysql_query($sql);
    $value=0;
$num_rows = mysql_num_rows($objQuery);
if($num_rows > 0) {
 while($objResult = mysql_fetch_array($objQuery)) 
       {
         $successreturn[$value]['SSAD_ID']=$objResult['SSAD_ID'];
         $successreturn[$value]['SESSION_ID']=$objResult['SESSION_ID'];
         $successreturn[$value]['ROLLNO']=$objResult['ROLLNO'];
         $successreturn[$value]['STD_NM']=$objResult['STD_NM'];
         $successreturn[$value]['FATH_NM']=$objResult['FATH_NM'];
         $successreturn[$value]['CLS']=$objResult['CLS'];
         $successreturn[$value]['PERCENT']=$objResult['PERCENT'];
         $value++;
        }
    $passvalue [] = array("error" => "0","num_rows" => $num_rows, "data" => $successreturn);
    echo json_encode($passvalue);
} else {
    $failvalue [] = array("error" => "2", "num_rows" => "0", "data" => "no data found");
    echo json_encode($failvalue);
}
}

function updateData() {
    $postdata = json_decode(file_get_contents("php://input"));
    $field1 = $postdata->field1;
    $field2 = $postdata->field2;
    $successreturn [] = array("SSAD_ID" => "NULL", "STD_NM" => "NULL");
    $sql  = "INSERT INTO MYSQL_TABLE VALUES('".$field1."','".$field2."')";
        $objQuery = mysql_query($sql);
        $value=0;
    $num_rows = mysql_num_rows($objQuery);
    $passvalue [] = array("error" => "0","num_rows" => $num_rows, "data" => $successreturn);
    echo json_encode($passvalue);
    }
mysql_close($conn);
?>
