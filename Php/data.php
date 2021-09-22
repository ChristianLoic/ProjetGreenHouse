
<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: application/json; charset=UTF-8");

$username = "u882331052_frontend"; // use your username  
$password = "Cegep2021";      // use your password
$host = "185.201.11.212";         // use your host name or address 
$database="u882331052_frontend";        // use your database name
 
 // Create connection
 $conn = new mysqli($host, $username, $password, $database);
 
 // Check connection
 if ($conn->connect_error) {
     die("Connection failed: " . $conn->connect_error);
 } 
 
   //echo "Connected successfully";
 $sql = "SELECT idData,datetime,typeData,data
 ,idSensor FROM tblData";
 $result = mysqli_query($conn,$sql); 
 $myArray = array();
 if ($result->num_rows > 0) {
 // output data of each row
     while($row = $result->fetch_assoc()) {
         $myArray[] = array_map("utf8_encode", $row);
     }
     print json_encode($myArray);
 } 
 else 
 {
     echo "0 results";
 }
